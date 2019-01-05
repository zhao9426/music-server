'use strict';

const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should POST /api/users 422', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/users')
      .send({
        accesstoken: '123',
      })
      .expect(422)
      .expect({
        error: 'Validation Failed',
        detail: [
          { message: 'required', field: 'name', code: 'missing_field' },
          { message: 'required', field: 'pwd', code: 'missing_field' },
        ],
      });
  });

  it('should POST /api/users/ 201', () => {
    app.mockCsrf();
    app.mockService('users', 'create', 123);
    return app.httpRequest()
      .post('/api/users')
      .send({
        accesstoken: '123',
        name: 'test',
        pwd: '123',
      })
      .expect(201)
      .expect({
        id: 123,
      });
  });

});
