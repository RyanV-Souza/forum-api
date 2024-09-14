import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { Question } from "@/domain/forum/enterprise/entities/question";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  findById(id: string) {
    throw new Error("Method not implemented.");
  }

  findBySlug(slug: string) {
    throw new Error("Method not implemented.");
  }

  findManyRecent(params: PaginationParams) {
    throw new Error("Method not implemented.");
  }

  save(question: Question) {
    throw new Error("Method not implemented.");
  }

  create(question: Question) {
    throw new Error("Method not implemented.");
  }

  delete(question: Question) {
    throw new Error("Method not implemented.");
  }
}
