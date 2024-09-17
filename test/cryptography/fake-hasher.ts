import { HashComparer } from "@/domain/forum/cryptography/hash-comparer";
import { HashGenerator } from "@/domain/forum/cryptography/hash-generator";

export class FakerHasher implements HashGenerator, HashComparer {
  async hash(plain: string) {
    return plain.concat("-hashed");
  }

  async compare(plain: string, hashed: string) {
    return plain.concat("-hashed") === hashed;
  }
}
