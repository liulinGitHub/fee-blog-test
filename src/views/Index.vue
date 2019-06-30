<template>
    <global-layout>
      <div class="page-container page-component" slot="right">
        <el-row :gutter="10">
          <el-col :xs="7" :sm="9" :md="11" :lg="13" :xl="15">
            <div class="grid-content bg-purple">
            </div>
            <solt name="right"></solt>
          </el-col>
          <el-col :xs="5" :sm="5" :md="5" :lg="7" :xl="9" >
            <div class="grid-content bg-purple-light" >
              11111111111111111111111
            </div>
          </el-col>
        </el-row>
      </div>
    </global-layout>
</template>

<script>

  import GlobalLayout from '@/components/page/GlobalLayout'

  export default {
    name: "Index",
    components: {
      GlobalLayout
    },
  }
</script>

<style scoped>

</style>
