<template>
  <div class="card">
    <div class="card-block">
      <h5 class="card-title">
        {{this.message.title}}
      </h5>
      <p class="card-text">
        {{this.message.text}}
      </p>
      <p class="card-text">
        <small class="text-muted">
          Added On {{dateToString(this.message.timestamp)}}
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import { dateToString } from './../utils/utils.js'
export default {
  props: ['message'],
  methods: {
    dateToString
  }
}
</script>
