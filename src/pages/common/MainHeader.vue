<template>
  <q-header elevated>
    <q-toolbar class="q-pa-none">
      <q-btn to="/" flat stretch>
        <q-avatar rounded size="md">
          <img alt="logo" class="rounded-borders" src="/logo.png" />
        </q-avatar>
        <q-toolbar-title> Admin App </q-toolbar-title>
      </q-btn>
      <q-btn-dropdown
        v-for="menu in menuList"
        :key="menu.name"
        :label="menu.name"
        flat
        stretch
        class="text-bold"
      >
        <q-list v-bind:key="subMenu.name" v-for="subMenu in menu.subMenuList">
          <q-item
            v-close-popup
            :href="subMenu.link"
            class="items-center"
            clickable
            tabindex="0"
            tag="a"
            target="_self"
          >
            <q-icon :name="subMenu.icon" class="q-pr-xs" size="xs" />
            <q-item-label class="text-bold">
              {{ subMenu.name }}
            </q-item-label>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-toolbar-title />

      <q-toggle
        v-model="darkMode"
        class="dark-mode-btn q-pr-sm"
        icon="dark_mode"
        label="Dark Mode"
      />

      <div class="no-wrap q-pa-md">user(user)</div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const darkMode = ref()
const menuList = ref([
  {
    name: '조직 관리',
    subMenuList: [
      {
        name: '그룹 & 사용자',
        link: '#/group-user',
        icon: 'people',
      },
    ],
  },
  {
    name: '시스템 관리',
    subMenuList: [
      {
        name: '감사 기록',
        link: '#/audit-log',
        icon: 'list',
      },
      {
        name: '예약 작업',
        link: '#/scheduler',
        icon: 'schedule',
      },
    ],
  },
])

onMounted(() => {
  darkMode.value = $q.dark.isActive
})

watch(darkMode, (newDarkMode) => {
  $q.dark.set(newDarkMode)
})
</script>

<style scoped></style>
