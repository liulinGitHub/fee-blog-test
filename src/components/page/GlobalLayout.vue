<template>
  <el-container>
    <div data-v-34fceecc class="headerWrapper">
      <!--头部-->
      <global-header></global-header>

      <!--正文-->
      <el-main>
        <solt></solt>
      </el-main>
      <!--底部-->
      <global-footer></global-footer>
    </div>
  </el-container>
</template>

<script>
  import GlobalHeader from '@/components/page/GlobalHeader'
  import GlobalFooter from '@/components/page/GlobalFooter'

    export default {
        name: "GlobalLayout",
        components: {
          GlobalHeader,
          GlobalFooter
        },
    }
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .headerWrapper {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
  }
  .headerWrapper[data-v-34fceecc] {
    height: 80px;
  }
  .page-container{
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
  .page-component {
    box-sizing: border-box;
    height: 100%;
  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
