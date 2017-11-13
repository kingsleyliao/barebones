process.env.NODE_ENV = 'test';
const app = require('../server.js');
const request = require('supertest');
const expect = require('chai').expect;
const baseUrl = "http://localhost:3000";

const userCredentials = {
  email: 'email@example.com',
  password: 'password'
};

var authenticatedUser = request.agent(app);

before(function(done){
  authenticatedUser
    .post('/api/login')
    .send(userCredentials)
    .end(function(err, response){
      expect(response.statusCode).to.equal(200);
      done();
    });
});

describe('GET /api/current_user', function(done){
  it('should return a 200 response if the user is logged in', function(done){
    authenticatedUser.get('/api/current_user')
    .end(function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('user should have an id', function(done){
    authenticatedUser.get('/api/current_user')
    .end(function(err, res) {
      expect(res.body._id).to.be.a('string');
      done();
    });
  });

  it('should return a 401 response if not logged in', function(done){
    request(app).get('/api/current_user')
    .expect(401, done);
  });
});
