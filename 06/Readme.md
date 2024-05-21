# API Accelerate Demo 6 - MySQL

## Overview
This app demonstrates how to implement database access. This app requires additional setup because it needs an active MySQL database server and database deployment. 

The config file includes this section:

```
  database: {
    name: "main",
    adapter:            "mysql",
    host:               process.env.DB_HOST        || 'localhost',
    port:               process.env.DB_PORT        || null,
    user:               process.env.DB_USER        || 'main',
    password:           process.env.DB_PASSWORD    || 'password',
    database:           process.env.DB_DATABASE    || 'persons',
    connections:        process.env.DB_CONNECTIONS || 10,
    logging: {
      connections:      true,
      queries:          true
    }
  }
```

This configures a database adapter which is then available to the application for making database queries. The use of this adapter can be seen in the model **/models/persons.js**. 

Note that this includes logging configuration to generate extended output, useful for debugging. 

By default, the server is configured to run on port `10006`. 

## Getting Started
### 1․ Install MySQL server.

This app requires a MySQL server running on the local host. Alternatively, the configuration may be changed to access a server on another host. 

### 2․ Enter the demo application folder. 

```
cd 06
```

### 3․ Create and populate the database.

Make sure there is not already a database named `demo`. If there is, it will be destroyed. 

Run the script **/sql/aa_demo**. This will create the database and tables, and populate the test data. 

Note: If you are using a version of MySQL earlier than 8.0, run the script **/sql/aa_demo.7x.sql** instead. 

### 4․ Install the dependencies. 

```
npm install
```

### 5․ Run the application. 

```
npm start
```

### 6․ Test. 
This assumes the **API Accelerate Demos** Postman collection is installed. 

Run the various *Demo 6* Postman requests. You will be able to read, create, and update records. 

### 7․ Stop the application. 

From the console press Ctrl-C. 
