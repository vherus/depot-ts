import { Command } from "./Command";
import { CommandMappingError } from "./CommandMappingError";
import { Handler } from "./Handler";

export class Registry {
    private mappings: [string, Handler][];

    constructor(mappings: [string, Handler][]) {
        this.mappings = mappings;
    }

    resolve(command: Command): Handler {
        const resolved = this.mappings.find((mapping: [string, Handler]) => mapping[0] === command.getName());

        if (!resolved) {
            throw new CommandMappingError(`Command ${command.getName()} could not be resolved. It might not be mapped to a handler.`);
        }

        return resolved[1];
    }
}
