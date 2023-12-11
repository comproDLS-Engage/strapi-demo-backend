'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('courses')
      .service('myService')
      .getWelcomeMessage();
  },
});
