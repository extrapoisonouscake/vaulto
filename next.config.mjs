/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/auth",
        destination:'/p',
        permanent:false,
        has:[{
          type:'cookie',
          key:"access"
        }]
      },
      {source:"/p",
    destination:"/auth",
  permanent:false,
missing:[{
  type:'cookie',
  key:"access"
}]}
    ]
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test?.test?.('.svg'),
  )

  config.module.rules.push(
    {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
    },
    {
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
      use: ['@svgr/webpack'],
    },
  )

  // Modify the file loader rule to ignore *.svg, since we have it handled now.
  fileLoaderRule.exclude = /\.svg$/i

  return config
  },
};

export default nextConfig;
