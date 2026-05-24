//this is replace by app/public.login/actions.ts

import { Role } from '@/modules/auth/roles';
import { signToken } from '@/modules/auth/services';
import { NextRequest, NextResponse } from 'next/server';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // 🔴 TEMP: Replace with DB later
  if (email !== 'shajeeah@gmail.com' || password !== 'admin1') {
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 },
    );
  }

  const token = await signToken({
    id: '1',
    email,
    role: Role.ADMIN,
  });

  const res = NextResponse.json({ success: true });

  res.cookies.set('token', token, {
    httpOnly: true,
    secure: false, // true in production
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
