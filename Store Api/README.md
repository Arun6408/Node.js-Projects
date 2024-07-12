# STORE API

## Overview

This project is a robust STORE API designed for managing product data with advanced searching and filtering capabilities. The API allows users to retrieve products based on various criteria, enhancing the flexibility and usability of the application.

## Searching Route

The main endpoint for retrieving products is:

```
http://localhost:{port}/api/v1/products
```

### Method

- **GET**: This endpoint supports various types of filters through query parameters.

### Filter Types

You can apply the following filters as query parameters:

- **featured**: Filter products that are featured.
- **company**: Filter products by company name.
- **name**: Filter products by product name.
- **sort**: Specify the sorting order of the results.
- **field**: Choose specific fields to return in the response.
- **numericFilters**: Filter products based on numeric criteria.

### Example Query

To retrieve products with specific filters, you can structure your query like this:

```
http://localhost:{port}/api/v1/products?featured=true&company=xyz&sort=price&field=name,price&numericFilters=price[>100]
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arun6408/Node.js-Projects/edit/main/Store%20Api
   ```

2. Navigate to the project directory:
   ```bash
   cd ./Store%20Api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=mongodb://your_mongo_uri_here
   PORT=<your-port-number>
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser or a tool like Postman and navigate to:
   ```
   http://localhost:{port}/api/v1/products
   ```
2. Append your desired query parameters to filter the results according to your needs.

