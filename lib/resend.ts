import { Resend } from "resend";
console.log('process.env.RESEND_API_KEY ----------------:>> ', process.env.RESEND_API_KEY);
export const resend = new Resend(process.env.RESEND_API_KEY);