import { createClient } from '@supabase/supabase-js';

export const supabase = () => {
	const config = useRuntimeConfig();

	const url: string = config.public.supabase.url;
	const annonKey = config.public.supabase.key;
	const client = createClient(url, annonKey);


	return client;
};

export const user = async() => {
	const supabaseCliente = supabase();
	const user = await supabaseCliente.auth.getUser();

	return user;
};
