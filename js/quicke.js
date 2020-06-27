var compact = VueColor.Compact

var pallete = ['#ffffff', '#ef5350', '#ff80ab', '#ce93d8',
 '#b39ddb', '#7986cb', '#42a5f5', '#29b6f6', '#26c6da',
 '#26a69a', '#66bb6a', '#689f38', '#aeea00', '#ffd600',
 '#ffc400', '#ff9100', '#ff6e40', '#bcaaa4', '#9e9e9e',
 '#90a4ae', '#c5e1a5', '#9e9d24', '#ef9a9a', '#b2ebf2']

 var colors = {
   hex: pallete[Math.floor(Math.random() * pallete.length)],
 }

new Vue({
  el: '#color-picker',
  data () {
    return {
      colors,
      pallete
    }
  },
  components: {
    'compact-picker': compact,
  }
})
