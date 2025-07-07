// 84. Implementing Interfaces

interface AuthenticatableI {
    email: string;
    password: string;
}

interface AuthenticatableI {
    login(email: string, password: string): boolean;
    logout(): void;
}

// TypeScript allows you to split an interface into multiple declarations.
// This is known as "declaration merging".
// When you declare the same interface multiple times, TypeScript merges them into a single interface.


// This class implements the merged interface AuthenticatableI.
// It must provide implementations for all properties and methods defined in the interface.
class Authenticatable implements AuthenticatableI {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    }

    logout(): void {
        console.log("User logged out");
    }
}

let user84: Authenticatable;

user84 = {
    email: "user84@gmail.com",
    password: "password123",
    login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    },
    logout(): void {
        console.log("User logged out");
    }
}