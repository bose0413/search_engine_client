<template lang="html">
  <b-card no-body>
    <b-tabs card vertical>
      <b-tab title="Search by Key" active>
        <document-search-by-key></document-search-by-key>
      </b-tab>
      <b-tab title="Search by Content">
        <document-search-by-content></document-search-by-content>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import DocumentSearchByContent from './document/DocumentSearchByContent.vue'
import DocumentSearchByKey from './document/DocumentSearchByKey.vue'

export default {
  components: {
    documentSearchByContent: DocumentSearchByContent,
    documentSearchByKey: DocumentSearchByKey
  }
}
</script>

<style>
  .container {
    padding: 20px 0;
  }
  ul {
    padding: 0;
  }
  .card-header {
    padding: 0;
  }
  .card-header .active {
    border: 0 !important;
    border-radius: 0 !important;
    background-color: #6c757d !important;
    color: white !important;
  }
  .card-header a {
    color: #6c757d !important;
  }
</style>
