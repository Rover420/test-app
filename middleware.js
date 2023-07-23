import { NextResponse, NextRequest } from 'next/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
import { i18n } from './i18n-config'
 
// Get the preferred locale, similar to above or using a library
function getLocale(request) {

  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const cookie = request.cookies.get('lang');

  let languages = new Negotiator({ headers: negotiatorHeaders })?.languages()

  const locales = i18n.locales;

  if(match(cookie?.value, locales, i18n.defaultLocale) === cookie?.value) {
    return cookie?.value
  }
  
  return match(languages, locales, i18n.defaultLocale);
}
 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
 
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|static|robots|sitemap|.*\\..*|_next).*)',
  ],
}