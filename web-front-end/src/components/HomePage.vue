<template>
  <div>
    <header-nav />
    <select-model />
  </div>
</template>

<script>
  import HeaderNav from './common/Header'
  import SelectModel from './HomePage/Select'
  export default {
    components: {
      HeaderNav,
      SelectModel,
    },
    data() {
      return {};
    }
  }
</script>
