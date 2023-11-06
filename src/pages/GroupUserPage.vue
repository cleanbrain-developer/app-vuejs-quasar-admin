<template>
  <q-page class="full-height">
    <div class="row text-h5 text-black text-bold">
      <div class="col-4 q-gutter-lg">
        <div class="q-pa-lg">
          <q-input ref="filterRef" filled v-model="filter" label="Filter">
            <template v-slot:append>
              <q-icon
                v-if="filter !== ''"
                name="clear"
                class="cursor-pointer"
                @click="resetFilter"
              />
            </template>
          </q-input>

          <q-tree
            :nodes="tree"
            node-key="label"
            :filter="filter"
            default-expand-all
          />
        </div>
      </div>
      <div class="col-grow q-pa-lg">
        <q-breadcrumbs gutter="xs">
          <q-breadcrumbs-el label="Home" to="/" />
          <q-breadcrumbs-el label="Components" />
          <q-breadcrumbs-el label="Breadcrumbs" />
        </q-breadcrumbs>
        <q-table
          class="text-h2 q-ma-md"
          :rows="rowList"
          row-key="name"
          flat
          bordered
          hide-header
          hide-bottom
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filter = ref(''),
  filterRef = ref()

const tree = [
  {
    label: 'Satisfied customers',
    children: [
      {
        label: 'Good food',
        children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }],
      },
      {
        label: 'Good service (disabled node)',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: 'Pleasant surroundings',
        children: [
          { label: 'Happy atmosphere' },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' },
        ],
      },
    ],
  },
]

const rowList = [
  {
    attribute: '그룹 명',
    value: '기본그룹',
  },
  {
    attribute: '코드',
    value: 'DEFAULT_CODE',
  },
  {
    attribute: '설명',
    value: '기본으로 생성되는 그룹',
  },
  {
    attribute: '생성 일시',
    value: new Date().toLocaleString(),
  },
  {
    attribute: '수정 일시',
    value: new Date().toLocaleString(),
  },
]
function resetFilter() {
  filter.value = ''
  filterRef.value.focus()
}
</script>

<style scoped></style>
