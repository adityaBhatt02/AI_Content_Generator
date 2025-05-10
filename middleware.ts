import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const authData = await auth()
  const { userId } = authData
  const url = new URL(req.url)

  // Redirect unauthenticated users to Clerk's sign-in page
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  // Redirect authenticated users from homepage to dashboard
  if (url.pathname === '/' && userId) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:css|js|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|ico|json)).*)',
    '/(api|trpc)(.*)',
  ],
}