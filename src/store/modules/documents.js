import axios from 'axios'

function stringContainsAllWords (src, match) {
  return match &&
          match.split(' ').filter((word) => !src.match(new RegExp(`\\b${word}\\b`))).length === 0
}

const state = {
  documents: [],
  document: null,
  contentQuery: '',
  keyQuery: ''
}

const mutations = {
  setDocuments (state, documents) {
    state.documents = documents
  },
  addDocument (state, document) {
    state.documents.push(document)
  },
  setContentQuery (state, contentQuery) {
    state.contentQuery = contentQuery
  },
  setKeyQuery (state, keyQuery) {
    state.keyQuery = keyQuery
  },
  setDocument (state, document) {
    state.document = document
  },
  setDialogOptions (state, {show, title, message, type = 'info'}) {
    state.dialogOptions = {show, title, message, type}
  }
}

const actions = {
  searchDocuments ({commit, state}, query) {
    axios.get('/documents?query=' + encodeURIComponent(query))
      .then(res => {
        commit('setDocuments', res.data)
        commit('setContentQuery', query)
      })
      .catch(error => console.log(error))
  },
  getDocument ({commit, dispatch, state}, key) {
    axios.get('/documents/' + key)
      .then(res => { commit('setDocument', res.data) })
      .catch(() => { commit('setDocument', null) })
    commit('setKeyQuery', key)
  },
  saveDocument ({commit, state, dispatch}, {key, content}) {
    const document = {key, content}
    axios.post('/documents', document)
      .then(() => {
        if (stringContainsAllWords(document.content, state.contentQuery)) {
          commit('addDocument', document)
        }
        dispatch('showAlert', {
          message: `Document with ID ${key} has been successfully created`,
          title: 'Document created'
        }, {root: true})
      })
      .catch(err => console.error(err))
  }
}

const getters = {
  documents (state) {
    return state.documents
  },
  contentQuery (state) {
    return state.contentQuery
  },
  keyQuery (state) {
    return state.keyQuery
  },
  document (state) {
    return state.document
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
