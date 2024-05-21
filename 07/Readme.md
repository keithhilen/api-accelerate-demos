# API Accelerate Demo 7 - Authentication

## Overview
This app demonstrates support for authentication. The user can log in and then access data. 

By default, the server is configured to run on port `10007`. 

## Getting Started
### 1․ Enter the demo application folder. 

```
cd 07
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
This assumes the ** API Accelerate Demos** Postman collection is installed. 

Open the *Demo 7* Postman folder. Issue a *Read Data* request - it should fail with a *401 Unauthorized* error. Then issue a Login request, and try a Read Data request again. It should then work. Issue a *Bad Login* request - it should return a *404 Not Found* error. Attempt *Read Data* again - it should fail. 

### 5․ Stop the application. 

From the console press Ctrl-C. 
