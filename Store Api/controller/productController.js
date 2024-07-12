const productModel = require("../model/productModel");

const getAllproducts=async(req,res)=>{
    const {featured,company,name,sort,feild,numericFilters}=req.query;
    const queryObject={};
    if(featured){
        queryObject.featured=featured==='true'?true:false;
    }
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex:name,$options:'i'};
    }
    // if (numericFilters) {
    //     const operationMap = {
    //         '<': '$lt',
    //         '<=': '$lte',
    //         '=': '$eq',
    //         '>': '$gt',
    //         '>=': '$gte'
    //     };
    //     const options=['price','rating']
    //     const regex=/\b(<|>|<=|=|<|>=)|\b/g;
    //     let filters=numericFilters.replace(
    //         regex,
    //         (match)=>`-${operationMap[match]}-`
    //     )
    //     filters=filters.split(',').forEach(item => {
    //         const [feild,operator,value]=item.split('-');
    //         if(options.includes(feild)){
    //             queryObject[feild]={[operator]:Number(value)}
    //         }
    //     });
    // }
    
    if (numericFilters) {
        const operationMap = {
            '<': '$lt',
            '<=': '$lte',
            '=': '$eq',
            '>': '$gt',
            '>=': '$gte'
        };
    
        const conditionArray = numericFilters.split(',');
        conditionArray.forEach(condition => {
            const match = condition.match(/(\w+)([<>]?=?)\s*([\d.]+)/);
            if (match) {
                const [_, field, operator, valueStr] = match;
                const mongoOperator = operationMap[operator];
                const value = parseFloat(valueStr);
                queryObject[field] = { [mongoOperator]: value };
            } else {
                console.log(`Invalid filter condition: ${condition}`);
            }
        });
    }
    console.log(queryObject);
    const result= productModel.find(queryObject);
    if(sort){
        const sortList=sort.split(',').join(' ');
        result.sort(sortList);
    }
    else{
        result.sort('createdAt');
    }
    if(feild){
        const feildList=feild.split(',').join(' ');
        result.select(feildList);
    }
    
    const page=Number(req.query.page) || 1;
    const limit=Number(req.query.limit) || 10;
    const skip=(page-1)*limit;

    const allProducts= await result.skip(skip).limit(limit);    

    res.status(200).json({produts:{allProducts},count:allProducts.length});
}

const getAllProductsStatic=async(req,res)=>{
    res.send("all Products Route Static");
}

module.exports={getAllproducts,getAllProductsStatic}