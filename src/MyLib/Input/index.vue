<template>
  <div class="MlInput flex flex-col flex-wrap items-stretch w-full mb-4 relative">
    <div class="flex-1 flex -mr-px">
      <div class="flex -mr-px">
        <span
          v-if="!!Object.keys(icon).length"
          class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
          <MlIcon
            :prefix="icon.prefix"
            :icon="icon.name"
            :size="icon.size"
            :color="icon.color" />
        </span>
      </div>
      <input
        v-model="model"
        :type="type"
        class="w-full leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
        :placeholder="placeholder" />
    </div>
    <div class="h-4">
      <span
        :class="errorClasses"
        class="whitespace-no-wrap text-red text-xs">
        {{ error }}
      </span>
    </div>
  </div>
</template>
<script>
import MlIcon from 'MyLib/Icon'

export default {
  name: 'MlInput',

  components: {
    MlIcon
  },

  props: {
    value: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: ''
    },

    error: {
      type: String,
      default: ''
    },

    icon: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    model: {
      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }
    },

    errorClasses () {
      return !!this.icon.name ? 'ml-12' : ''
    }
  }
}
</script>
