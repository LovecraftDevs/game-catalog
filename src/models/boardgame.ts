import { Collectable } from "./interfaces/collectable";

export class Boardgame extends Collectable {
  name: string;
  uniqueId: string;
  description?: string;

  constructor(name: string, uniqueId: string) {
    super();
    this.name = name;
    this.uniqueId = uniqueId;
  }
}
