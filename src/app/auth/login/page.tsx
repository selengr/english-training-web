// import LoginForm from '@/components/auth/login-form';
// import Container from '@/components/ui/container';
import { authOption } from '@/lib/next-auth';
import LoginForm from '@/section/auth/login-form';
import Container from '@/section/ui/container';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Login = async () => {
  const session = await getServerSession(authOption);

  if (session?.user.usreId) redirect('/');

  return (
    <div className='mt-20'>
      <Container>
        <LoginForm />
        <div className='mt-8'>
          <Link href='/auth/register' className='hover:text-blue-600'>
            <p className='text-center'>برای عضویت کلیک کنید</p>
          </Link>
        </div>    
      </Container> 
    </div>
  );
};

export default Login;