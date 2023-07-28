const request = require('supertest')
const app = require('../server.js')

describe('Cliente...', function() {
    /* it('Usuario obtiene una membresia', function(done) {
        request(app)
            .post('/client/membership')
            .send({
                id_client: 1,
            })
            .set('Accept', 'application/json')
            .expect(200, done);
    }); */


    it('Cliente solicita reseteo de password', function(done) {
        request(app)
            .post('/client/send-reset-email')
            .send({
                email: "alisonleiva24@gmail.com",
            })
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});