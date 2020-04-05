import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDAO } from 'models/user.dao';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAllUsers() {
        return this.usersService.findAll();
    }

    @Post()
    addUser(@Body() user: UserDAO) {
        return this.usersService.add(user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.usersService.delete(id);
    }
}
