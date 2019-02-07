<template>
  <div class="FormValidation flex-1 w-full h-full flex flex-col">
    <div class="my-8">
      <div class="flex">
        <h1 class="flex-1 text-grey-darkest">
          Form validation
        </h1>
        <button
          class="flex-no-shrink p-2 px-4 border-2 rounded text-black border-black hover:text-white hover:bg-black"
          @click="handleReset">
          <MlIcon
            icon="eraser"
            size="sm" />
          <span class="ml-4">
            Clean form
          </span>
        </button>
      </div>
      <p class="text-grey-darkest my-4">
        This example is a simple form validator. There are some validations with a couple of <span class="markup-code">
          regular expresions
        </span> that user must pass to get the form validated. Good luck!
      </p>
    </div>

    <div class="flex-1 flex items-between justify-start">
      <div class="w-1/2 flex pr-2 flex-col items-start justify-start">
        <MlInput
          placeholder="Name"
          icon-name="user"
          :value="username"
          :error="getErrorMessage(formErrors.username)"
          @input="onUsernameInput" />

        <MlInput
          placeholder="Birthdate (dd/mm/yyyy)"
          icon-name="birthday-cake"
          :value="birthdate"
          :error="getErrorMessage(formErrors.birthdate)"
          @input="onBirthdateInput" />

        <MlInput
          placeholder="Email"
          icon-name="at"
          :value="email"
          :error="getErrorMessage(formErrors.email)"
          @input="onEmailInput" />
        {{ formErrors.password }}
        <MlInput
          type="password"
          placeholder="Password"
          icon-name="key"
          :value="password"
          :error="getErrorMessage(formErrors.password)"
          @input="onPasswordInput" />

        <button
          class="self-center mt-8 flex-no-shrink p-2 px-4 border-2 rounded text-green border-green hover:text-white hover:bg-green"
          @click="onSubmit">
          <MlIcon
            icon="eraser"
            size="sm" />
          <span class="ml-4">
            Validate
          </span>
        </button>
      </div>
      <div class="w-1/2 flex pl-2">
        <div class="w-1/2 flex flex-col items-start justify-start flex-1 border border-grey">
          <div class="w-full text-left flex flex-col">
            <div class="w-full flex-1 flex">
              <div class="w-1/3 py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
                Key
              </div>
              <div class="w-1/3 py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
                Value
              </div>
              <div class="w-1/3 py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
                Status
              </div>
            </div>
            <div>
              <div class="w-full flex-1 flex py-4 border-b border-grey-light">
                <div class="w-1/3 px-6">
                  Username
                </div>
                <div class="w-1/3 px-6">
                  {{ username }}
                </div>
                <div class="w-1/3 px-6">
                  {{ resolveValidationText(formErrors.username) }}
                </div>
              </div>
              <div class="w-full flex-1 flex py-4 border-b border-grey-light">
                <div class="w-1/3 px-6">
                  Birthdate
                </div>
                <div class="w-1/3 px-6">
                  {{ birthdate }}
                </div>
                <div class="w-1/3 px-6">
                  {{ resolveValidationText(formErrors.birthdate) }}
                </div>
              </div>
              <div class="w-full flex-1 flex py-4 border-b border-grey-light">
                <div class="w-1/3 px-6">
                  Email
                </div>
                <div class="w-1/3 px-6">
                  {{ email }}
                </div>
                <div class="w-1/3 px-6">
                  {{ resolveValidationText(formErrors.email) }}
                </div>
              </div>
              <div class="w-full flex-1 flex py-4 border-b border-grey-light">
                <div class="w-1/3 px-6">
                  Password
                </div>
                <div class="w-1/3 px-6">
                  {{ password }}
                </div>
                <div class="w-1/3 px-6">
                  {{ resolveValidationText(formErrors.password) }}
                </div>
              </div>
              <template v-if="isSubmitted && isValid">
                <div class="w-full flex-1 flex py-4 border-b border-grey-light">
                  <div class="bg-green h-12 w-full flex items-center justify-center text-white px-6">
                    Valid! Form submitted.
                  </div>
                </div>
              </template>
              <template v-if="isSubmitted && !isValid">
                <div class="w-full flex-1 flex py-4 border-b border-grey-light">
                  <div class="bg-red h-12 w-full flex items-center justify-center text-white px-6">
                    Error! Try again.
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MlInput from 'MyLib/Input'
import MlIcon from 'MyLib/Icon'

export default {
  name: 'FormValidation',

  components: {
    MlInput,
    MlIcon
  },

  data () {
    return {
      ...this.getInitialState()
    }
  },

  methods: {
    getInitialState () {
      return {
        isSubmitted: false,
        isValid: false,
        username: '',
        birthdate: '',
        email: '',
        password: '',
        formErrors: {
          username: 'Please, enter a valid username',
          birthdate: 'Please, enter a valid birthdate',
          email: 'Please, enter a valid email',
          password: 'Please, enter a valid password'
        }
      }
    },

    handleReset () {
      this.$data = this.getInitialState()
    },

    onUsernameInput (value) {
      this.username = value

      if (!this.username.length || this.username.length < 3) {
        this.setError({ username: 'Please, use more than 3 characters' })
      } else if (this.username.length > 12) {
        this.setError({ username: 'Please, use less than 12 characters' })
      } else {
        this.setError({ username: '' })
      }
    },

    onBirthdateInput (value) {
      this.birthdate = value
      const birthdateRegex = RegExp(/^((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/[12]\d{3})$/)

      if (!this.birthdate.length || this.birthdate.length < 3) {
        this.setError({ birthdate: 'Please, enter a valid birthdate' })
      } else if (!birthdateRegex.test(value)) {
        this.setError({ birthdate: 'Invalid birthdate format, use dd/mm/yyyy' })
      } else {
        this.setError({ birthdate: '' })
      }
    },

    onEmailInput (value) {
      this.email = value
      const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

      if (!this.email.length || this.email.length < 3) {
        this.setError({ email: 'Please, enter a valid email' })
      } else if (!emailRegex.test(value)) {
        this.setError({ email: 'Invalid email format' })
      } else {
        this.setError({ email: '' })
      }
    },

    onPasswordInput (value) {
      this.password = value

      if (!this.password.length || this.password.length < 3) {
        this.setError({ password: 'Please, use more than 3 characters' })
      } else if (this.password.length > 12) {
        this.setError({ password: 'Please, use less than 12 characters' })
      } else {
        this.setError({ password: '' })
      }
    },

    setError (error) {
      this.formErrors = {
        ...this.formErrors,
        ...error
      }
    },

    getErrorMessage (message) {
      if (this.isSubmitted) {
        return message
      }

      return ''
    },

    resolveValidationText (field) {
      return this.isSubmitted ? !!field ? 'Error' : 'Ok' : ''
    },

    onSubmit () {
      this.isSubmitted = true

      this.isValid = Object.keys(this.formErrors).every((key, othr) => {
        return this.formErrors[key] === ''
      })
    }
  }
}
</script>
