<template>
  <div class="my">
    <div class="header header-login" v-if="user && user.token">
      <div class="avatar">
        <div class="left">
          <van-image
            round
            width="1.76rem"
            height="1.76rem"
            :src="userInfo.photo"
          />
          <span>{{userInfo.name}}</span>
        </div>
        <div class="button">编辑资料</div>
      </div>
      <div class="context">
        <div class="info">
          <span class="num">{{userInfo.art_count}}</span>
          <span class="nr">头条</span>
        </div>
        <div class="info">
          <span class="num">{{userInfo.fans_count}}</span>
          <span class="nr">粉丝</span>
        </div>
        <div class="info">
          <span class="num">{{userInfo.follow_count}}</span>
          <span class="nr">关注</span>
        </div>
        <div class="info">
          <span class="num">{{userInfo.like_count}}</span>
          <span class="nr">获赞</span>
        </div>
      </div>
    </div>
    <div class="header header-notlogin" v-else>
      <div class="inner">
        <img src="@/assets/mobile.png" alt="" />
        <p @click="$router.push('/login')">登录 / 注册</p>
      </div>
    </div>
    <div class="center">
      <div>
        <i class="toutiao toutiao-shoucang"></i>
        <p>收藏</p>
      </div>
      <div>
        <i class="toutiao toutiao-lishi"></i>
        <p>历史</p>
      </div>
    </div>
    <div class="main">
      <div class="list">
        <p>消息通知</p>
        <van-icon name="arrow" size="0.2933rem" />
      </div>
      <div class="list">
        <p>消息通知</p>
        <van-icon name="arrow" size="0.2933rem" />
      </div>
    </div>
    <div class="sign-out" v-if="user && user.token" @click="logout">
      退出登录
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/users'
import { mapState } from 'vuex'
export default {
  name: 'My',
  data() {
    return {
      userInfo: {}
    }
  },
  async created() {
    if (this.user && this.user.token) {
      try {
        const res = await getUserInfo()
        console.log(res);
        this.userInfo = res.data.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async logout() {
      try {
        await this.$dialog.confirm({ message: '确认要退出吗' })
        // 必须要前面代码执行完执行
        this.$store.commit('saveUser', {})
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  height: 100%;
  background-color: #f5f7f9;
}
.header {
  width: 375px;
  height: 201px;
  // opacity: 0.1;
  background: url("@/assets/banner.png") rgb(50, 150, 250, 0.7) no-repeat 0 0 /
    cover;
}
.header-login {
  padding-top: 58px;
  .avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 17px 0 11px;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 11px;
        font-size: 15px;
        font-weight: normal;
        color: #ffffff;
      }
    }
    .button {
      width: 58px;
      height: 17px;
      line-height: 17px;
      background-color: #ffffff;
      border-radius: 8px;
      font-size: 10px;
      text-align: center;
      font-weight: normal;
      color: #666666;
    }
  }
  .context {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      .num {
        font-size: 18px;
        font-weight: normal;
        color: #ffffff;
      }
      .nr {
        font-size: 12px;
        font-weight: normal;
        color: #ffffff;
      }
    }
  }
}
.header-notlogin {
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    img {
      width: 66px;
      height: 66px;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      color: #ffffff;
      margin: 0;
      padding: 0;
    }
  }
}
.center {
  display: flex;
  justify-content: space-around;
  background-color: #fff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6px;
    i {
      font-size: 23px;
      color: #ff9d1d;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      color: #333333;
    }
  }
}
.main {
  .list {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    margin: 8px 0;
    padding: 0 16px;
    background-color: #fff;
    p {
      font-size: 15px;
      font-weight: normal;
      color: #333333;
    }
    .van-icon {
      line-height: 50px;
    }
  }
}
.sign-out {
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  font-size: 15px;
  font-weight: normal;
  color: #d86262;
}
</style>
