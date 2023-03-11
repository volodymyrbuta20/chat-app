import * as Yup from 'yup';

export const messageValidation = Yup.object().shape({
  message: Yup.string().label('Message').max(400).trim()
});
