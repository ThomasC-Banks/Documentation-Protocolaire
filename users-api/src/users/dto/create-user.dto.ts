import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsDateString, Matches } from 'class-validator';
import { IsPastDate } from '../validator/is-past-date.validator';

export class CreateUserDto {
  @ApiProperty({ description: "Prénom de l'utilisateur", example: 'Luka' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ description: "Nom de l'utilisateur", example: 'YasuoLover' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: "Adresse email de l'utilisateur", example: 'luka@example.com' })
  @IsNotEmpty()
  @IsEmail()
  @Matches(/^[\w.-]+@([\w-]+\.)+(com|fr)$/, {
    message: 'mail doit se terminer par .com ou .fr',
  })
  mail: string;

  @ApiProperty({ description: "Mot de passe de l'utilisateur", example: '123456' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ description: 'Date de naissance (optionnelle)', example: '1985-09-09', required: false })
  @IsOptional()
  @IsDateString()
  @IsPastDate({ message: 'La date de naissance ne peut pas être dans le futur' })
  birth_date?: string;
}
