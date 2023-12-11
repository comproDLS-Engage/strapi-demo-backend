module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'blob:', 'cdn.jsdelivr.net', 'strapi.io', 'market-assets.strapi.io', 'https://asgard-thor-content.comprodls.com/stage/final/', 'https://media.springernature.com/'],
          'media-src': ["'self'", 'data:', 'blob:', 'cdn.jsdelivr.net', 'strapi.io', 'market-assets.strapi.io', 'https://asgard-thor-content.comprodls.com/stage/final/', 'https://media.springernature.com/'],
          upgradeInsecureRequests: null,
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
