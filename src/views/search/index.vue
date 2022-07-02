<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="$router.go(-1)"
        background="red"
        autofocus
        @focus="isSearch = false"
      />
    </form>
    <SearchHistory v-if="searchText === ''" @search="onSearch"></SearchHistory>
    <template v-else>
      <SearchResult v-if="isSearch" :searchText="searchText"></SearchResult>
      <SearchSuggest
        v-else
        :searchText="searchText"
        @search="onSearch"
      ></SearchSuggest>
    </template>
  </div>
</template>

<script>
import SearchHistory from './component/searchHistory'
import SearchResult from './component/searchResult'
import SearchSuggest from './component/searchSuggest'

export default {
  components: { SearchHistory, SearchResult, SearchSuggest },
  data() {
    return {
      searchText: '',
      isSearch: false
    }
  },
  methods: {
    onSearch(str) {
      // 存在冒泡
      this.isSearch = true
      this.searchText = str
      this.$store.commit('setSearchHistoryList', str)
    }
  }
}
</script>

<style lang="less" scoped>

.search {
  height: calc(100vh - 53px);
  overflow: auto;
}
</style>
