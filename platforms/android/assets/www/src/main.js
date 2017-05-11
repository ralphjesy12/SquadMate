import Vue from 'vue/dist/vue.js'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Dashboard from './components/Dashboard.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/* eslint-disable no-new */
var Phonegap = {

	// Application Constructor
	initialize() {
		this.bindEvents()
	},

	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents() {
		document.addEventListener('deviceready', this.onDeviceReady, false)
	},

	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'Phonegap.receivedEvent(...);'
	onDeviceReady() {
		Phonegap.receivedEvent()
	},

	// Update DOM on a Received Event
	receivedEvent() {

		console.log('The device is ready!')

		Vue.use(VueRouter);
		Vue.use(VueResource);

		const router = new VueRouter({
			routes : [
				{
					path: '/',
					name: 'Login',
					component: Login,
				},
				{
					path: '/signup',
					name: 'Signup',
					component: Signup,
				},
				{
					path: '/dashboard',
					name: 'Dashboard',
					component: Dashboard,
				}
			]
		})

		const app = new Vue({
			router,
			data() {
				return {

				}
			},
		}).$mount('#app')

	}
}


Phonegap.initialize()
