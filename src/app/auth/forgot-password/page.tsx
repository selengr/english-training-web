import { redirect } from 'next/navigation';
import { PATH_AUTH } from '@/routes/paths';

export default function ForgotPasswordPage() {
  redirect(PATH_AUTH.login);
}