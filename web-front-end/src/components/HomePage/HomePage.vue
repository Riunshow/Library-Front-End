<template>
  <div>
    <header-nav />
    <select-model />
    <recommand />
    <footer-nav />
  </div>
</template>

<script>
  import HeaderNav from './../common/Header'
  import SelectModel from './Select'
  import Recommand from './Recommand'
  import FooterNav from './../common/Footer'
  
  export default {
    components: {
      HeaderNav,
      SelectModel,
      Recommand,
      FooterNav,
    },
    data() {
      return {};
    }
  }
</script>
