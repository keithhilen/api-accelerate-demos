# API Accelerate Demo 2 - Basic App with Model

## Overview
This app provides a single endpoint which returns the message "This is a test". This example incorporates a model which the controller invokes. 

By default, the server is configured to run on port `10002`. 

Note as well that the config file includes some extra features. In the server section, the **prettify_json** setting is set to true. This means that JSON strings sent back to the client will be formatted with new lines and indentation, making them more human readable. This is a global setting that applies to all responses with JSON content. 

The confif file also includes this section:

```
  logger: {
    system:              true,
    trace:               true,
    request:             true,
    exception:           true
  }
}
```

This turns on extended logging, which is useful for debugging. More info on this is found in the API Accelerate documentation. 

## Getting Started
### 1․ Enter the demo application folder. 

```
cd 02
```

### 2․ Install the dependencies. 

```
npm install
```

### 3․ Run the application. 

```
npm start
```

### 4․ Test. 
This assumes the **API Accelerate Demos** Postman collection is installed. Run the request *Demo 2 / Test*. You should see the message **This is a test**. 

### 5․ Stop the application. 

From the console press Ctrl-C. 
