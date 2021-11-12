import { Command } from "./Command";
import { CommandMappingError } from "./CommandMappingError";
import { Handler } from "./Handler";

export class Registry {
    private registry: [string, Handler][];

    constructor(registry: [string, Handler][]) {
        this.registry = registry;
    }

    resolve(command: Command): Handler {
        const resolved = this.registry.find((mapping: [string, Handler]) => mapping[0] === command.getName());

        if (!resolved) {
            throw new CommandMappingError(`Command ${command.getName()} could not be resolved. It might not be mapped to a handler.`);
        }

        return resolved[1];
    }
}
