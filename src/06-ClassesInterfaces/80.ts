// 80. Creating a First Interface

interface Authenticatable {
    email: string;
    password: string;

    login(email: string, password: string): boolean;
    logout(): void;
}