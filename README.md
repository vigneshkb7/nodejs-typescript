### NodeJS Parser Typescript

# setup

Install dependencies

```
npm install
```

Test

```
npm run test

```

Coverage

```
npm run test-coverage

```

# API Design

Used the following below to create API - Node JS - Express - Typescript - chai and Mocha for testing - nyc for Coverage

API design follows the MVC design approach

1. created interface for parser response

```

/**
 *  Parser interface
 */

export interface Parser{
    firstName: string;
    lastName: string;
    clientId: string;
}

```

2. Create Separate Route folder for v1 v2

   Mapped the corresponding routes with the corresponding controller

3. Created Controller to parse the data which return the expected response error handling is taken care

4. Created Util to have the mapping of HTTP_CODES

# API TEST CASES

covered all positive and negative test case scenario with different data

```

describe('v1 VIGNESH0000KB0009994567', () => {
            let res: any;
            before(async () => {
                res = await chai
                    .request(host)
                    .post('/api/v1/parse')
                    .set('content-type', 'application/json')
                    .send({
                        "data": "VIGNESH0000KB0009994567"
                    });
            });

            it('Should have status 200', () => {
                expect(res).to.have.status(200);
            });

            it('Should have the response data', () => {
                expect(res.body).to.have.nested.property('data');
                expect(res.body.data.firstName).equal("VIGNESH0000");
                expect(res.body.data.lastName).equal("KB000");
                expect(res.body.data.clientId).equal("9994567");
            });
        });
```

# Postman

Attached postman collection inside the postman folder.
