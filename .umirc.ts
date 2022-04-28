import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: '',
    locale: false,
    layout: 'side',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  history: { type: 'hash' },
  // headScripts: [
  //   {
  //     src: 'https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js',
  //     type: 'text/javascript',
  //   },
  // ],
  routes: [
    {
      name: '基础数据',
      icon: 'team',
      routes: [
        {
          path: '/basicData/faceArchives',
          component: '@/pages/basicData/faceArchives/index',
          name: '人脸聚档',
        },
      ],
    },
    {
      path: '/404',
      component: '@/pages/404',
    },
  ],
  fastRefresh: {},
  dynamicImport: {
    loading: '@/components/Loading',
  },
  proxy: {
    '/ocean': {
      target: 'http://cloud.vipgz4.91tunnel.com',
      changeOrigin: true,
      pathRewrite: {
        '/ocean': '',
      },
    },
  },
});
