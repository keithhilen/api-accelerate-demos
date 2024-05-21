# API Accelerate Demo 3 - Amortization Model

## Overview
This app implements an amortization calculator model. The rate, principal and term are provided as POST parameters. The application uses these to generate an amortization schedule. 

The POST parameters are provided in JSON format. Example:

```
{
      "rate": 0.055,
      "principal": 400000,
      "term": 360
}
```

By default, the server is configured to run on port `10003`. 

## Getting Started
### 1․ Enter the demo application folder. 

```
cd 03
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
This assumes the **API Accelerate Demos** Postman collection is installed. Run the POST request Demo 3 / Amortization. You should see the results of an amortization calculation. 

### 5․ Stop the application. 

From the console press Ctrl-C. 
