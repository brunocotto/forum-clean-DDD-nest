import { Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { TokenPayload } from 'src/auth/jwt.strategy'

@UseGuards(JwtAuthGuard)
@Controller('/questions')
export class CreateQuestionController {
  @Post()
  async handle(@CurrentUser() user: TokenPayload) {
    console.log(user)
  }
}
