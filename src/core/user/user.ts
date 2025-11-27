export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUser {
    name: string;
    email: string;
    password: string;
}
