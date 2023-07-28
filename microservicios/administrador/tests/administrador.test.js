const request = require('supertest')
const app = require('../index.js')

describe('Administrador...', function() {
    it('Obtener persona', function(done) {
        request(app)
            .post('/person/read')
            .send({
                id_person: 1,
                rol: 1,
            })
            .set('Accept', 'application/json')
            .expect(401, done);
    });
/*
    it('Obteniendo el resultado de un reporte', function(done) {
        request(app)
            .get('/esb/admin/report/country')
            .query({
                pais: 10
            })
            .set('Accept', 'application/json')
            .expect(401, done);
    });*/
});