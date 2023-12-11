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
            url: "http://localhost:3000/{locale}",
          },
        },
        {
          uid: "api::page.page",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "page",
              slug: "{slug}",
              locale: "{locale}",
            },
          },
          published: {
            url: "http://localhost:3000/{locale}/{slug}",
          },
        },
        {
          uid: "api::post.post",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
          published: {
            url: "http://localhost:3000/blog/{slug}",
          },
        },
        {
          uid: "api::article.article",
          draft: {
            url: "http://localhost:3000/blog/tech/{slug}?preview=true",
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
          published: {
            url: "http://localhost:3000/blog/tech/{slug}",
          },
        },
      ],
    },
  },
  'courses': {
    enabled: true,
    resolve: './src/plugins/courses'
  },
});
