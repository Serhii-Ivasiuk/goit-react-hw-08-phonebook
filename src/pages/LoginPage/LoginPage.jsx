import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(user));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input type="email" name="email" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
