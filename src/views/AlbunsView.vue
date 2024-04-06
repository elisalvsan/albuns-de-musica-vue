<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import AlbumCard from '../components/AlbumCard.vue';

const albunsOuvidos = ref([])
const mensagem = ref(null)

fetch('/data.json')
    .then(response => response.json())
    .then(dados => {
        const albuns = dados.albuns
        const albunsOuvidos = dados.albunsOuvidos
        for (let albumOuvido of albunsOuvidos) {
            for (let album of albuns) {
                if (album.id === albumOuvido.album) {
                    albumOuvido.album = album
                    albunsOuvidos.value.push(albumOuvido)
                    break
                }
            }
        }
    })
    .catch(error => mensagem.value = error)
</script>

<template>
    <main>
        <AlbumCard v-for="(album, index) in albunsOuvidos" :album="album" />
    </main>
</template>