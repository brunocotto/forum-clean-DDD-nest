import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '../../prisma/generated/user-client'

@Injectable()
export class PrismaUserService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['query', 'warn', 'error'],
    })
  }

  onModuleInit() {
    this.$connect()
  }

  onModuleDestroy() {
    this.$disconnect()
  }
}
