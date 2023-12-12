module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::home.home",
          published: {
            url: `${env.FRONTEND_URL}{locale}`,
          },
        },
        {
          uid: "api::page.page",
          draft: {
            url: `${env.FRONTEND_URL}/api/preview`,
            query: {
              type: "page",
              slug: "{slug}",
              locale: "{locale}",
            },
          },
          published: {
            url: `${env.FRONTEND_URL}/{locale}/{slug}`,
          },
        },
        {
          uid: "api::post.post",
          draft: {
            url: `${env.FRONTEND_URL}/api/preview`,
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
          published: {
            url: `${env.FRONTEND_URL}/blog/{slug}`,
          },
        },
        {
          uid: "api::article.article",
          draft: {
            url: `${env.FRONTEND_URL}/blog/tech/{slug}?preview=true`,
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
          published: {
            url: `${env.FRONTEND_URL}/blog/tech/{slug}`,
          },
        },
      ],
    },
  },
});
