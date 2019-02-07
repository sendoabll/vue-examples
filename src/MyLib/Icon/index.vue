<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'MlIcon',

  render (h) {
    return h(FontAwesomeIcon, {
      props: this.$props,
      attrs: this.$attrs,
      on: this.$listeners
    })
  },

  props: FontAwesomeIcon.props
}
</script>
