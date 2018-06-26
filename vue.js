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