import {
  IsString,
  IsInt,
  IsEmail,
  Min,
  Max,
  Length,
  min,
  max,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { UserAddressDto } from "./user-address.dto";
import { Type } from 'class-transformer';

export default class CreateUserDto {
  // readonly _id: string;

  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @Min(0)
  @Max(99)
  readonly age: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(()=> UserAddressDto)
  readonly address: UserAddressDto;

  @Length(9, 11)
  readonly phone: string;

  @IsString()
  readonly password: string;
}





























































  