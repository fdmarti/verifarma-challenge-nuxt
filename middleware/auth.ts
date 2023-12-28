export default defineNuxtRouteMiddleware((to, form) => {
	// const isLogged = true

	if (to.fullPath == '/') {
		return navigateTo('/login');
	}


	// if ( isLogged ) {
	//     return navigateTo(to.fullPath)
	// }

	// return navigateTo('/Login')
});
