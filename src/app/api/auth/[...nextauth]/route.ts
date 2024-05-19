import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.AUTH_CLIENT_ID ?? '',
      clientSecret: process.env.AUTH_CLIENT_SECRET ?? '',
    }),
  ],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
