<template>
  <div class="shouye">
    <!-- 页面轮播图 -->
    <el-carousel height="700px">
      <el-carousel-item v-for="(item, index) in imager " :key="index">
        <div :style="`background:url(${$axios.defaults.baseURL+item.url}) center center no-repeat`" class="image"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imager: []
    };
  },
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      console.log(res);
      this.imager = res.data.data;
    });
    console.dir(this.$axios);
  }
};
</script>

<style lang="less" scoped>
.shouye {
  .image {
    height:100%;
    // 自适应宽高
    background-size:contain contain;
  }
}
</style>