// 92. Type Guards via "instanceof"

class User92 {
    constructor(public name: string) { }

    join() {
        // ...
    }
}

class Admin {
    constructor(permissions: string[]) { }

    scan() {
        // ...
    }
}

const user92 = new User92('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User92 | Admin;

function init(entity: Entity) {
    if (entity instanceof User92) {
        entity.join();
        return;
    }

    entity.scan();
}