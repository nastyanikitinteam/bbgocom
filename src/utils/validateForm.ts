import { setIn } from 'final-form';

export const validateForm = (schema) => async (values) => {
  if (typeof schema === 'function') {
    schema = schema();
  }
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.reduce(
      (formError, innerError) =>
        setIn(formError, innerError.path, innerError.message),
      {}
    );

    return errors;
  }
};
