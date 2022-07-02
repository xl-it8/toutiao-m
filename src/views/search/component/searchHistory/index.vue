<template>
  <van-cell-group>
    <van-cell title="历史记录">
      <template v-if="isDelete">
        <span @click="allDelete">全部删除</span>
        &nbsp;&nbsp;
        <span @click="isDelete = false">完成</span>
      </template>
      <van-icon name="delete" @click="isDelete = true" v-else />
    </van-cell>
    <van-cell
      :title="item"
      v-for="(item, index) in searchHistoryList"
      :key="index"
      @click.stop="$emit('search',item)"
    >
      <van-icon name="close" v-if="isDelete" @click="del(index)"></van-icon>
    </van-cell>
  </van-cell-group>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      isDelete: false
    }
  },
  computed: {
    ...mapState(['searchHistoryList'])
  },
  methods: {
    ...mapMutations({ del: 'setDelete' }),
    ...mapMutations({ allDelete: 'setAllDelete' })
  }
}
</script>

<style>
</style>
