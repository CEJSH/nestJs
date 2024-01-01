import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
// app Controller에서는 작업을 거의 하지않음. 그냥 Base role.

/**
 * Controller에 입력한 path는 그 안에 입력한 데코레이터들에게 모두 중첩이 된다. like상속..
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
