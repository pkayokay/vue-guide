var app = new Vue({
  el: '#app',
  data: {
    message: 'First Component'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Second Component'
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'Third Component (hidden)',
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


Vue.component('todo-item', {
  // The todo-item acceps a prop ( a custom attribute).
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables'},
      { id: 1, text: 'Cheese'},
      { id: 2, text: 'Apples'}
    ]
  }
})

