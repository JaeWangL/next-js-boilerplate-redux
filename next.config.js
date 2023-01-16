const path = require('path');
const withInterceptStdout = require('next-intercept-stdout');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withInterceptStdout(
  withBundleAnalyzer({
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@styles': path.resolve(__dirname, 'src/application/styles'),
      };
      return config;
    },
  }),
  (text) => (text.includes('Duplicate atom key') ? '' : text)
);
