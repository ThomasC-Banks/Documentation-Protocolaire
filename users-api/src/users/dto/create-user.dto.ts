import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsDateString, Matches, MinLength } from 'class-validator';
import { IsPastDate } from '../validator/is-past-date.validator';

export class CreateUserDto {
  @ApiProperty({ description: "Prénom de l'utilisateur", example: 'Luka' })
  @IsNotEmpty({ message: 'Le prénom ne peut pas être vide' })
  @IsString({ message: 'Le prénom doit être une chaîne de caractères' })
  first_name: string;

  @ApiProperty({ description: "Nom de l'utilisateur", example: 'YasuoLover' })
  @IsNotEmpty({ message: 'Le nom ne peut pas être vide' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  name: string;

  @ApiProperty({ description: "Adresse email de l'utilisateur", example: 'luka@example.com' })
  @IsNotEmpty({ message: "L'email ne peut pas être vide" })
  @IsEmail({}, { message: "L'email doit être une adresse email valide" })
  @Matches(/^[\w.-]+@([\w-]+\.)+(com|fr)$/, { message: "L'email doit se terminer par .com ou .fr" })
  mail: string;

  @ApiProperty({ description: "Mot de passe de l'utilisateur", example: '123456' })
  @IsNotEmpty({ message: 'Le mot de passe ne peut pas être vide' })
  @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  password: string;

  @ApiProperty({ description: 'Date de naissance (optionnelle)', example: '1985-09-09', required: false })
  @IsOptional()
  @IsDateString({}, { message: 'La date de naissance doit être une date ISO 8601 valide' })
  @IsPastDate()
  birth_date?: string;
}
