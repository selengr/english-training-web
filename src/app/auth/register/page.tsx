
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/auth-session';
import RegisterForm from '@/section/auth/register-form';

const Register = async () => {
  const session = await getServerSession();

  if (session?.user?.userId) redirect('/');

  return (
    <div className='mt-32 mx-6 h-full flex justify-center items-center'>
      <RegisterForm />
    </div>
  );
};

export default Register;