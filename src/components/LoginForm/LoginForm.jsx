// Libs
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
// Redux operations
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = formData => {
    dispatch(logIn(formData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email</span>
        <input type="email" name="email" {...register('email')} />
      </label>

      <label>
        <span>Password</span>
        <input type="password" name="password" {...register('password')} />
      </label>

      <button type="submit">Log in</button>
    </form>
  );
};
