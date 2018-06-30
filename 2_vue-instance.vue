Data and Methods
  // Data object
  var data = { a: 1 }
  // Object is added to a Vue instance
  var vm = new Vue({
    data: data
  })
  // Getting the property on the instance returns the one from the original data
  vm.a == data.a // true
  // Setting the property on the instance also affects the original data
  vm.a = 2
  data.a // 2

  // Wehn this data changes, the view will re-render. Properties in data are only reactive if they existed when the instance was created.
  // Adding properties later will not trigger any view updates, so make sure to set some initial value.

  // There's only one exception to this with the use of Object.freeze()
  // In addition to data properties, Vue instances expose a number of useful instance properties and methods, prefixed with $ to differentiate them from user-defined properties (Reference the API for these).


Instance Lifecycle Hooks
  Each Vue instnace goes through a series of initialization steps when it's created.
    1. Needs to set up data observation
    2. Compile the template
    3. Mount the instnce to the DOM
    4. Update the DOM when data changes

  Lifecycle hooks: gives users the ability to add their own code at specific stages of the instance.

Example, the 'created' hook can be used to run code after the creation of an instance

new Vue({
  data: {
    a: 1
  },
  created: function() {
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"

There's also mounted, updated, destroyed, all of these lifecycle hooks are called with their 'this' context pointing to the Vue instance invoking it.

Reference the Lifecycle Diagram for an overview
https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram

