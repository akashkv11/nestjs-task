import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.getOneWithId(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto): Promise<User|string> {
    return this.userService.createUser(createUserDto)
  }

  @Put(':id')
  updateUser(
    @Body() updateUserDto: CreateUserDto,
    @Param('id') id: string,
  ): Promise<User> {
    return this.userService.updateUser(id,updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id)
  }
}
