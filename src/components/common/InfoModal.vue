<template>
  <b-modal name="infoModal" v-model="modalShow" :title="dialogOptions.title" :ok-only="true">
    <p>{{dialogOptions.message}}</p>
  </b-modal>
</template>

<script>
export default {
  name: 'InfoModal',
  computed: {
    dialogOptions () {
      return this.$store.getters.dialogOptions
    },
    modalShow: {
      get: function () {
        return this.$store.getters.dialogOptions.show
      },
      set: function (newValue) {
        if (newValue) {
          return
        }
        this.$store.dispatch('hideDialog', newValue)
      }
    }
  }
}
</script>

<style>
</style>
