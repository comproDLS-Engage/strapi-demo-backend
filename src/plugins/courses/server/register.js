'use strict';

module.exports = ({ strapi }) => {
  // register phase
  strapi.customFields.register({
    name: 'Courses',
    plugin: 'courses',
    type: 'json',
  });
};
