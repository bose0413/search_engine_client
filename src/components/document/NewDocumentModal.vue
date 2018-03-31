<template>
  <b-modal id="new-document"
            title="Add New Document"
            @ok="saveDocument"
            ok-title="Save"
            :ok-disabled="!content || !key">
    <b-input-group>
      <b-form-input v-model="key" placeholder="Key"></b-form-input>
      <b-input-group-append>
        <b-btn variant="info" @click="generateRandom">Generate Random Key</b-btn>
      </b-input-group-append>
    </b-input-group>

    <b-form-textarea id="textarea1"
                     v-model="content"
                     placeholder="Enter content"
                     :rows="3"
                     :no-resize="true">
    </b-form-textarea>
  </b-modal>
</template>
<script>
export default {
  name: 'NewDocumentModal',
  data () {
    return {
      key: '',
      content: ''
    }
  },
  methods: {
    generateRandom () {
      this.key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    },
    saveDocument () {
      this.$store.dispatch('documents/saveDocument', {key: this.key, content: this.content})
        .then(() => {
          // this.$modal.hide('new-document')
          this.key = ''
          this.content = ''
        })
    }
  }
}
</script>
<style scoped>
  .panel {
    height: 100%;
    border: none;
    margin: 0;
  }
  textarea {
    margin-top: 20px;
    resize: none;
  }
</style>
