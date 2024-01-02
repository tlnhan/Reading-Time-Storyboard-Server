import { Controller, Post, Body } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  async login(
    @Body() credentials: { Email: string; Password: string },
  ): Promise<ResponseData<string>> {
    try {
      const user = await this.authenticationService.findOneByUsername(
        credentials.Email,
      );

      if (!user || credentials.Password !== user.Password) {
        return new ResponseData<string>(
          null,
          HttpStatus.ERROR,
          HttpMessage.ERROR,
        );
      }

      const token = await this.authenticationService.generateToken(user);
      return new ResponseData<string>(
        token,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<string>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
