<template>
  <b-navbar fixed="top" variant="light">
    <new-document-modal/>
    <b-navbar-brand href="#" @click="scrollTop">Search Engine</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button  size="sm" class="my-2 my-sm-0" v-b-modal.new-document>Add New</b-button>
        </b-nav-form>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import NewDocumentModal from '../document/NewDocumentModal.vue'

export default {
  components: {
    newDocumentModal: NewDocumentModal
  },
  methods: {
    scrollTop () {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
  }
}
</script>

<style lang="css" scoped>
  a {
    cursor: pointer;
  }
</style>
