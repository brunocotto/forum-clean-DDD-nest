import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { PrismaUserService } from 'src/prisma/prisma-user.service'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaUserService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    const { name, email, password, phone, company } = body

    await this.prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
        company,
      },
    })
  }
}
