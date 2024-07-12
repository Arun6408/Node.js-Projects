const { BadRequestError } = require("./bad-request");
const CustomAPIError = require("./custom-error");
const { UnauthorisedError } = require("./unauthorised");

module.exports={
    UnauthorisedError,BadRequestError,CustomAPIError
}