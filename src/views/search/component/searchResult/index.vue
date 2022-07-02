<template>
  <div class="search">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleItem
          v-for="(obj, index) in searchResult"
          :key="index"
          :article="obj"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import { getSearchResult } from '@/api/search'
export default {
  components: { ArticleItem },
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      page: 1,
      per_page: 10,
      searchResult: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  async mounted() {
    try {
      const res = await getSearchResult({ q: this.searchText, page: this.page, per_page: this.per_page })
      // console.log(res)
      this.searchResult = res.data.data.results
      this.loading = false
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async onLoad() {
      this.page++
      const res = await getSearchResult({ q: this.searchText, page: this.page, per_page: this.per_page })
      const results = res.data.data.results
      this.searchResult = [...this.searchResult, ...results]
      this.loading = false
      this.refreshing = false
      if (results.length === 0) {
        this.finished = true
      }
    },
    onRefresh() {
      // 清空列表数据
      this.searchResult = []

      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
