import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UserAddressDto {
    @IsNotEmpty()
    @IsString()
    street: string;
    
    @IsNotEmpty()
    @IsString()
    country: string;
    
    @IsNotEmpty()
    @IsInt()
    pincode: number;
}