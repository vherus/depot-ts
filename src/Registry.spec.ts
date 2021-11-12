import { Registry } from './Registry';
import { testCommand, testHandler, testRegistry } from './mocks';

describe("Command Registry", () => {
    it("should resolve a command handler if the mapping exists", () => {
        expect(testRegistry.resolve(testCommand)).toEqual(testHandler);
    });

    it("should throw an exception if no mapping exists for the command", () => {
        const registry = new Registry([]);

        expect(() => registry.resolve(testCommand)).toThrowError('Command TestCommand could not be resolved. It might not be mapped to a handler.')
    });
});