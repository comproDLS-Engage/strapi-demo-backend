# Strapi plugin courses

A quick description of courses.

## Plugin folder structure

├── README.md                 // You know...
├── admin                     // Front-end of your plugin.
│   └── src
│       ├── components        // Contains your front-end components.
│       │   ├── Initializer
│       │   │   └── index.js  // Plugin initializer.
│       │   └── PluginIcon
│       │       └── index.js  // Contains the icon of your plugin in the main navigation.
│       ├── index.js          // Main configurations of your plugin.
│       ├── pages             // Contains the pages of your plugin.
│       │   ├── App
│       │   │   └── index.js  // Skeleton around the actual pages.
│       │   └── HomePage
│       │       └── index.js  // Homepage of your plugin.
│       ├── pluginId.js       // pluginId variable computed from package.json name.
│       ├── translations      // Translations files to make your plugin i18n friendly
│       │   ├── en.json
│       │   └── fr.json
│       └── utils
│           ├── getTrad.js        // getTrad function to return the corresponding plugin translations
|           └── axiosInstance.js  // axios with a custom config
├── package.json
├── server                    // Back-end of your plugin
│   ├── bootstrap.js          // Function that is called right after the plugin has registered.
│   ├── config
│   │   └── index.js          // Contains the default server configuration.
│   ├── controllers
│   │   ├── index.js          // File that loads all your controllers
│   │   └── my-controller.js  // Default controller, you can rename/delete it
│   ├── destroy.js            // Function that is called to clean up the plugin after Strapi instance is destroyed
│   ├── index.js
│   ├── register.js           // Function that is called to load the plugin, before bootstrap.
│   ├── routes
│   │   └── index.js          // Plugin routes, you can update/delete it
│   └── services
│       ├── index.js          // File that loads all your services
│       └── my-service.js     // Default services, you can rename/delete it
├── strapi-admin.js           // Entrypoint for the admin (front-end)
└── strapi-server.js          // Entrypoint for the server (back-end)