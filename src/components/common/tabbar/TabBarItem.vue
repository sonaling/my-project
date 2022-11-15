<template>
  <div class="tab-bar-item"
       @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <!-- 也可以直接写 不用写在计算属性里-->
      <!-- <div :style="isActive ?{color:this.activeColor} : {}"> -->
      <slot name="item-text"></slot>
    </div>

  </div>

</template>

<script>
export default {
  name: 'TabBarItem',
  //path就没有写死，别人可以动态告诉你path 父传子
  props: {
    path: String,
    activeColor: {
      type:String,
      //默认值
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // /home ->item (/home) = true 
      // /home ->item (/cart) = false
      //indexOf ==-1就是没找到相同的路径！==-1就是找到了e
      //动态获取的path 和上面props是一样的就可以了
      //$route 哪一个路由处于活跃就是哪个对象
      return this.$route.path.indexOf(this.path) !== -1
      // return this.$route.path.indexOf(this.path) == 0
    },
    // v-bind动态绑定一个style 并把其传入计算属性里
    activeStyle() {
      return this.isActive ?{color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {

      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  /* 去除图片下面多出来的三像素 */
  vertical-align: middle;
}
.active {
  color: red;
}
</style>

