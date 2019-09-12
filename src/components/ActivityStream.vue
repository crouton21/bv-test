<template>
  <div id="root">

    <div id="popover-id" class="p-2">
      <b-button id="popover-button-sync" variant="primary">I have a popover</b-button>
    </div>

    <div class="p-2">
      <b-popover container="popover-id" :show.sync="show" target="popover-button-sync" title="Popover">
        Hello <strong>World!</strong>
      </b-popover>
    </div>

    <b-button v-b-popover="{content:'Popover without a title'}" type="primary">Popover</b-button>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css'; 
</style>
