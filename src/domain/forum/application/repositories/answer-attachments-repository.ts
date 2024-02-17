import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'

export interface AnswerAttachmentRepository {
  findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]>
  deleteByManyAnswerId(answerId: string): Promise<void>
}
