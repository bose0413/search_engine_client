<template>
  <div id="app">
    <info-modal></info-modal>
    <app-header></app-header>
    <router-view class="body"/>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import InfoModal from './components/common/InfoModal.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    infoModal: InfoModal
  }
}
</script>

<style>
  .body {
    margin-top: 56px
  }
</style>
