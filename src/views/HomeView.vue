<script setup>
import { ref } from 'vue';
import AlbumCard from '../components/AlbumCard.vue';

const albuns = ref([])
const mensagem = ref(null)

fetch('/data.json')
  .then(response => response.json())
  .then(data => albuns.value = data.albuns)
  .catch(error => mensagem.value = error)
</script>

<template>
  <main>
    <AlbumCard v-for="(album, index) in albuns" :album="album" />
  </main>
</template>