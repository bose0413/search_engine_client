<template lang="html">
  <div>
    <div class="row mb-2">
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="Enter search query.."
                v-model="content" @keyup.enter="search">
      </div>
      <div class="col-sm-2">
        <b-button size="sm" class="w-100 h-100" @click="search">Search</b-button>
      </div>
    </div>

    <template v-if="queryString && documents.length > 0">
      <div class="alert alert-success mb-2" role="alert">
        Results for: <b>{{queryString}}</b>
      </div>

      <b-table class="mb-2" striped hover :items="documents"></b-table>
    </template>
    <div v-if="queryString && documents.length === 0" class="alert alert-warning mt-2" role="alert">
      No results found for: <b>{{queryString}}</b>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  props: ['title'],
  computed: {
    documents () {
      return this.$store.getters['documents/documents']
    },
    queryString () {
      return this.$store.getters['documents/contentQuery']
    }
  },
  methods: {
    search () {
      this.$store.dispatch('documents/searchDocuments', this.content)
        .then(() => { this.content = '' })
    }
  }
}
</script>

<style lang="css">
</style>
