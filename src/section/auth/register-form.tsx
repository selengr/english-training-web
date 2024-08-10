'use client';

// import { CreateUserAction } from '@/actions/auth-action';
// import SubmitButton from '../ui/submit-button';
import { signIn } from 'next-auth/react';
import { CreateUserAction } from '../../../actions/auth-action';
import SubmitButton from '../ui/ submit-button';

const RegisterForm = () => {
  return (
    <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');
        const res = await CreateUserAction(formdata);

        if (res?.success) {
          await signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>register</h2>
      <input
        type='text'
        placeholder='name'
        className='rounded-md border p-2 shadow-sm'
        name='name'
      />
      <input
        type='email'
        placeholder='email'
        className='rounded-md border p-2 shadow-sm'
        name='email'
      />
      <input
        type='password'
        placeholder='password'
        className='rounded-md border p-2 shadow-sm'
        name='password'
      />
      <SubmitButton />
    </form>
  );
};

export default RegisterForm;