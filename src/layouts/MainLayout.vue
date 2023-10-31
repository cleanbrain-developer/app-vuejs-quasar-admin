<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { EssentialLinkProps } from 'components/EssentialLink.vue'
import MainHeader from 'pages/common/MainHeader.vue'
import MainFooter from 'pages/common/MainFooter.vue'
</script>
