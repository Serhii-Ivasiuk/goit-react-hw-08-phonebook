// Libs
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
// Redux selectors
import { getIsLoading } from 'redux/contacts/contactsSelectors';
// Redux operations
import { editContact } from 'redux/contacts/contactsOperations';
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
import { Heading } from './EditContactForm.styled';

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

export const EditContactForm = ({
  id,
  contactName,
  contactNumber,
  handleModalClose,
}) => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const {
    formState: { errors, isDirty, isValid },
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { name: contactName, number: contactNumber },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = formData => {
    dispatch(editContact({ id, changes: formData }))
      .unwrap()
      .then(() => {
        toast.success('Your changes have been successfully saved.');
        handleModalClose();
        reset();
      })
      .catch(() =>
        toast.error('Oops... Something went wrong :( Please try again later.')
      );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading>Edit contact</Heading>
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

      <SubmitBtn type="submit" disabled={!isValid || !isDirty || isLoading}>
        {isDirty && isLoading ? <CenteredLoader /> : 'Save changes'}
      </SubmitBtn>
    </Form>
  );
};
