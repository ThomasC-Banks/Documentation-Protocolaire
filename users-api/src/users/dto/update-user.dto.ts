import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsDateString,
  Matches,
} from 'class-validator';
import { IsPastDate } from '../validator/is-past-date.validator';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Prénom de l’utilisateur',
    example: 'Tibo',
  })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiPropertyOptional({
    description: 'Nom de l’utilisateur',
    example: 'TiboGOAT',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Adresse email de l’utilisateur',
    example: 'tibo.pedago@example.com',
  })
  @IsOptional()
  @IsEmail()
  @Matches(/^[\w.-]+@([\w-]+\.)+(com|fr)$/, {
    message: 'mail doit se terminer par .com ou .fr',
  })
  mail?: string;

  @ApiPropertyOptional({
    description: 'Mot de passe de l’utilisateur',
    example: 'PiedDeTibo123!',
  })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional({
    description: 'Date de naissance de l’utilisateur',
    example: '2000-05-19',
  })
  @IsOptional()
  @IsDateString()
  @IsPastDate({
    message: 'La date de naissance ne peut pas être dans le futur',
  })
  birth_date?: string;
}
