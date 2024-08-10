'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className='rounded-md bg-black px-7 py-2 text-white hover:bg-gray-800 disabled:bg-gray-400'
    >
          enter
    </Button>
  );
};

export default SubmitButton;