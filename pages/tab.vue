<template>
  <div class="tabAll">
      <div class="tab">
      <span v-for="(value,index) in ['旅游','新闻','体育']" :key="index"
      @click="showList(index)"
      :class="{stang: number===index}"
      >
      {{value}}
      </span>
      </div>
      <div v-show="number===0">
          <ul>
              <li>旅游123</li>
              <li>旅游123</li>
              <li>旅游123</li>
          </ul>
      </div>
      <div v-show="number===1">
          <ul>
              <li>新闻456</li>
              <li>新闻456</li>
              <li>新闻456</li>
          </ul>
      </div>
      <div v-show="number===2">
          <ul>
              <li>体育789</li>
              <li>体育789</li>
              <li>体育789</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            number:0
        }
    },
    methods:{
        showList(index){
            this.number=index
        }
    }
}
</script>

<style lang="less" scoped>
.tabAll{
    margin-top:100px auto;
    
}
.tab {
    span{
        background-color:#fceb04;
        margin:5px;
    }
}

.stang{
    color:red;
}
</style>