// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		'@': resolve(__dirname, '/')
	},
	css: ['./assets/styles/main.css'],
	modules: [
		'@pinia/nuxt',
		'@nuxtjs/eslint-module'
	],
	imports: {
		dirs: ['./store']
	},
	runtimeConfig: {
		app: {
			MOVIE_API: process.env.NUXT_API_MOVIES_URL
		}
	}
});
