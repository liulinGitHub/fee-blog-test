<template>
  <global-layout>
    <router-view/>
  </global-layout>
</template>

<script>
    import GlobalLayout from '@/components/page/GlobalLayout'

    export default {
        name: "BasicLayout",
        components: {
          GlobalLayout
        },
    }
</script>

<style scoped>

</style>
