<template>
  <div style="margin: 20px;">
    <el-tabs-single-pane tab-position="left">
      <el-tab-pane label="test1"><h4>Test 1</h4></el-tab-pane>
      <el-tab-pane label="test2"><h4>Test 2</h4></el-tab-pane>
      <el-tab-pane label="test3"><h4>Test 3</h4></el-tab-pane>
      <el-tab-pane label="test4"><h4>Test 4</h4></el-tab-pane>
      <template slot="single">
        <h1>Hello World from Slot!</h1>
      </template>
    </el-tabs-single-pane>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
