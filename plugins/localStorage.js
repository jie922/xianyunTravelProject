import createPersistedState from 'vuex-persistedstate'
// export default函数是nuxt插件的的固定试
export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        key: 'store', //读取本地的数据到store,可以是任意的字符串
    })(store)
  })
}