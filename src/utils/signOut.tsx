
import { signOut } from 'next-auth/react'

export const handleSignOut = async () => {
  await signOut({ redirect: false })
  window.location.href = 'https://learninglabs.ir/'
}

