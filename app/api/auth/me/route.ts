/*
This endpoint:

returns current user
used by frontend (hooks/use-auth.ts later)

*/

import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@/modules/auth/getUser';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  const user = await getUserFromToken(token);

  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  return NextResponse.json(user);
}
