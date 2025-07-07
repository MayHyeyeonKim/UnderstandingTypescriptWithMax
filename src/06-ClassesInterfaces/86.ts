// 86. Extending Interfaces

interface AuthenticatableII {
    email: string;
    password: string;
}

interface AuthenticatableII {
    login(email: string, password: string): boolean;
    logout(): void;
}

type AuthenticatableTT = {
    address: string;
}

interface AuthenticatableII extends AuthenticatableTT {
    phone: string;
}

function authenticate(user: AuthenticatableI) {
    user.login(user.email, user.password);
    return "User authenticated";
}
let user86: AuthenticatableII = {
    email: "user@gmail.com",
    password: "password123",
    login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    },
    logout(): void {
        console.log("User logged out");
    },
    phone: "",
    address: ""
}

console.log(authenticate(user86));