const defineNuxtRouteMiddleware = (toNext: any) => {
	if (toNext.fullPath == '/') {
		return navigateTo('/login');
	}

	const useSupabase = useSupabaseUser();
	const user = useSupabase.value;

	if (!user) {
		return navigateTo('/login');
	}
};

export default defineNuxtRouteMiddleware;
