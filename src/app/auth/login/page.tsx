
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/auth-session';
import LoginForm from '@/section/auth/login-form';

const Login = async () => {
  const session = await getServerSession();

  if (session?.user?.userId) redirect('/');

  return (
    <div className='mt-32 mx-6 h-full flex justify-center items-center'>
      <LoginForm />
    </div>
  );
};

export default Login;