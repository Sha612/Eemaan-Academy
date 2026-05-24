// proxy.ts
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const role = req.cookies.get('role')?.value
  const pathname = req.nextUrl.pathname
  
  const isProtected = 
  pathname.startsWith('/admin') || 
  pathname.startsWith('/teacher') ||
  pathname.startsWith('/student')
  
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (pathname.startsWith('/admin') && role !=='admin'){
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (
    pathname.startsWith('/teacher') &&
    role !== 'teacher' &&
    role !== 'head_teacher'
  ) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if (pathname.startsWith('/student') && role !== 'student') {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*' , '/teacher/:path*', '/student/:path*'],
};
