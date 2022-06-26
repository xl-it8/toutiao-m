##
1 自定义主题
  // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
hack: `true; @import "${path.resolve(__dirname, './src/styles/theme.less')}";`

2// 子路由的路径不要加/
children: [
{
  path: 'home',
  name: 'home',
  component: () => import('@/views/home')
},
{
  // 子路由的路径不要加/
  path: 'question',
  name: 'question',
  component: () => import('@/views/question')
},

3 正则表达式 /d 代表[0~9] 只要有一个匹配就是true  