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
  courses: {
    enabled: true,
    resolve: "./src/plugins/courses",
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          ACL: env("AWS_ACL", "public-read"),
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
