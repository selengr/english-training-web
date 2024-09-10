

import { createTransport } from 'nodemailer'

const transporter = createTransport({
  // Configure your email service here
  // Example for Gmail:
  // host: 'smtp.gmail.com',
  // port: 587,
  // auth: {
  //   user: process.env.EMAIL_USER,
  //   pass: process.env.EMAIL_PASS,
  // },
})

export async function sendPasswordResetEmail(email: string, token: string): Promise<void> {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Reset Your Password',
    html: `
      <p>You requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>If you didn't request this, please ignore this email.</p>
      <p>This link will expire in 1 hour.</p>
    `,
  }

  await transporter.sendMail(mailOptions)
}





// model PasswordResetToken {
//     id        String   @id @default(cuid())
//     token     String   @unique
//     expires   DateTime
//     user      User     @relation(fields: [userId], references: [id])
//     userId    String
//     createdAt DateTime @default(now())
//   }
  
//   model User {
//     // ... other fields
//     passwordResetTokens PasswordResetToken[]
//   }