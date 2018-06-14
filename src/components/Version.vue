<template>
  <div class="version">
    You are using Vue {{version}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: "hello,world"
    };
  }
};
</script>

<style>
.version {
  font-weight: bold;
  font-family: tahoma;
}
</style>