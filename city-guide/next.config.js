const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["md", "ts", "tsx"],
  basePath: isProd ? "/city-guide" : "",
  trailingSlash: true,
}
