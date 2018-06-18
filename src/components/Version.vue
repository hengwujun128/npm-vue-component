<template>
  <div class="version">
    You are using Vue {{version}}
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      version1: "hello,world"
    };
  },
  computed: {
    version() {
      return Vue.version;
    }
  }
};
</script>

<style>
.version {
  font-weight: bold;
  font-family: tahoma;
}
</style>