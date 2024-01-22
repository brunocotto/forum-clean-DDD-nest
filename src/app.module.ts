import { Module } from '@nestjs/common'
import { PrismaUserService } from './prisma/prisma-user.service'
import { PrismaOccurrenceService } from './prisma/prisma-occurrence.service'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [PrismaUserService, PrismaOccurrenceService],
})
export class AppModule {}
