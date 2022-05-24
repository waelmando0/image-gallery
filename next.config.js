/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // we want to have an allow list of domains that we're telling next.js hey you can optimize theses images
  // this is for good security in our application to prevent people from trying to use our next.js server to optimize any image
  images: {
    domains: ['pbs.twimg.com'],
  },
}
