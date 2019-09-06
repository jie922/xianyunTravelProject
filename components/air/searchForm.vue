<template>
  <div class="search-from">
    <!-- 头部tab切换 -->
    <el-row type="flex" class="search-tab">
      <span
        v-for="(item , index) in tabs"
        :key="index"
        @click="handleSearchTab(index)"
        :class="{active: index===currentTab}"
      >
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </el-row>

    <!-- 表单部分 -->
    <el-form ref="form" class="search-form-content" label-width="80px">
      <el-form-item label="出发城市">
        <el-autocomplete
          v-model="form.departCity"
          :fetch-suggestions="querySearchDepartCity"
          placeholder="请搜索出发城市"
          @select="handleSelectDepartCity"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>

      <el-form-item label="到达城市">
        <el-autocomplete
          v-model="form.destCity"
          :fetch-suggestions="querySearchDestCity"
          placeholder="请搜索到达城市"
          @select="handleSelectDestCity"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>

      <el-form-item label="出发时间">
        <el-date-picker
          v-model="form.departDate"
          type="date"
          placeholder="请选择日期"
          @change="handleDate"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label>
        <el-button type="primary" icon="el-icon-search" style="width:100%;" @click="handleSubmit">搜索</el-button>
      </el-form-item>

      <div class="reverse">
        <span @click="handleReverse">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      // tab栏
      tabs: [
        { name: "单程", icon: "iconfont icondancheng" },
        { name: "返程", icon: "iconfont iconshuangxiang" }
      ],
      currentTab: 0,

      //   表单数据
      form: {
        departCity: "", // 出发城市
        departCode: "", // 出发城市代码
        destCity: "", //到达城市
        destCode: "", //到达城市代码
        departDate: ""
      }
    };
  },
  methods: {
    //   点击返程时触发
    handleSearchTab(index) {
      if (index === 1) {
        this.$alert("目前暂时没有往返业务", "提示");
      }
    },

    // 出发城市 下拉单数据
    querySearchDepartCity(value, cb) {
      // var res=[
      //     {value:1,name:'哈哈哈'},
      //     {value:2},
      //     {value:3},
      //     {value:4}
      // ];
      // cb(res);
      if (!value) {
        // 传递空数组不会出现下拉框
        cb([]);
        return;
      }

      // 根据用户的输入请求建议城市
      this.$axios({
        url: "/airs/city",
        // get参数
        params: {
          // 输入框的关键字
          name: value
        }
      }).then(res => {
        // 数组
        const { data } = res.data;

        // 给数组中每个对象添加value属性
        const newData = [];
        data.forEach(v => {
          // 添加value属性
          v.value = v.name.replace("市", "");
          // 把带有value属性的对象添加到新数组中
          newData.push(v);
        });

        // 默认选中第一个
        this.form.departCity = newData[0].value;
        this.form.departCode = newData[0].sort;

        //显示到下拉列表中
        cb(newData);
      });
    },

    // 到达城市输入框获得焦点时触发
    querySearchDestCity(value, cb) {
      if (!value) {
        // 传递空数组不会出现下拉框
        cb([]);
        return;
      }

      // 根据用户的输入请求建议城市
      this.$axios({
        url: "/airs/city",
        // get参数
        params: {
          // 输入框的关键字
          name: value
        }
      }).then(res => {
        // 数组
        const { data } = res.data;

        // 给数组中每个对象添加value属性
        const newData = [];
        data.forEach(v => {
          // 添加value属性
          v.value = v.name.replace("市", "");
          // 把带有value属性的对象添加到新数组中
          newData.push(v);
        });

        // 默认选中第一个
        this.form.destCity = newData[0].value;
        this.form.destCode = newData[0].sort;

        //显示到下拉列表中
        cb(newData);
      });
    },

    // 出发城市下拉选择时触发
    handleSelectDepartCity(itemss) {
      // 把选中的值设置给form
      this.form.departCity = itemss.value;
      this.form.departCode = itemss.sort;
    },
    // 目标城市下拉选择时触发
    handleSelectDestCity(item) {
      // 把选中的值设置给form
      this.form.destCity = item.value;
      this.form.destCode = item.sort;
    },

    // 确认选择日期时触发
    // value会返回当然选中的日期
    handleDate(value) {
      // 转换
      this.form.departDate = moment(value).format(`YYYY-MM-DD`);
    },

    // 触发和目标城市切换时触发
    handleReverse() {
      const { departCity, departCode, destCity, destCode } = this.form;

      // 交叉赋值
      this.form.departCity = destCity;
      this.form.departCode = destCode;

      this.form.destCity = departCity;
      this.form.destCode = departCode;
    },

    // 提交表单是触发
    handleSubmit() {
      const { departCity, destCity, departDate } = this.form;

      // 判断输入框不能为空
      if (!departCity) {
        this.$alert("出发城市不能为空", "提示");
        return;
      }

      if (!destCity) {
        this.$alert("到达城市不能为空", "提示");
        return;
      }

      if (!departDate) {
        this.$alert("出发日期不能为空", "提示");
        return;
      }

      // 跳转到机票列表页 /air/flights
      this.$router.push({
        path: "/air/flights",
        // url携带的参数
        query: this.form
      });
    }
  }
};
</script>

<style scoped lang="less">
.search-form {
  border: 1px #ddd solid;
  border-top: none;
  width: 360px;
  height: 350px;
  box-sizing: border-box;
}

.search-tab {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 5px;
    font-size: 18px;

    &:first-child {
      font-size: 16px;
    }
  }
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
}
</style>
