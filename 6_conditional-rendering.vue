Conditional Rendering


  # v-if
  <h1 v-if="ok">Yes</h1>
  <h1 v-else>No</h1>

  # Conditional Groups with v-if and <template> (an invisible wrapper)

  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
  </template>

  # v-else
  <div v-if="Math.random() > 0.5">
    Now you see me
  </div>
  <div v-else>
    Now you don't
  </div>

  # v-else-if
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>

  # v-show vs v-if

    v-show is simple, the element is always rendered but is toggled with CSS display.
    v-if will make sure to properly destroy and recreate elements during toggles

