import Vue from 'vue'
import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firebase-database'
import 'firebase/firestore'
import firebaseConfig from '../../firebaseConfig'

// console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
