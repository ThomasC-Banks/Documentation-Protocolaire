import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsDateString,
  Matches,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Prénom de l’utilisateur',
    example: 'Tibo',
  })
  @IsOptional()
  @IsString({ message: 'first_name doit être une chaîne de caractères' })
  first_name?: string;

  @ApiPropertyOptional({
    description: 'Nom de l’utilisateur',
    example: 'TiboGOAT',
  })
  @IsOptional()
  @IsString({ message: 'name doit être une chaîne de caractères' })
  name?: string;

  @ApiPropertyOptional({
    description: 'Adresse email de l’utilisateur (doit finir par .com ou .fr)',
    example: 'tibo.pedago@example.com',
  })
  @IsOptional()
  @IsEmail({}, { message: 'mail doit être une adresse email valide' })
  @Matches(/^[\w.-]+@([\w-]+\.)+(com|fr)$/, {
    message: 'mail doit se terminer par .com ou .fr',
  })
  mail?: string;

  @ApiPropertyOptional({
    description: 'Mot de passe de l’utilisateur (minimum 6 caractères)',
    example: 'PiedDeTibo123!',
  })
  @IsOptional()
  @IsString({ message: 'password doit être une chaîne de caractères' })
  @MinLength(6, { message: 'password doit contenir au moins 6 caractères' })
  password?: string;

  @ApiPropertyOptional({
    description: 'Date de naissance de l’utilisateur',
    example: '2000-05-19',
  })
  @IsOptional()
  @IsDateString({}, { message: 'birth_date doit être une date valide' })
  birth_date?: string;
}
