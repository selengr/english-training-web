import { cookies, headers } from 'next/headers';
import {
  getServerSession as getNextAuthServerSession,
  type Session,
} from 'next-auth';
import { authOption } from '@/lib/next-auth';

/**
 * NextAuth v4's RSC path still triggers Next.js 15 sync cookies/headers warnings.
 * Passing an already-awaited req/res avoids that code path.
 */
export async function getServerSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieMap = Object.fromEntries(
    cookieStore.getAll().map((cookie) => [cookie.name, cookie.value]),
  );

  const headerMap: Record<string, string> = {};
  headerStore.forEach((value, key) => {
    headerMap[key] = value;
  });

  const req = {
    headers: headerMap,
    cookies: cookieMap,
  };

  const res = {
    getHeader() {},
    setCookie() {},
    setHeader() {},
  };

  return getNextAuthServerSession(req as never, res as never, authOption);
}
