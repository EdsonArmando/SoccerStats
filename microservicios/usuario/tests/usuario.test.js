const request = require('supertest')
const app = require('../server.js')

describe('Login...', function() {
    it('Credenciales correctas', function(done) {
        request(app)
            .post('/user/login')
            .send({
                email: 'alisonleiva27@gmail.com',
                password: '1234',
            })
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    
    it('Credenciales incorrectas', function(done) {
        request(app)
            .post('/user/login')
            .send({
                email: 'alisonleiva@hotmail.com',
                password: '123admin',
            })
            .set('Accept', 'application/json')
            .expect(400, done);
    });
});