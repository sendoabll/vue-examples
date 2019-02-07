<template>
  <div
    id="app"
    class="Main flex-1 w-full h-full flex flex-col">
    <header class="bg-black border-b border-white py-4">
      <div class="flex justify-between m-auto w-full lg:w-3/4 lg:max-w-320">
        <div>
          <MlIcon
            :icon="['fab', 'vuejs']"
            class="text-green text-4xl" />
        </div>
        <div class="flex-1 flex justify-end">
          <div class="p-2">
            <router-link
              class="no-underline hover:underline text-white"
              to="/">
              Welcome
            </router-link>
          </div>
          <div class="p-2">
            <router-link
              class="no-underline hover:underline text-white"
              to="/todo-list">
              TodoList
            </router-link>
          </div>
          <div class="p-2">
            <router-link
              class="no-underline hover:underline text-white"
              to="/quote-generator">
              Quote Generator
            </router-link>
          </div>
          <div class="p-2">
            <router-link
              class="no-underline hover:underline text-white"
              to="/form-validation">
              Form Validation
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <div class="flex-1 flex flex-col items-center justify-start bg-grey-lightest font-sans">
      <div class="flex-1 flex flex-col bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-320">
        <router-view class="flex-1" />
      </div>
    </div>
  </div>
</template>

<script>
import MlIcon from 'MyLib/Icon'

export default {
  name: 'App',

  components: {
    MlIcon
  }
}

</script>
