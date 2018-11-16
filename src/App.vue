<template>
  <div id="app">
    <div v-for="(message,index) in messages" :key="index">
      <h4>{{ message.title }}</h4>
      <p>{{ message.text }}</p>
      <p>{{ message.timestamp }}</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase'
import config from './firebase-config.js'

let app = Firebase.initializeApp(config)

let db = app.database()
let messagesref = db.ref('messages')
export default {
  name: 'App',
  firebase: {
    messages: messagesref
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
