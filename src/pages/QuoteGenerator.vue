<template>
  <div class="QuoteGenerator flex-1 w-full h-full flex flex-col">
    <div class="my-8">
      <div class="flex">
        <h1 class="flex-1 text-grey-darkest">
          Quote Generator
        </h1>
        <button
          class="flex-no-shrink p-2 px-4 border-2 rounded text-black border-black hover:text-white hover:bg-black"
          @click="getRandomQuote">
          <MlIcon
            icon="random"
            size="sm" />
          <span class="ml-4">
            Get random quote!
          </span>
        </button>
      </div>
      <p class="text-grey-darkest my-4">
        This example is a simple quote generator. In this case, I am using <span class="markup-code">
          axios
        </span> for making a request to a github gist from camperbot.
      </p>
    </div>

    <div class="flex-1 flex flex-col items-center justify-start">
      <div class="QuoteCard">
        <div class="max-w-80 sm:max-w-160 mt-8 mx-auto bg-grey-light rounded-lg shadow p-8">
          <h2 class="italic text-right text-grey-darkest leading-normal">
            {{ currentQuote.quote }}
          </h2>
          <p class="text-left pt-8 text-grey-darker">
            {{ currentQuote.author }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MlIcon from 'MyLib/Icon'

export default {
  name: 'QuoteGenerator',

  components: {
    MlIcon
  },

  data () {
    return {
      quoteNumber: 0,
      quotesList: []
    }
  },

  computed: {
    currentQuote () {
      return this.quotesList[this.quoteNumber] || {}
    }
  },

  methods: {
    async getQuotesList () {
      const quotesList = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')

      return quotesList.data.quotes
    },

    getRandomQuote () {
      this.quoteNumber = window.faker.random.number({ min: 0, max: this.quotesList.length })
    }
  },

  async created () {
    this.quotesList = await this.getQuotesList()
  }
}
</script>
