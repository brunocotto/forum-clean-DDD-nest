import { Uploader } from '@/domain/forum/application/storage/uploader'
import { Module } from '@nestjs/common'
import { AwsStorage } from './aws-storage'
import { EnvModule } from '../env/env.module'

@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: Uploader,
      useClass: AwsStorage,
    },
  ],
  exports: [Uploader],
})
export class StorageModule {}
