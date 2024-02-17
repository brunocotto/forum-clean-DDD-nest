import { QuestionAttachmentRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaQuestionAttachementsRepository
  implements QuestionAttachmentRepository
{
  constructor(private prisma: PrismaService) {}

  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]> {
    throw new Error('Method not implemented.')
  }

  deleteByManyQuestionId(questionId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
