export class CommandMappingError extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, CommandMappingError.prototype);
    }
}
