import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { Student } from '@/domain/forum/enterprise/entities/student'

export class InMemoryStudentsRepository implements StudentsRepository {
  public items: Student[] = []

  async findById(id: string) {
    const student = this.items.find((item) => item.id.toString() === id)

    if (!student) {
      return null
    }

    return student
  }

  async findByEmail(email: string) {
    const student = this.items.find((item) => item.email === email)

    if (!student) {
      return null
    }

    return student
  }

  async create(student: Student) {
    this.items.push(student)
  }

  async delete(student: Student) {
    const itemIndex = this.items.findIndex((item) => item.id === student.id)

    this.items.splice(itemIndex, 1)
  }

  async save(student: Student) {
    const itemIndex = this.items.findIndex((item) => item.id === student.id)

    this.items[itemIndex] = student
  }
}
