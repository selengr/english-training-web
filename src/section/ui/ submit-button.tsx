'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({text}:{text?:string}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className='rounded-md'
    >
        {text ?? "enter" }
    </Button>
  );
};

export default SubmitButton;