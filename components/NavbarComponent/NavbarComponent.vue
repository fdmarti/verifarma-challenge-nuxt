<template>
	<nav>
        <RouterLink class="logo" to="/movies">
            <img src="~/assets/images/logo.webp" alt="logo image with movie asset">
        </RouterLink>
        <section class="menu">
            <RouterLink to="/login">Logout</RouterLink>
        </section>
    </nav>
</template>

<script setup lang="ts">
	import './NavbarComponent.css';
</script>
