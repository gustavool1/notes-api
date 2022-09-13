import * as dotenv from 'dotenv';

class IEnv {
  jwtSecret: string;
}
class Env extends IEnv {
  jwtSecret: string;

  constructor() {
    super();
    dotenv.config();
    this.setEnviroment();
  }

  setEnviroment() {
    this.jwtSecret = process.env.SECRET;
  }
}
export const env = new Env();
