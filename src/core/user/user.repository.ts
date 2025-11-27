import { randomUUID } from "crypto";
import { CreateUser, User } from "./user";

export class UserRepository {
    users: User[] = [];

    create = (dto: CreateUser) => {
        const newUser: User = {
            id: randomUUID(),
            name: dto.name,
            email: dto.email,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.users.push(newUser);
        return newUser;
    }

    findAll = (): User[] => {
        return this.users;
    }

    findById = (id: string): User | undefined => {
        return this.users.find(user => user.id === id);
    }

    deleteById = (id: string): boolean => {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);
        return true;
    }
}
