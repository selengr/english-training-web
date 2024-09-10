
import { redirect } from 'next/navigation';
import { authOption } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
import LoginForm from '@/section/auth/login-form';

const Login = async () => {
  const session = await getServerSession(authOption);

  if (session?.user?.userId) redirect('/');

  return (
    <div className='mt-32 mx-6 h-full flex justify-center items-center'>
      <LoginForm />
    </div>
  );
};

export default Login;