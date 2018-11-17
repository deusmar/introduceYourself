<template>
  <div id="app" class="jumbotron">
    <div class="container">
      <h1>Hello! Nice to meet you!</h1>
      <hr />
      <form  @submit="addMessage">
        <div class="form-group">
         <input class="form-control" maxlength="40" autofocus placeholder="Please introduce yourself :)" v-model="newMessage.title" />
        </div>
        <div class="form-group">
          <textarea class="form-control" placeholder="Leave your message!" rows="3" v-model='newMessage.text'></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Send</button>
      </form>
      <div class="card-group">
        <div class="card" v-for="(message,index) in messages" :key="index">
          <div class="card-block">
            <h4 class="card-title">{{ message.title }}</h4>
            <p class="card-text">{{ message.text }}</p>
            <p class="card-text">
              <small class="text-muted">Added on {{ message.timestamp }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase'
import config from './firebase-config.js'

let app = Firebase.initializeApp(config)

let db = app.database()
let messagesRef = db.ref('messages')
export default {
  name: 'App',
  firebase: {
    messages: messagesRef
  },
  data () {
    return {
      newMessage: {
        title: '',
        text: '',
        timestamp: null
      }
    }
  },
  methods: {
    addMessage (e) {
      e.preventDefault()
      if (this.newMessage.title === '') {
        return
      }
      this.newMessage.timestamp = Date.now()
      messagesRef.push(this.newMessage)
      this.newMessage.text = ''
      this.newMessage.title = ''
      this.newMessage.timestamp = null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
