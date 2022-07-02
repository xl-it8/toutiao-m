<template>
  <div>
    <div class="main">
      <div class="title">
        <p>我的频道</p>
        <van-button
          plain
          type="primary"
          round
          size="small"
          @click="isShow = !isShow"
          >{{ !isShow ? "编辑" : "完成" }}</van-button
        >
      </div>
      <van-row>
        <van-col span="6" v-for="(obj, index) in channels" :key="obj.id"
          ><div
            class="inner"
            @click="edit(index, obj.id)"
            :style="{ color: active === index ? 'red' : '' }"
          >
            {{ obj.name }}
            <van-icon name="close" v-show="isShow && index !== 0" />
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="main">
      <div class="title">
        <p>推荐频道</p>
      </div>
      <van-row>
        <van-col span="6" v-for="(obj, index) in recommendChannels" :key="index"
          ><div class="inner van-ellipsis" @click="addChannels(obj.id)">
            +{{ obj.name }}
          </div></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
import { getAllArticles, saveData } from '@/api/home'
import { setItem } from '@/utils/storage'
// 定义常量 方便维护
const CHANNELS = 'channels'
export default {
  data() {
    return {
      recommendChannels: [],
      isShow: false
    }
  },
  props: {
    channels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.getAllArticles()
  },
  methods: {
    async getAllArticles() {
      try {
        const res = await getAllArticles()
        //总的数据过滤筛选不重复的数据
        this.recommendChannels = res.data.data.channels.filter((item) => this.channels.every(item1 => item1.id !== item.id))
      } catch (e) {
        console.log(e)
      }
    },
    addChannels(id) {
      const index = this.recommendChannels.findIndex(item => item.id === id)
      this.channels.push(this.recommendChannels[index])
      this.recommendChannels.splice(index, 1)
    },
    // async deleteChannels(id) {

    // },
    edit(index, id) {
      if (this.isShow) {
        const obj = this.channels[index]
        // 阻止删除推荐的频道
        if (index === 0) return
        this.channels.splice(index, 1)
        this.recommendChannels.push(obj)
        if (index < this.active) {
          this.$emit('del-event', this.active - 1)
        }
        return
      }
      this.$emit('change-active', index)
    }
  },
  watch: {
    channels: {
      deep: true,
      async handler(newVal) {
        // 编辑操作数据时
        // 如果登录获取token值后 就发起ajax请求利用put(data)修改数据
        // 如果未登录就把数据（ajax获取的数据）修改 后保存到本地存储
        if (this.$store.state.user?.token) {
          // const arr = []
          // newVal.forEach((item, index) => {
          //   arr.push({ id: item.id, seq: index })
          // })
          const arr = newVal.map((item, index) => {
            return { id: item.id, seq: index }
          })
          try {
            await saveData(arr)
          } catch (e) {
            console.log(e)
          }
        } else {
          setItem(CHANNELS, newVal)
        }
      }
    }
  }
}
</script>

<style lang="less">
.main {
  padding: 40px 11px 0 11px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 16px;
      font-weight: normal;
      color: #333333;
    }
    .van-button {
      width: 50px;
      height: 30px;
    }
  }
  // /deep/ .content {
  //   .van-col {
  //     width: 80px;
  //     height: 43px;
  //     background-color: #ccc;
  //   }
  // }

  .inner {
    position: relative;
    width: 80px;
    height: 43px;
    line-height: 43px;
    background-color: #f4f5f6;
    border-radius: 3px;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    color: #222222;
    margin: 10px 0;
    .van-icon {
      position: absolute;
      top: -5px;
      right: -5px;
    }
  }
}
</style>
