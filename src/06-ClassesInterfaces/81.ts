// 81. Interfaces As Object Types

interface Authenticatable {
    email: string;
    password: string;

    login(email: string, password: string): boolean;
    logout(): void;
}

let user81: Authenticatable;

user81 = {
    email: "user81@gmail.com",
    password: "password123",
    login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    },
    logout(): void {
        console.log("User logged out");
    }
}