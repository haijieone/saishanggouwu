
// ref: https://umijs.org/config/

export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/home', component: '../pages/home/index' },
        { path: '/list', component: '../pages/list/index' },
        { path: '/detail', component: '../pages/detail/index' },
        { path: '/cart', component: '../pages/cart/index' },
        { path: '/alcohol', component: '../pages/alcohol/index' },
        { path: '/fruits', component: '../pages/fruits/index' },
        { path: '/watermelon', component: '../pages/watermelon/index' },
        { path: '/wolfberry', component: '../pages/wolfberry/index' },
        { path: '/clothes', component: '../pages/clothes/index' },
      ]
    }
  ],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'Shoping-on-plug',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy:{
    '/ajax':{
        target: 'https://webservice.juanpi.com',
        changeOrigin: true,
        pathRewrite: { '^/ajax': '' },
    }
  }
}
