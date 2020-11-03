import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const authenticateUser = container.resolve(SendForgotPasswordEmailService);

    await authenticateUser.execute(email);

    return response.send(204).json();
  }
}
