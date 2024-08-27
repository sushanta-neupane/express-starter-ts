import { Schema } from 'joi';

export const validate = <T>(data: T, schema: Schema) => {
  const { value, error } = schema.validate(data);
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(value);
  }
};
