import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsDateString,
  Matches,
  MinLength,
} from 'class-validator';
import { IsPastDate } from '../validator/is-past-date.validator';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Prénom de l’utilisateur',
    example: 'Tibo',
  })
  @IsOptional()
  @IsString({ message: 'Le prénom doit être une chaîne de caractères' })
  first_name?: string;

  @ApiPropertyOptional({
    description: 'Nom de l’utilisateur',
    example: 'TiboGOAT',
  })
  @IsOptional()
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  name?: string;

  @ApiPropertyOptional({
    description: 'Adresse email de l’utilisateur',
    example: 'tibo.pedago@example.com',
  })
  @IsOptional()
  @IsEmail({}, { message: "L'email doit être une adresse email valide" })
  @Matches(/^[\w.-]+@([\w-]+\.)+(com|fr)$/, {
    message: "L'email doit se terminer par .com ou .fr",
  })
  mail?: string;

  @ApiPropertyOptional({
    description: 'Mot de passe de l’utilisateur',
    example: 'PiedDeTibo123!',
  })
  @IsOptional()
  @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
  @MinLength(6, {
    message: 'Le mot de passe doit contenir au moins 6 caractères',
  })
  password?: string;

  @ApiPropertyOptional({
    description: 'Date de naissance de l’utilisateur',
    example: '2000-05-19',
  })
  @IsOptional()
  @IsDateString(
    {},
    { message: 'La date de naissance doit être une date ISO 8601 valide' },
  )
  @IsPastDate()
  birth_date?: string;
}
