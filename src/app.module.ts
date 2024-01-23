import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { PrismaUserService } from './prisma/prisma-user.service'
import { PrismaOccurrenceService } from './prisma/prisma-occurrence.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './controllers/authenticate.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [CreateAccountController, AuthenticateController],
  providers: [PrismaUserService, PrismaOccurrenceService],
})
export class AppModule {}
