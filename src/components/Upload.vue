<template>
  <div>
    {{aa}}
    <input type="file" name="file" ref="file" accept="image/jpeg,image/png"/>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      aa:'你好'
    };
  },
  methods: {

  }
};
</script>
