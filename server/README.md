# Mortgage Web API Standards

- [Guidelines](#guidelines)
- [RESTful URLs](#restful-urls)
- [HTTP Verbs](#http-verbs)
- [Responses](#responses)
- [Request & Response Examples](#request--response-examples)

## Guidelines

This document provides guidelines and examples for Mortgage APIs, encouraging consistency, maintainability, and best practices across applications.

This document borrows heavily from:

- [Designing HTTP Interfaces and RESTful Web Services](https://www.youtube.com/watch?v=zEyg0TnieLg)

## RESTful URLs

### General guidelines for RESTful URLs

- A URL identifies a resource.
- URLs should include nouns, not verbs.
- Use plural nouns only for consistency (no singular nouns).
- Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements.
- You shouldn’t need to go deeper than resource/identifier/resource.
- Put the version number at the base of your URL, for example http://example.com/v1/path/to/resource.
- URL v. header:
  - If it changes the logic you write to handle the response, put it in the URL.
  - If it doesn’t change the logic for each response, like OAuth info, put it in the header.
- Specify optional fields in a comma separated list.
- Formats should be in the form of api/resource/{id}

## HTTP Verbs

HTTP verbs, or methods, should be used in compliance with their definitions under the [HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) standard.
The action taken on the representation will be contextual to the media type being worked on and its current state. Here's an example of how HTTP verbs map to create, read, update, delete operations in a particular context:

| HTTP METHOD             | POST                      | GET                 | PUT                                       | DELETE                   |
| ----------------------- | ------------------------- | ------------------- | ----------------------------------------- | ------------------------ |
| CRUD OP                 | CREATE                    | READ                | UPDATE                                    | DELETE                   |
| /api/mortgage-loan/     | Create new mortgage loans | List mortgage loan  | Error                                     | Delete all mortgage loan |
| /api/mortgage-loan/1234 | Error                     | Show moartgage loan | If exists, update mortgage; If not, error | Delete mortgage          |

## Responses

- No values in keys
- No internal-specific names (e.g. "node" and "taxonomy term")
- Metadata should only contain direct properties of the response set, not properties of the members of the response set

## Request & Response Examples

### API Resources

- [GET /api/mortgage-loan](#get-mortgage-loan)
- [GET /api/mortgage-loan/[id]](#get-mortgage-loan-id)
- [POST api/mortgage-loan](#post-mortgage-loan)
- [POST api/mortgage-loan/\_bulk](#post-mortgage-loan-bulk)
- [PUT api/mortgage-loan/[id]](#put-mortgage-loan-id)
- [DELETE api/mortgage-loan/[id]](#delete-mortgage-loan)

### GET /mortgage-loan

Example: http://tkxel.tk/api/mortgage-loan

Response body:

    {
        "data": [
            {
                "loanNo": "3",
                "type": "Resi",
                "streetNo": "37",
                "street1": "3929516446",
                "street2": "9870117015",
                "city": "Veyno",
                "state": "",
                "zipCode": "123456789",
                "borrorOneFirst": "Marena",
                "borrorOneLast": "Volett",
                "borrorOneStreetNo": "27",
                "borrorOneStreet1": "Cambridge",
                "borrorOneStreet2": "Manitowish",
                "borrorOneCity": "Rrasa e Sipërme",
                "borrorOneState": "",
                "borrorOneZipCode": "",
                "borrorOneDOB": "2021-10-25",
                "borrorOneSocial": "123456789",
                "borrorOnePhone": "123654213",
                "borrorTwoFirst": "Miguelita",
                "borrorTwoLast": "Cornborough",
                "borrorTwoStreetNo": "68343",
                "borrorTwoStreet1": "Mayfield",
                "borrorTwoStreet2": "Swallow",
                "borrorTwoCity": "Sekararum",
                "borrorTwoState": "",
                "borrorTwoZipCode": "",
                "borrorTwoDOB": "2020-12-24",
                "borrorTwoSocial": "32164654",
                "borrorTwoPhone": "23132164"
            }
        ]

    }

### GET /mortgage-loan/[id]

Example: http://tkxel.tk/api/mortgage-loan/1234

Response body:

    {
        "data": {
            "loanNo": "3",
            "type": "Resi",
            "streetNo": "37",
            "street1": "3929516446",
            "street2": "9870117015",
            "city": "Veyno",
            "state": "",
            "zipCode": "123456789",
            "borrorOneFirst": "Marena",
            "borrorOneLast": "Volett",
            "borrorOneStreetNo": "27",
            "borrorOneStreet1": "Cambridge",
            "borrorOneStreet2": "Manitowish",
            "borrorOneCity": "Rrasa e Sipërme",
            "borrorOneState": "",
            "borrorOneZipCode": "",
            "borrorOneDOB": "2021-10-25T00:00:00.000Z",
            "borrorOneSocial": "123456789",
            "borrorOnePhone": "123654213",
            "borrorTwoFirst": "Miguelita",
            "borrorTwoLast": "Cornborough",
            "borrorTwoStreetNo": "68343",
            "borrorTwoStreet1": "Mayfield",
            "borrorTwoStreet2": "Swallow",
            "borrorTwoCity": "Sekararum",
            "borrorTwoState": "",
            "borrorTwoZipCode": "",
            "borrorTwoDOB": "2020-12-24T00:00:00.000Z",
            "borrorTwoSocial": "32164654",
            "borrorTwoPhone": "23132164"
        }

    }

### POST /api/mortgage-loan

Example: Create – POST http://tkxel.tk/api/mortgage-loan

Request body:

    {
        "loanNo": "194",
        "type": "Resi",
        "streetNo": "7623",
        "street1": "3c",
        "street2": "4d",
        "city": "New York",
        "state": "NY",
        "zipCode": "54321",
        "borrorOneFirst": "Foo",
        "borrorOneLast": "Foob",
        "borrorOneStreetNo": "123",
        "borrorOneStreet1": "12",
        "borrorOneStreet2": "14",
        "borrorOneCity": "CA",
        "borrorOneState": "CA",
        "borrorOneZipCode": "23423",
        "borrorOneDOB": "2016-10-05",
        "borrorOneSocial": "301121231",
        "borrorOnePhone": "1878666772",
        "borrorTwoFirst": "Hello",
        "borrorTwoLast": "World",
        "borrorTwoStreetNo": "234",
        "borrorTwoStreet1": "adf",
        "borrorTwoStreet2": "asdfa",
        "borrorTwoCity": "Beep Beep",
        "borrorTwoState": "WY",
        "borrorTwoZipCode": "23422",
        "borrorTwoDOB": "2016-10-05T14:48:00.000",
        "borrorTwoSocial": "301121231",
        "borrorTwoPhone": "1878666772"
    }

### POST /api/mortgage-loan/\_bulk

Example: Create – POST http://tkxel.tk/api/mortgage-loan/_bulk

Request body:

    [
        {
            "loanNo": "194",
            "type": "Resi",
            "streetNo": "7623",
            "street1": "3c",
            "street2": "4d",
            "city": "New York",
            "state": "NY",
            "zipCode": "54321",
            "borrorOneFirst": "Foo",
            "borrorOneLast": "Foob",
            "borrorOneStreetNo": "123",
            "borrorOneStreet1": "12",
            "borrorOneStreet2": "14",
            "borrorOneCity": "CA",
            "borrorOneState": "CA",
            "borrorOneZipCode": "23423",
            "borrorOneDOB": "2016-10-05",
            "borrorOneSocial": "301121231",
            "borrorOnePhone": "1878666772",
            "borrorTwoFirst": "Hello",
            "borrorTwoLast": "World",
            "borrorTwoStreetNo": "234",
            "borrorTwoStreet1": "adf",
            "borrorTwoStreet2": "asdfa",
            "borrorTwoCity": "Beep Beep",
            "borrorTwoState": "WY",
            "borrorTwoZipCode": "23422",
            "borrorTwoDOB": "2016-10-05T14:48:00.000",
            "borrorTwoSocial": "301121231",
            "borrorTwoPhone": "1878666772"
        }
    ]

### PUT /api/mortgage-loan/[id]

Example: Update – PUT http://tkxel.tk/api/mortgage-loan/1234

Request body:

    {
        "type": "Resi",
        "streetNo": "7623",
        "street1": "3c",
        "street2": "4d",
        "city": "New York",
        "state": "NY",
        "zipCode": "54321",
        "borrorOneFirst": "Foo",
        "borrorOneLast": "Foob",
        "borrorOneStreetNo": "123",
        "borrorOneStreet1": "12",
        "borrorOneStreet2": "14",
        "borrorOneCity": "CA",
        "borrorOneState": "CA",
        "borrorOneZipCode": "23423",
        "borrorOneDOB": "2016-10-05",
        "borrorOneSocial": "301121231",
        "borrorOnePhone": "1878666772",
        "borrorTwoFirst": "Hello",
        "borrorTwoLast": "World",
        "borrorTwoStreetNo": "234",
        "borrorTwoStreet1": "adf",
        "borrorTwoStreet2": "asdfa",
        "borrorTwoCity": "Beep Beep",
        "borrorTwoState": "WY",
        "borrorTwoZipCode": "23422",
        "borrorTwoDOB": "2016-10-05T14:48:00.000",
        "borrorTwoSocial": "301121231",
        "borrorTwoPhone": "1878666772"
    }

### DELETE /api/mortgage-loan/[id]

Example: Delete – DELETE http://tkxel.tk/api/mortgage-loan/1234

Response body:

    {
        "message": "Data successfully deleted"
    }
