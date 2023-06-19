// Libs
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Redux operations
import { registerUser } from 'redux/auth/authOperations';

const validationSchema = (() => {
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return Yup.object()
    .shape({
      name: Yup.string().required('Name is required.'),
      email: Yup.string()
        .required('Email is required.')
        .matches(emailRegExp, 'Email must be a valid email.'),
      password: Yup.string()
        .required('Password is required.')
        .min(
          8,
          'Password must be at least 8 characters long and including min 4 letters and min 4 numbers.'
        ),
    })
    .required();
})();

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = formData => {
    dispatch(registerUser(formData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Name</span>
        <input type="text" name="name" {...register('name')} />
        {errors.name && <span>{errors.name?.message}</span>}
      </label>

      <label>
        <span>Email</span>
        <input type="email" name="email" {...register('email')} />
        {errors.email && <span>{errors.email?.message}</span>}
      </label>

      <label>
        <span>Password</span>
        <input type="password" name="password" {...register('password')} />
        {errors.password && <span>{errors.password?.message}</span>}
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
