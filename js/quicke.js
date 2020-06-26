var compact = VueColor.Compact

var colors = {
  hex: '#ffffff',
}

new Vue({
  el: '#color-picker',
  data () {
    return {
      colors
    }
  },
  components: {
    'compact-picker': compact,
  }
})
