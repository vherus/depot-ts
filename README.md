# Depot

**Depot** is a command bus that resolves commands to a relevant handler and then executes logic. This is very useful for decoupling your application.

Let's say you have an app where you can create Users in a database. You can create a command for that:

```ts
import { Command, Handler, Registry, Depot } from 'depot-command-bus';

class CreateUser implements Command {
    private _username: string;
    private _email: string;

    constructor(username: string, email: string) {
        this._username = username;
        this._email = email;
    }

    get username(): string { return this._username }
    get email(): string { return this._email }

    getName(): string {
        return 'CreateUser';
    }
}
```

Next, you'll create the handler that does the creation:

```ts
class CreateUserHandler implements Handler {
    private dbClient: SomeDbClient;

    async handle(command: CreateUser): Promise<any> {
        return await this.dbClient.create({
            user: {
                username: command.username,
                email: command.email
            }
        })
    }
}
```

Depot uses a `Registry` to map commands to handlers. The `Registry` takes an array of tuples, using the command name as [0] and the handler as [1]:

```ts
const registry = new Registry([
    ['CreateUser', new CreateUserHandler(yourDbClient)]
]);

const commandBus = new Depot(registry);

const cmd = new CreateUser('nathan', 'nathan@nathan.com');

const createdUser = await commandBus.dispatch(cmd);
```
