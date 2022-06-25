import { Controller, Post } from '@nestjs/common';
import { User } from '../user/models/user.model';

@Controller('auth')
export class AuthController {

  @Post('login')
  async login(): Promise<User> {
    return {
      id: 1,
      name: 'Devashish Sarmah',
      email: 'devashish.dev.sarmah@gmail.com'
    }
  }
}
