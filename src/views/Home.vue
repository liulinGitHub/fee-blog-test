<template>
  <el-container>
    <el-header>
      <el-menu class ="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
        <el-menu-item index="3"><a href="" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <header class="page_bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">

          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

          <template>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </header>

      <transition name="faded" mode="out-in">
        <!-- <keep-alive> -->
        <router-view/>
        <!-- </keep-alive> -->
      </transition>
    </el-main>

    <el-footer>
      <el-menu class ="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
        <el-menu-item index="3"><a href="" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
