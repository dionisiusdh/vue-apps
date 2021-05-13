module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue Job Finder";
      return args;
    });
  },
  // devServer: {
  //   proxy: {
  //     "/apiv1": {
  //       target: "https://jobs.github.com/",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/apiv1": "",
  //       },
  //     },
  //   },
  // },
};
