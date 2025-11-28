import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsPastDate(validationOptions?: ValidationOptions) {
  return function (target: object, propertyName: string) {
    registerDecorator({
      name: 'isPastDate',
      target: target.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown): boolean {
          if (!value) return true; // Champ optionnel

          let date: Date;

          if (value instanceof Date) {
            date = value;
          } else if (typeof value === 'string' || typeof value === 'number') {
            date = new Date(value);
          } else {
            return false; // type non valide
          }

          if (isNaN(date.getTime())) return false;

          const today = new Date();
          return date < today;
        },
        defaultMessage(): string {
          return `La date de naissance ne peut pas être dans le futur`;
        },
      },
    });
  };
}
