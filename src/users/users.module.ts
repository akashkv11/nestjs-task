import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userSchema } from "./schemas/user.schema";
@Module({
  imports : [MongooseModule.forFeature([{ name:"User", schema: userSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
