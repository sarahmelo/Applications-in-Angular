import { Injectable } from "@angular/core"
import { v4 as uuidV4 } from "uuid"

@Injectable()
export class UniqueIdService {

  //id
  numberGenerateIds = 0

  //generating prefix for id
  public generatePrefixWithId(prefix: string): string {
    if(!prefix) {
      throw new Error("Prefix can not be empty");

    }
    const uniqueId = this.generateUniqueId()
    this.numberGenerateIds++
    return `${prefix}-${uniqueId}`
  }

  public getNumberUniqueGenerateId(): number {
    return this.numberGenerateIds
  }

  //generating the id
  private generateUniqueId(): string {
    return uuidV4
  }
}
