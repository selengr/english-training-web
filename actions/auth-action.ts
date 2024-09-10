'use server';

import prisma from '@/lib/prisma';
import { hash,compare } from 'bcrypt';

export const CreateUserAction = async (formdata: FormData) => {
  try {
    const { name,family, email, password } = Object.fromEntries(formdata);

    const hashedPassword = await hash(password as string, 12);
    const user = await prisma.user.create({
      data: {
        name: name as string,
        family: family as string,
        email: email as string,
        hashedPassword,
      },
    });

    if (!user) return { success: false };

    return { success: true };
  } catch (error) {
    console.log('CreateUsreAction', error);
  }
};

export const CheckUserEmail = async (formdata: FormData) => {
  try {
    const { email, password } = Object.fromEntries(formdata);

    const user = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    });
    if (!user) return { success: false, error : "invalid username" };

      const match = await compare(password as string, user?.hashedPassword as string);

      if(!match) {
        return { success: false, error : "invalid password" };
      }
      if(match) {
        return { success: true };
      }

  } catch (error) {
    console.log('CheckUserEmail', error);
  }
};




// export const initiatePasswordReset = async (formData: FormData) => {
//   const email = formData.get('email') as string

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email },
//     })

//     if (!user) {
//       return { success: false, error: "No account found with this email address." }
//     }

//     const resetToken = await generatePasswordResetToken(user.id)
    
//     await sendPasswordResetEmail(user.email, resetToken)

//     return { success: true, message: "If an account exists with this email, a password reset link has been sent." }
//   } catch (error) {
//     console.error('initiatePasswordReset error:', error)
//     return { success: false, error: "An error occurred while processing your request." }
//   }
// }