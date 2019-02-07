<template>
  <div class="Welcome flex-1 flex flex-col">
    <div class="my-8">
      <div class="flex">
        <h1 class="flex-1 text-grey-darkest">
          Welcome!
        </h1>
      </div>
      <p class="text-grey-darkest my-4">
        This web application has been created with vue-cli and some initial configurations. Enjoy!
      </p>
    </div>

    <div class="flex-1 flex flex-col items-center justify-start">
      <div class="rounded rounded-t-lg overflow-hidden shadow max-w-80 my-3">
        <img
          class="w-full blur-2"
          :src="VUE_CODE"
          alt="VueCode" />
        <div class="flex justify-center -mt-8">
          <img
            class="relative w-24 h-24 bg-white rounded-full border-solid border-grey border -mt-3"
            :src="VUE_LOGO"
            alt="VueLogo" />
        </div>
        <div class="text-center px-3 pb-6 pt-2">
          <h3 class="text-black text-sm bold font-sans">
            @sendoabll
          </h3>
        </div>
        <div class="flex justify-center pb-3 text-grey-dark">
          <div
            class="text-center hover:text-grey-darkest cursor-pointer"
            @click="handleGithubClick">
            <MlIcon :icon="['fab', 'github']" />
            <div class="mt-2">
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MlIcon from 'MyLib/Icon'
import { VUE_CODE, VUE_LOGO } from 'app/assets/images'

export default {
  name: 'WelcomePage',

  components: {
    MlIcon
  },

  data () {
    return {
      VUE_CODE,
      VUE_LOGO
    }
  },

  methods: {
    handleGithubClick () {
      window.open('https://github.com/sendoabll', '_blank')
    }
  }
}
</script>
