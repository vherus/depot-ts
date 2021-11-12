import { Handler } from "./Handler";
import { Command } from "./Command";
import { Registry } from "./Registry";
import { Depot } from "./Depot";

export const testCommand = new class implements Command {
    getName(): string {
        return 'TestCommand';
    }
}

export const testHandler = new class implements Handler {
    async handle(command: Command): Promise<string> {
        return command.getName();
    }
}

export const testRegistry = new Registry([
    ['TestCommand', testHandler]
]);

export const depot = new Depot(testRegistry);
