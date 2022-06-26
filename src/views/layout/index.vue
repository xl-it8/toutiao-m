<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        首页
        <i slot="icon" class="toutiao toutiao-shouye"></i>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        问答
        <i slot="icon" class="toutiao toutiao-wenda"></i>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        视频
        <i slot="icon" class="toutiao toutiao-shipin"></i>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
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
