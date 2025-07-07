// 85. Ensuring Base Types with Interfaces

interface AuthenticatableI {
    email: string;
    password: string;
}

interface AuthenticatableI {
    login(email: string, password: string): boolean;
    logout(): void;
}


function authenticate85(user: AuthenticatableI) {
    user.login(user.email, user.password);
    return "User authenticated";
}
let user85: AuthenticatableI = {
    email: "user@gmail.com",
    password: "password123",
    login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    },
    logout(): void {
        console.log("User logged out");
    }
}

console.log(authenticate85(user85));