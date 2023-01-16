import { addWhen } from '@infrastructure/utils/array_utils';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    ...addWhen(
      process.env.GOOGLE_ID !== undefined &&
        process.env.GOOGLE_SECRET !== undefined,
      GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      })
    ),
  ],
});
