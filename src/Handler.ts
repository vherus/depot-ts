import { Command } from "./Command";

export interface Handler {
    handle(command: Command): Promise<any>;
}