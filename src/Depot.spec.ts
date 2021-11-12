import { depot, testCommand } from './mocks';

describe("Depot", () => {
    it("should run the mapped handler handle method for a mapped command", async () => {
        expect(depot.dispatch(testCommand)).resolves.toEqual('TestCommand');
    });
});