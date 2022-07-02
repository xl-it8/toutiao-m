<template>
  <div>
    <van-nav-bar fixed >
      <template v-slot:title>
        <van-button type="info" icon="search" class="searchBtn" to="/search"
          >搜索
        </van-button>
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" animated>
      <van-tab :title="obj.name" v-for="obj in channels" :key="obj.id">
        <AticleList :id="obj.id"></AticleList>
      </van-tab>
      <template #nav-right>
        <div class="more" @click="isShowChannel = true">
          <em class="toutiao toutiao-gengduo"></em>
        </div>
        <div class="more1"></div>
      </template>
    </van-tabs>

    <van-popup
      closeable
      close-icon-position="top-left"
      v-model="isShowChannel"
      position="bottom"
      :style="{ height: '100%', paddingTop: '1rem' }"
    >
      <ChannelPanel
        :channels="channels"
        :active="active"
        @change-active="
          active = $event;
          isShowChannel = false;
        "
        @del-event="active = $event"
      ></ChannelPanel>
    </van-popup>
  </div>
</template>

<script>
import ChannelPanel from './components'
import AticleList from '@/components/AticleList.vue'
import { getMyChannels } from '@/api/home'
import { getItem } from '@/utils/storage'
// 定义常量 方便维护
const CHANNELS = 'channels'
export default {
  name: 'Home',
  components: { AticleList, ChannelPanel },
  data() {
    return {
      active: 0,
      channels: [],
      isShowChannel: false
    }
  },
  async mounted() {
    // 考虑持久化
    // 得到本地存储的数据
    // 如果未登录 并且 本地存储有数据 那就去本地存储中拿值
    // 如果没有登录 或 第一次登录本地存储中没有数据就去发起ajax拿
    const channels = getItem(CHANNELS)
    if (!(this.$store.state.user?.token) && channels) {
      this.channels = channels
    } else {
      try {
        const res = await getMyChannels()
        this.channels = res.data.data.channels
      } catch (e) {
        console.log(e)
      }
    }
  }

}
</script>

<style lang="less" scoped>
/deep/ .searchBtn {
  width: 278px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  // opacity: 0.2;
}
/deep/ .van-nav-bar__title {
  max-width: unset;
}
/deep/ .van-tabs__wrap--scrollable .van-tab {
  padding: 0 35px;
  border-right: 1px solid #ccc;
}
.more {
  position: fixed;
  right: 0;
  min-width: 50px;
  height: 41px;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  line-height: 41px;
}
.more1 {
  min-width: 50px;
  height: 41px;
  background-color: rgba(255, 255, 255, 0.9);
}
/deep/ .van-tabs__wrap {
  width: 375px;
  position: fixed;
  top: 46px;
  z-index: 1;
  border-bottom: 1px solid #ccc;
}
/deep/ .van-pull-refresh {
  height: calc(100vh - 137px);
  overflow: auto;
}
</style>
