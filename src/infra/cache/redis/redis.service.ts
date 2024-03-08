import { EnvService } from '@/infra/env/env.service'
import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { Redis } from 'ioredis'

@Injectable()
export class RedisService extends Redis implements OnModuleDestroy {
  constructor(private envService: EnvService) {
    super({
      host: envService.get('REDIS_HOST'),
      port: 6379,
      db: 0,
    })
  }

  onModuleDestroy() {
    return this.disconnect()
  }
}
