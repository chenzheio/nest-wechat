import { Controller, Logger, Post, Req, Res } from '@nestjs/common';

import { ComponentService } from '../../lib/component.service';

import type { Request, Response } from 'express';


@Controller('component')
export class ComponentController {

  private readonly logger = new Logger(ComponentController.name);

  constructor(private readonly service: ComponentService) {
  }

  @Post('/push_ticket')
  async pushTicket (@Req() req: Request, @Res() res: Response) {
    const ticket = await this.service.pushTicket(req, res);
    this.logger.debug('pushTicket() ticket = ' + ticket);
  }

  @Post('/auth_event')
  async authChangedPush (@Req() req: Request, @Res() res: Response) {
    const xml = await this.service.authChangedPush(req, res);
    this.logger.debug('authChangedPush() code = ' + xml.AuthorizationCode);
  }

}