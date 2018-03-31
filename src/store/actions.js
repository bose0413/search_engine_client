export const showAlert = ({commit, state}, {type = 'info', message, title}) => {
  commit('setDialogOptions', {type, message, title, show: true})
}

export const hideDialog = ({commit, state}) => {
  commit('setDialogOptions', {show: false})
}
