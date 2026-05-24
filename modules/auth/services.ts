//services.ts is only needed when you add:

// login logic
// JWT verification
// DB calls

import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode('your-secret-key');

export async function signToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}
