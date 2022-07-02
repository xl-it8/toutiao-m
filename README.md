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

<<<<<<< HEAD
3 正则表达式 /d 代表[0~9] 只要有一个匹配就是true  

4 flex布局中使用flex：1 和我们自己设置宽度 flex优先级高 解决方法 改为min-width：xxpx
=======
3 正则表达式 /d 代表[0~9] 只要有一个匹配就是true  
>>>>>>> ab3c3c799e5895f326ff0451f8c4d318b24693fa
