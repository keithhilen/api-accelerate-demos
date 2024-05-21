# API Accelerate Demo 4 - CRUD

## Overview
This app implements a simple set of in-memory Create, Read, Update, Delete (CRUD) actions. 

By default, the server is configured to run on port `10004`. 

## Getting Started
### 1․ Enter the demo application folder. 

```
cd 04
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

Run the various *Demo 4* Postman requests. You should see responses as described above. 

### 5․ Stop the application. 

From the console press Ctrl-C. 

## Postman Requests
### Get List of Records (GET)
Retrieves a list of all records. Example response:

```
[
    {
        "person_id": 1,
        "first_name": "Walt",
        "last_name": "Whitman",
        "email_address": "whitman@poets.net"
    },
    {
        "person_id": 2,
        "first_name": "Emily",
        "last_name": "Dickenson",
        "email_address": "dickenson@poets.net"
    }
]
```

### Get Specific Record (GET)
Retrieves a specifc record by ID. The record ID is specified in the request path. Example response:

```
{
    "person_id": 1,
    "first_name": "Walt",
    "last_name": "Whitman",
    "email_address": "whitman@poets.net"
}
```

### Create a Record (POST)
This request creates a new record. The fields are specified as a POST body. Example:

```
{
    "first_name": "William",
    "last_name": "Shakespeare",
    "email_address": "shakespeare@poets.net"
}
```

The server returns with the new record, including the assigned record ID. Example: 

```
{
    "person_id": 4,
    "first_name": "William",
    "last_name": "Shakespeare",
    "email_address": "shakespeare@poets.net"
}
```

Fetch the list of records again, and note that a new record now exists:

```
[
    {
        "person_id": 1,
        "first_name": "Walt",
        "last_name": "Whitman",
        "email_address": "whitman@poets.net"
    },
    {
        "person_id": 2,
        "first_name": "Emily",
        "last_name": "Dickenson",
        "email_address": "dickenson@poets.net"
    },
    {
        "person_id": 3,
        "first_name": "William",
        "last_name": "Shakespeare",
        "email_address": "shakespeare@poets.net"
    }
]
```

### Update a Record (PUT)
This alters one or more record fields. The record ID is specified in the request path. Fields to be changed are included in a request body. Only fields provided are altered. 
Example request body:

```
{
    "first_name": "Willy"
}
```

The response is the full updated record. Example:

```
{
    "person_id": 3,
    "first_name": "Willy",
    "last_name": "Shakespeare",
    "email_address": "shakespeare@poets.net"
}
```

Fetch the list of records again, and note the change:

```
[
    {
        "person_id": 1,
        "first_name": "Walt",
        "last_name": "Whitman",
        "email_address": "whitman@poets.net"
    },
    {
        "person_id": 2,
        "first_name": "Emily",
        "last_name": "Dickenson",
        "email_address": "dickenson@poets.net"
    },
    {
        "person_id": 3,
        "first_name": "Willy",
        "last_name": "Shakespeare",
        "email_address": "shakespeare@poets.net"
    }
]
```
