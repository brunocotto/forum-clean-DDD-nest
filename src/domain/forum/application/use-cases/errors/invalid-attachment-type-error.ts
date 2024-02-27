import { UseCaseError } from '@/core/errors/use-case-error'
export class InvalidAttachmentType extends Error implements UseCaseError {
  constructor() {
    super('File type is not valid.')
  }
}
