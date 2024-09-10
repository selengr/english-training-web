// import { randomBytes } from 'crypto'
// import prisma from './prisma'


// export async function generatePasswordResetToken(userId: number): Promise<string> {
//   const access_token = randomBytes(32).toString('hex')
// //   const expires_at  = new Date(Date.now() + 3600000) // access_token expires_at in 1 hour
//   const expires_at = new Date(Date.now() + 3600000);
//   const expires_at_number = expires_at.getTime();

  
//   await prisma.account.create({
//     data: {
//       access_token,
//       expires_at : expires_at_number,
//       userId,
      
//     },  
//   })

//   return access_token
// }