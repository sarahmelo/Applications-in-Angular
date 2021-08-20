import { UniqueIdService } from "./unique-id.service"

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generatePrefixWithId.name} should return app when generated id with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generatePrefixWithId('app')

  expect(id.startsWith('app-')).toBeTrue()

  })

})
