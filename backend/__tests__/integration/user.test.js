// import request from 'supertest';
// import app from '../../src/app';

// import factory from '../factories';
// import truncate from '../util/truncate';
import { authenticate } from '../util';
// import User from '../../src/app/models/User';

describe('User', () => {
  /**
   * Permita que um usuário se autentique em sua aplicação utilizando e-mail e uma senha.
   */
  it('should be able to authenticate with email and password', async () => {
    await authenticate();
  });

  /*
  it('should encrypt user password when new user is created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);
    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });
  */
});
