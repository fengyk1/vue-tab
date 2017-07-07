<template>
  <div id="app">
      <tabs :TabString="'padding:16px 0;'">
          <tab name="tab1">
              <div>tab1的内容</div>
          </tab>
          <tab name="tab2">
              <div>tab2的内容</div>
          </tab>
      </tabs>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
</style>
