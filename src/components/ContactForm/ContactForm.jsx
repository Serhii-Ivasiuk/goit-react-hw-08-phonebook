// Libs
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
// Redux selectors
import { getContacts } from 'redux/contacts/contactsSelectors';
// Redux operations
import { addContact } from 'redux/contacts/contactsOperations';
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
  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const numberRegExp =
    /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  return Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 letters long.')
      .matches(
        nameRegExp,
        'Name may contain only letters, apostrophe, dash and spaces.'
      ),

    number: Yup.string()
      .required('Number is required')
      .matches(
        numberRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".'
      ),
  });
})();

const formSettings = {
  defaultValues: { name: '', number: '' },
  mode: 'onTouched',
  resolver: yupResolver(validationSchema),
};

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const {
    formState: { errors, isDirty, isValid },
    register,
    handleSubmit,
    reset,
  } = useForm(formSettings);

  const onSubmit = formData => {
    const isExistName = contacts.some(item => item.name === formData.name);
    const isExistNumber = contacts.find(
      item => item.number === formData.number
    );

    if (isExistName) {
      return toast.info(
        `Contact with name "${formData.name}" is already in contacts`
      );
    } else if (isExistNumber) {
      return toast.info(
        `Number "${formData.number}" is already in contacts with name "${isExistNumber.name}"`
      );
    }

    dispatch(addContact(formData));

    reset();

    document.activeElement.blur();
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
        <InputHeading>Number</InputHeading>
        <Input
          type="tel"
          name="number"
          validate={errors.number}
          {...register('number')}
        />
        {errors.number && (
          <ValidationMessage>{errors.number?.message}</ValidationMessage>
        )}
      </Label>

      <SubmitBtn type="submit" disabled={!isValid || !isDirty}>
        Add contact
      </SubmitBtn>
    </Form>
  );
};
