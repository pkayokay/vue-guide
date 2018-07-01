Computed Properties and Watchers

  # Example

  In-template operations can be convenient but are meant for simple operations. Too much logic in our template does not make our SPA declarative. To solve this, we can use a computed property.

  # Basic Example
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed Message: "{{ reversedMessage }}"</p>
    </div>

  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
        reversedMessage: function() {
        return this.message.split('').reverse().join('')
      }
    }
  })

  # Computed Caching vs Methods

  What's the difference between computed properties and methods then?
  <p>Reversed message: "{{ reverseMessage() }}"</p>
  This gives the same result as our previous example.

  The major difference is that computed properties are caches based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed.

  On the other hand, a method invocation will always run the function whenever a re-render happens. What if we have an expensive computed property? Caching would solve the problem of executing a property more times than necessary.

  If you do not want caching, use a method instead.


  # Computed vs WAtched Property

  watch properties: a way to observe and react to data changes on a Vue instance.
  Do not use the watch property, use a computed property instead:

  <div id="demo">{{ fullName }}</div>

  # Bad example: imperative and declarative.

  var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  })

  # Good
  var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    }
  })

  # Computed Setter

  Computed properties are by default getter-only, but you can provide a setter as well.

    computed: {
      fullName: {
        get: function() {
          return this.firstName + ' ' + this.lastName
        }

        set: function(newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }


Watchers

Computed properties are more appropriate in most cases, but there are exceptions to use a watch option.
It's useful when you want to perform asynchronous or expensive operations in repsonse to changing data.

https://vuejs.org/v2/guide/computed.html#Watchers