import { Body, Controller, Post, UseGuards, UsePipes } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe'
import { z } from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@UseGuards(JwtAuthGuard)
@Controller('/questions')
export class CreateQuestionController {
  @Post()
  @UsePipes(new ZodValidationPipe(createQuestionBodySchema))
  async handle(
    @Body()
    body: CreateQuestionBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    console.log(user)
  }
}
