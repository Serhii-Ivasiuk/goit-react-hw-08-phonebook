// Libs
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Redux operations
import { logIn } from 'redux/auth/authOperations';
// Styled components
import {
  Form,
  Label,
  InputHeading,
  Input,
  SubmitBtn,
  ValidationMessage,
} from 'components/Common/FormsComponents.styled';

const validationSchema = (() => {
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return Yup.object().shape({
    email: Yup.string()
      .required('Email is required.')
      .matches(emailRegExp, 'Email must be a valid email.'),
    password: Yup.string().required('Password is required.'),
  });
})();

const formSettings = {
  defaultValues: { email: '', password: '' },
  mode: 'onTouched',
  resolver: yupResolver(validationSchema),
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    formState: { errors, isDirty, isValid },
    register,
    handleSubmit,
    reset,
  } = useForm(formSettings);

  const onSubmit = formData => {
    dispatch(logIn(formData));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <InputHeading>Email</InputHeading>
        <Input
          type="email"
          name="email"
          validate={errors.email}
          {...register('email')}
        />
        {errors.email && (
          <ValidationMessage>{errors.email?.message}</ValidationMessage>
        )}
      </Label>

      <Label>
        <InputHeading>Password</InputHeading>
        <Input
          type="password"
          name="password"
          validate={errors.password}
          {...register('password')}
        />
        {errors.password && (
          <ValidationMessage>{errors.password?.message}</ValidationMessage>
        )}
      </Label>

      <SubmitBtn type="submit" disabled={!isValid || !isDirty}>
        Log in
      </SubmitBtn>
    </Form>
  );
};
