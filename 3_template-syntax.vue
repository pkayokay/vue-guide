Interpolations
  # Text
  <span>{{ message }}</span>

  The mustache tag will be replaced with the value of message, and will be updated whenever the property changes.

  There is an option to do one-time interpolations and not update data.
  <span v-once>This will never change: {{ message }}</span>


  # Raw HTML

  Mustaches interpret dat as plain text, in order to output real HTML we will need the v-html directive:

  <p>Using mustaches: {{ rawHTML }}</p>
  // Using mustaches: <span style="color: red">This should be red.</span>

  <p>Using v-html directive: <span v-html="rawHTML"></span></p>
  // Using v-html directive: This should be red.


  # Attributes

  Mustaches cannot be used inside HTML attributes, use a v-bind directive:
  <div v-bind:id="dynamicId"></div>


  # Using JavaScript Expressions

  Vue supports the full power of JavScript expressions

  {{ number + 1}}
  {{ ok ? 'YES' : 'NO'}}
  {{ message.split('').reverse().join('') }}
  <div v-bind:id="'list-' + id"></div>

  The expressions will be evaluated as JavaScript in the data scope of the owner Vue instance, one restriction is that each binding can only contain one single expression.


Directives

  # Arguments
  Some directives have an argument denoted by a colon after the directive name.
  <a v-bind:href="url"></a>

  We're telling it to bind the href's attributes with the value of the expression 'url'

  <a v-on:click="doSomething"></a>

  # Modifiers
  Modifiers are special postfixes denoted by a dot, it indicates that a directive should be bound in some special way.

  <form v-on:submit.prevent="onSubmit"></form>
  .prevent is calling event.preventDefault()


Shorthands

  The v- prefixes serves as a visual cue for identifying Vue-specific attributes. The v- becomes less important when you're building a SPA, so Vue.js provides a shorthand method for the two most common directives:

  v-bind
  <a v-bind:href="url"></a>
  <a :href="url"></a>


  v-on
  <a v-on:click="doSomething"></a>
  <a @click="doSomething"></a>

