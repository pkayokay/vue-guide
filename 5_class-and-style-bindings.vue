Binding HTML Classes

  # Object Syntax
  <div class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }">
  </div>

  data: {
    isActive: true,
    hasError: false
  }

  It will render:
  <div class="static active"></div>


  if the data changes..

  data: {
    isActive: false,
    hasError: true
  }
  <div class="static text-danger"></div>


  The bound object does not have to be inline:
  <div v-bind:class="classObject"></div>

  data {
    classObject: {
      active: true,
      'text-danger': false
    }
  }

  Another option to bind a computed property that returns an object:
  <div v-bind:class="classObject"></div>

  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }

  # Array Syntax

  <div v-bind:class="[activeClass, errorClass]"></div>

  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }

  Which will render:

  <div class="active text-danger"></div>