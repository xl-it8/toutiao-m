<template>
  <div>
    <!-- 缓存组件 -->
    <keep-alive :include="['Home']">
      <router-view></router-view>
    </keep-alive>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/layout/home">
        首页
        <i slot="icon" class="toutiao toutiao-shouye"></i>
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/layout/question">
        问答
        <i slot="icon" class="toutiao toutiao-wenda"></i>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/layout/video">
        视频
        <i slot="icon" class="toutiao toutiao-shipin"></i>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/layout/my">
        我的
        <i slot="icon" class="toutiao toutiao-wode"></i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    }
  }
}
</script>

<style lang="less" scoped>
.toutiao {
  font-size: 20px;
}
/deep/ .van-tabbar-item__text {
  font-size: 10px !important;
}
</style>
