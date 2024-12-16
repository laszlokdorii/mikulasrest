import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateGyerekekDto {
    @IsNumber()
    @IsNotEmpty()
    id:number
    @IsNotEmpty()
    @IsString()
    nev: string
    @IsNotEmpty()
    @IsString()
    cim: string
    @IsNotEmpty()
    @IsBoolean()
    joVoltE: boolean
}
