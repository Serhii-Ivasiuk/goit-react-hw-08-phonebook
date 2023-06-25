// Libs
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Redux selectors
import { selectIsLoading } from 'redux/auth/authSelectors';
// Redux operations
import { registerUser } from 'redux/auth/authOperations';
// React components
import { CenteredLoader } from 'components/Loaders/Loaders';
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
  const passwordRegExp = /^(?=(?:.*[a-zA-Z]){4})(?=(?:.*\d){4})[a-zA-Z\d]+$/;

  return Yup.object().shape({
    name: Yup.string()
      .required('Name is required.')
      .min(3, 'Name must be at least 3 letters long.'),
    email: Yup.string()
      .required('Email is required.')
      .matches(emailRegExp, 'Email must be a valid email.'),
    password: Yup.string()
      .required('Password is required.')
      .matches(
        passwordRegExp,
        'Password must be at least 8 characters long and including min 4 letters and min 4 numbers.'
      ),
  });
})();

const formSettings = {
  defaultValues: { name: '', number: '', password: '' },
  mode: 'onTouched',
  resolver: yupResolver(validationSchema),
};

export const RegistrationForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const {
    formState: { errors, isDirty, isValid },
    register,
    handleSubmit,
    reset,
  } = useForm(formSettings);

  const onSubmit = formData => {
    dispatch(registerUser(formData))
      .unwrap()
      .then(response => {
        toast.success(
          `User "${response.user.name}" is successfully registered.`
        );
        reset();
      })
      .catch(() => toast.error('Registration error, please try again.'));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <InputHeading>Name</InputHeading>
        <Input
          type="text"
          name="name"
          validate={errors.name}
          {...register('name')}
        />

        {errors.name && (
          <ValidationMessage>{errors.name?.message}</ValidationMessage>
        )}
      </Label>

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

      <SubmitBtn type="submit" disabled={!isValid || !isDirty || isLoading}>
        {isLoading ? <CenteredLoader /> : 'Register'}
      </SubmitBtn>
    </Form>
  );
};
