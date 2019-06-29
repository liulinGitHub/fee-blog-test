<template>
  <div class="errPage-container">
    <el-button @click="back" class="pan-back-btn" icon="arrow-left">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满请联系你领导</h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/">回首页</router-link>
          </li>
          <li><a @click="logout" href="#">登出</a></li>
          <li><a @click.prevent="dialogVisible=true" href="#">点我看图</a></li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" alt="Girl has dropped her ice cream." height="428" width="313">
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img">
    </el-dialog>
  </div>
</template>

<script>

  import Vue from 'vue';
  import {Button, Row, Col, Dialog} from 'element-ui';

  import errGif from '@/assets/images/403.gif';

  Vue.use(Button);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Dialog);

  export default {
    name: 'path403',
    data() {
      return {
        errGif: errGif + '?' + +new Date(),
        ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
        dialogVisible: false
      };
    },
    methods: {
      back() {
        if (this.$route.query.noGoBack) {
          this.$router.push({path: '/'});
        } else {
          this.$router.go(-1);
        }
      },
      logout() {
        this.$message({
          type: 'success', message: '退出成功！', showClose: true,
          onClose: () => {
            this.$router.push({path: '/login'});
          }
        });
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .errPage-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;

    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none !important;
    }

    .pan-gif {
      margin: 0 auto;
      display: block;
    }

    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }

    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }

    .list-unstyled {
      font-size: 14px;

      li {
        padding-bottom: 5px;
      }

      a {
        color: #008489;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
