// 82. Interfaces vs Type Aliases & Understanding Declaration Merging

type AuthenticatableT = {
    email: string;
    password: string;

    login(email: string, password: string): boolean;
    logout(): void;
}

interface AuthenticatableI {
    email: string;
    password: string;
}

interface AuthenticatableI {
    login(email: string, password: string): boolean;
    logout(): void;
}

let user82: Authenticatable;

user82 = {
    email: "user82@gmail.com",
    password: "password123",
    login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    },
    logout(): void {
        console.log("User logged out");
    }
}