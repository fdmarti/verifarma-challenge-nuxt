<template>
  <nav>
    <RouterLink
      class="logo"
      to="/movies"
    >
      <img
        src="~/assets/images/logo.webp"
        alt="logo image with movie asset"
      >
    </RouterLink>
    <section class="menu">
      <RouterLink
        to="/login"
        @click="logOut"
      >
        Logout
      </RouterLink>
    </section>
  </nav>
</template>

<script setup lang="ts">
import './NavbarComponent.css';
import { useMoviesStore } from '../../store/movies';
import { useUserStore } from '../../store/user';
import { useRouter } from 'vue-router';
const router = useRouter();

const movieStore = useMoviesStore();
const userStore = useUserStore();

const logOut = () => {
	movieStore.$reset();
	userStore.logOut();
	router.push('/Login');
};
</script>
