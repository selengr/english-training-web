'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ text, ...other }: { text?: string, other?: any }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className='rounded-md'
      {...other}
    >
      {pending ? 'Submitting...' : text ?? "enter"}
    </Button>
  );
};

export default SubmitButton;