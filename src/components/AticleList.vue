<template>
  <van-cell-group>
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      ref="pullRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell
          :title="obj.title"
          value="内容"
          label="描述信息"
          v-for="(obj, index) in articleList"
          :key="index"
        /> -->
        <ArticleItem
          v-for="(obj, index) in articleList"
          :key="index"
          :article="obj"
        /> </van-list
    ></van-pull-refresh>
  </van-cell-group>
</template>

<script>
import { getArticles } from '@/api/home'
import ArticleItem from './ArticleItem.vue'
// 记住阅读位置的写法 全局变量 下面的都可以使用
let ele = null
let scrollTop = 0
export default {
  name: ' AticleList',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: { ArticleItem },
  data() {
    return {
      timestamp: Date.now(),
      articleList: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  async mounted() {
    ele = this.$refs.pullRefresh.$el
    ele.onscroll = function (e) {
      scrollTop = this.scrollTop
    }
    try {
      // this.finished = false
      const res = await getArticles({ channel_id: this.id, timestamp: this.timestamp })
      this.articleList = res.data.data.results
      this.timestamp = res.data.data.pre_timestamp
      // this.loading = false
      // console.log(res)
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async onLoad() {
      if (this.refreshing) {
        this.articleList = []
        this.refreshing = false
      }
      // 发起异步请求
      const res = await getArticles({ channel_id: this.id, timestamp: this.timestamp })
      // console.log(res)
      this.articleList = [...this.articleList, ...res.data.data.results]
      // console.log(this.articleList)
      this.loading = false
      if (!res.data.data.pre_timestamp) {
        this.finished = true
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.timestamp = Date.now()
      this.onLoad()
    }
  },
  activated() {
    ele.scrollTop = scrollTop
  }
}
</script>

<style scoped>
.van-cell-group {
  padding: 90px 0 50px 0;
}
</style>
