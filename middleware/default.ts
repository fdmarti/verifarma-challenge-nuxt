const defineNuxtRouteMiddleware = (toNext: any) => {
	const useSupabase = useSupabaseUser();
	const user = useSupabase.value;

	if (user) {
		if (toNext.fullPath == '/login' || toNext.fullPath == '/Register') {
			return navigateTo('/Movies');
		}
	}
};

export default defineNuxtRouteMiddleware;
