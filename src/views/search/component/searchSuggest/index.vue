<template>
  <div>
    <van-cell
      :title="obj ? obj : '无搜索结果'"
      icon="search"
      v-for="(obj, index) in searchList"
      :key="index"
      @click="$emit('search', obj)"
    >
      <template #title>
        <!-- v-html能识别html标签替换span里的内容 -->
        <!-- 属性绑定不能用过滤器 如 v-bind:title='xxx' 错误 -->
        <span v-html="highlight(obj)"></span>
      </template>
    </van-cell>
  </div>
</template>

<script>

import { getSearchList } from '@/api/search'
let timer = null
export default {

  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  methods: {
    highlight(str) {
      // const reg = /this.searchText/g 字面量形式不能写变量所以要改成构造函数形式
      // const reg =/1/g str123111  会把1全部替换
      const reg = new RegExp(this.searchText, 'g')
      return str.replace(reg, `<span style="color:red">${this.searchText}</span>`)
    }
  },
  data() {
    return {
      searchList: []
    }
  },
  watch: {
    searchText: {
      immediate: true,
      handler(newVal) {
        // debounce处理
        clearTimeout(timer)
        timer = setTimeout(async () => {
          try {
            const res = await getSearchList({ q: this.searchText })
            this.searchList = res.data.data.options
            // console.log(res)
          } catch (e) {
            console.log(e)
          }
        }, 900)
      }
    }
  },
  beforeDestroy() {
    clearTimeout(timer)
  }
}
</script>

<style>
</style>
