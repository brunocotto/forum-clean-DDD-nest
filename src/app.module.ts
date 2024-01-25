import { CreateQuestionController } from './controllers/create-question.controller'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account.controller'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './controllers/authenticate.controller'
import { PrismaService } from './prisma/prisma.service'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    FetchRecentQuestionsController,
    CreateQuestionController,
    CreateAccountController,
    AuthenticateController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
