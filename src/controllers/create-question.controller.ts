import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CurrentUser } from "src/auth/current-user.decorator";
import { TokenPayload } from "src/auth/jwt.strategy";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

const createQuestionSchema = z.object({
  title: z.string(),
  content: z.string(),
});

type CreateQuestionBodySchema = z.infer<typeof createQuestionSchema>;

const bodyValidationPipe = new ZodValidationPipe(createQuestionSchema);

@Controller("/questions")
@UseGuards(AuthGuard("jwt"))
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @CurrentUser() user: TokenPayload,
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
  ) {
    const { title, content } = body;
    const userId = user.sub;
    const slug = this.convertToSlug(title);

    await this.prisma.question.create({
      data: {
        title,
        content,
        slug,
        authorId: userId,
      },
    });
  }

  private convertToSlug(title: string) {
    return title.toLowerCase().normalize("NFD").replace(/\s/g, "-");
  }
}
