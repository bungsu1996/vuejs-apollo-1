import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareEnvelope, faLock, faArrowRightToBracket, faEye, faEyeSlash, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSquareEnvelope, faLock, faArrowRightToBracket, faEye, faEyeSlash, faUserLock)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
