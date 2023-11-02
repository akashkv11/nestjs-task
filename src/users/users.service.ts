import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getOneWithId(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }
  async getOneWithUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username });
  }

  async createUser(user: User): Promise<User | string> {
    const newUser = new this.userModel(user);

    try {
      const result = await newUser.save();
      return result;
    } catch (error) {
      console.log(error);
      return 'This email already exists';
    }
  }
  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async updateUser(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
