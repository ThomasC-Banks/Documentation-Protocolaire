import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: "Prénom de l'utilisateur",
    example: 'Luka',
  })
  @IsNotEmpty({ message: 'first_name ne peut pas être vide' })
  @IsString()
  first_name: string;

  @ApiProperty({
    description: "Nom de l'utilisateur",
    example: 'YasuoLover',
  })
  @IsNotEmpty({ message: 'name ne peut pas être vide' })
  @IsString()
  name: string;

  @ApiProperty({
    description: "Adresse email de l'utilisateur (doit finir par .com ou .fr)",
    example: 'luka.rushgold@example.com',
  })
  @IsNotEmpty({ message: 'mail ne peut pas être vide' })
  @IsEmail({}, { message: 'mail doit être une adresse email valide' })
  @Matches(/^[\w.-]+@([\w-]+\.)+(com|fr)$/, {
    message: 'mail doit se terminer par .com ou .fr',
  })
  mail: string;

  @ApiProperty({
    description: 'Mot de passe (minimum 6 caractères)',
    example: 'GoatPromo',
  })
  @IsNotEmpty({ message: 'password ne peut pas être vide' })
  @IsString()
  @MinLength(6, { message: 'password doit contenir au moins 6 caractères' })
  password: string;

  @ApiProperty({
    description: 'Date de naissance (optionnelle)',
    example: '2007-03-21',
    required: false,
  })
  @IsOptional()
  @IsDateString({}, { message: 'birth_date doit être une date valide' })
  birth_date?: string;
}
