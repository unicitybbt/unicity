<script setup>
import icHeaderLogo from '@images/h-logo.png';
</script>
<template>
  <header class="header">
    <div class="h-container">
      <div class="h-row h-row-align-center">
        <div class="h-col col-logo"><img :src="icHeaderLogo" alt="Logo" /></div>
        <div class="h-col col-title">2026 UNICITY INTERNATIONAL<br />BIOS LIFE LEADERSHIP TRIP<br />IN SAPPORO</div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  padding: 40px 0;
  background-image: url('@images/header-bg1.png'), url('@images/header-bg2.png');
  background-size: contain;
  background-position: left top, right top;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    background-position: left top, right top;
  }
}
.col-logo {
  img {
    width: 20vw;
    max-width: 22rem;
    aspect-ratio: 1/1;
    border-radius: 100%;
    overflow: hidden;
  }
}
.col-title {
  font-size: clamp(2rem, 2.8vw, 4.4rem);
  font-weight: bold;
  text-shadow: 0 0 8px #fff;
}
</style>
