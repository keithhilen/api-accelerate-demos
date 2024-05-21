# API Accelerate Demo 5 - Multiple Routers

## Overview
This app demonstrates the use of multiple routers. A router defines a base URL path and a folder that contains a set of route files that establish routes applied to that path. 

By default there is a single router at path **/** with route files in folder **/route**. However it is possible to change this with configuration. The config file for this app includes this section:

```
  routers: [
    {
      path: "/test1",
      folder: "routes_1"
    },
    {
      path: "/test2",
      folder: "routes_2"
    },
    {
      path: "/",
      folder: "routes"
    }
  ],
```

This defines three routers, each with different paths and file folders. Note that the order is important. The last router handles all paths not handled by the first two. 

By default, the server is configured to run on port `10005`. 

## Getting Started
### 1․ Enter the demo application folder. 

```
cd 05
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
This assumes the **API Accelerate Demos** Postman collection is installed. 

Run the various *Demo 5* Postman requests. You should see responses consistent with the router configuration. 

### 5․ Stop the application. 

From the console press Ctrl-C. 
