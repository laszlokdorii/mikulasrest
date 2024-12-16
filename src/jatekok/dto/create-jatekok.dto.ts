import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateJatekokDto {
    @IsNotEmpty()
    @IsNumber()
    id:number
    @IsNotEmpty()
    @IsString()
    megnevezes: string
    @IsNotEmpty()
    @IsString()
    anyag: string
    @IsNotEmpty()
    @IsNumber()
    suly: number
}
