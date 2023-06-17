// Libs
import { useDispatch } from 'react-redux';
// Redux operations
import { register } from 'redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(user));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input type="text" name="name" />
        </label>
        <label>
          email
          <input type="email" name="email" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
