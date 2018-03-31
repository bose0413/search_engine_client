<template lang="html">
  <div>
    <div class="row mb-2">
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="Enter key.."
                v-model="key" @keyup.enter="search">
      </div>
      <div class="col-sm-2">
        <b-button size="sm" class="w-100 h-100" @click="search">Search</b-button>
      </div>
    </div>

    <template v-if="keyQuery && document">
      <div class="alert alert-success mb-2" role="alert">Results for: <b>{{keyQuery}}</b></div>
      <b-alert class="mb-2" show variant="secondary">{{document.content}}</b-alert>
    </template>
    <div v-if="keyQuery && !document" class="alert alert-warning mt-2" role="alert">
      No results found for: <b>{{keyQuery}}</b>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      key: ''
    }
  },
  computed: {
    document () {
      return this.$store.getters['documents/document']
    },
    keyQuery () {
      return this.$store.getters['documents/keyQuery']
    }
  },
  methods: {
    search () {
      this.$store.dispatch('documents/getDocument', this.key)
        .then(() => { this.key = '' })
    }
  }
}
</script>

<style lang="css">
</style>
