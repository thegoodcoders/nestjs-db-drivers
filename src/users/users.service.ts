import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../models/user.entity';
import { UserDAO } from 'models/user.dao';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    add(user: UserDAO) {
        return this.usersRepository.save(user);
    }

    delete(id: number) {
        return this.usersRepository.delete(id);
    }
}
