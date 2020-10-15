
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
dotenv.config();

const { expect } = chai;
chai.use(chaiHttp);

const host = `${process.env.HOST}:${process.env.PORT}`;

describe('API TEST FOR PARSER V1 and V2', () => {
   
    describe('/api/v1/parse', async () => {
        describe('v1 JOHN0000MICHAEL0009994567', () => {
            let res: any;
            before(async () => {
                res = await chai
                    .request(host)
                    .post('/api/v1/parse')
                    .set('content-type', 'application/json')
                    .send({
                        "data": "JOHN0000MICHAEL0009994567"
                    });
            });
  
            it('Should have status 200', () => {
                expect(res).to.have.status(200);
            });
  
            it('Should have the response data', () => {
                expect(res.body).to.have.nested.property('data');
                expect(res.body.data.firstName).equal("JOHN0000");
                expect(res.body.data.lastName).equal("MICHAEL000");
                expect(res.body.data.clientId).equal("9994567");
            });
        });

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

        describe('**Negative Scenario** v1 empty data', () => {
            let res: any;
            before(async () => {
                res = await chai
                    .request(host)
                    .post('/api/v1/parse')
                    .set('content-type', 'application/json')
                    .send({
                        
                    });
            });
  
            it('Should have status 500', () => {
                expect(res).to.have.status(500);
            });
  
            it('Should have the response data', () => {
              
               
                expect(res.body.error).equal("Server Error");
               
            });
        });
    });

    describe('/api/v2/parse', async () => {
        describe('v1 JOHN0000MICHAEL0009994567', () => {
            let res: any;
            before(async () => {
                res = await chai
                    .request(host)
                    .post('/api/v2/parse')
                    .set('content-type', 'application/json')
                    .send({
                        "data": "JOHN0000MICHAEL0009994567"
                    });
            });
  
            it('Should have status 200', () => {
                expect(res).to.have.status(200);
            });
  
            it('Should have the response data', () => {
                expect(res.body).to.have.nested.property('data');
                expect(res.body.data.firstName).equal("JOHN");
                expect(res.body.data.lastName).equal("MICHAEL");
                expect(res.body.data.clientId).equal("999-4567");
            });
        });

        describe('v1 VIGNESH0000KB0009994567', () => {
            let res: any;
            before(async () => {
                res = await chai
                    .request(host)
                    .post('/api/v2/parse')
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
                expect(res.body.data.firstName).equal("VIGNESH");
                expect(res.body.data.lastName).equal("KB");
                expect(res.body.data.clientId).equal("999-4567");
            });
        });

        describe('**Negative Scenario** v2 empty data', () => {
            let res: any;
            before(async () => {
                res = await chai
                    .request(host)
                    .post('/api/v2/parse')
                    .set('content-type', 'application/json')
                    .send({});
            });
  
            it('Should have status 500', () => {
                expect(res).to.have.status(500);
            });
  
            it('Should have the response data', () => {
               expect(res.body.error).equal("Server Error");
            });
        });
    });
  
});


