import * as Yup from 'yup';

export const userValidation = Yup.object().shape({
  userName: Yup.string().label('Name').min(2).max(30).trim().required(),
  country: Yup.object().shape({}).label('Country').required()
});
