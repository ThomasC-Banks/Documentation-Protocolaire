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
            // value est un objet ou type non supporté → invalide
            return false;
          }

          if (isNaN(date.getTime())) return false;

          const today = new Date();
          return date < today; // Date doit être dans le passé
        },
        defaultMessage(): string {
          return `${propertyName} ne peut pas être une date future.`;
        },
      },
    });
  };
}
