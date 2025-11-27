import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUser, User } from './user';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    create = (dto: CreateUser) => {

        const newUser = this.userRepository.create(dto);
        return newUser;
    }

    findAll = (): User[] => {
        return this.userRepository.findAll();
    }

    findById = (id: string): User | undefined => {
        const user = this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    deleteById = (id: string): { message: string } => {
        const deleted = this.userRepository.deleteById(id);
        if (!deleted) {
            throw new ForbiddenException('User not found');
        }
        return { message: "User deleted successfully" };
    }
}
