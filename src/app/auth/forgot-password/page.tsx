
import { redirect } from 'next/navigation';
import { authOption } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
import LoginForm from '@/section/auth/login-form';
import ForgotPasswordForm from '@/section/auth/forgot-password';

const Login = async () => {
    const session = await getServerSession(authOption);

    if (session?.user?.userId) redirect('/');

    return (
        <div className='mt-20'>
            <ForgotPasswordForm />
        </div>
    );
};

export default Login;