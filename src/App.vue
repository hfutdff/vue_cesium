<template>
  <div id="app">
    <cesium></cesium>
    <leftMenu></leftMenu>
    <rightBottomTool></rightBottomTool>
  </div>
</template>
<script>
  import cesium from './components/layout/cesium.vue'
  import leftMenu from './components/layout/leftMenu.vue'
  import rightBottomTool from './components/layout/rightBottomTool.vue'

  export default {
  name: "App",
  components: { cesium,leftMenu,rightBottomTool  }
};
</script>
<style>
#app,
html,
body {
  font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 14px;
  overflow: hidden;
}

</style>
