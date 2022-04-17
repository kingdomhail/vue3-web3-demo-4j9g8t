import { createApp } from 'vue'
import App from './App.vue'
import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider || 'wss://some.local-or-remote.node:8546')

console.log({ web3 })

createApp(App).mount('#app')
