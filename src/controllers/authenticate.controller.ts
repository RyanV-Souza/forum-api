import { Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

// const createAccountSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// });

// type CreateAccountBodySchema = z.infer<typeof createAccountSchema>;

@Controller("/sessions")
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createAccountSchema))
  async handle() {
    const token = this.jwt.sign({ id: 1 });

    return token;
  }
}
