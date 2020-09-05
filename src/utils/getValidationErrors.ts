import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(
  validationError: ValidationError,
): Errors {
  const { inner } = validationError;

  const validationErrors: Errors = {};

  inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
