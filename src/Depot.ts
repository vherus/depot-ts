import { Command } from "./Command";
import { CommandBus } from "./CommandBus";
import { Registry } from "./Registry";

export class Depot implements CommandBus {
    private registry: Registry;

    constructor(registry: Registry) {
        this.registry = registry;
    }

    async dispatch(command: Command): Promise<any> {
        return await this.registry.resolve(command).handle(command);
    }
}
