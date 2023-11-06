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
                @click="_resetFilter"
              />
            </template>
          </q-input>

          <q-tree
            :nodes="tree"
            node-key="label"
            :selected="selectedNode"
            :filter="filter"
            default-expand-all
            style="font-size: 14px"
          />
        </div>
      </div>
      <div class="col-grow q-pa-lg">
        <q-breadcrumbs gutter="xs" style="font-size: 18px">
          <q-breadcrumbs-el label="Home" to="/" />
          <q-breadcrumbs-el label="취상위 부서" />
        </q-breadcrumbs>

        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="group" label="그룹" />
          <q-tab name="user" label="사용자" />
        </q-tabs>

        <template v-if="tab === 'group'">
          <q-table
            class="q-ma-md"
            :rows="groupInformation"
            row-key="name"
            flat
            bordered
            hide-header
            hide-bottom
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="attribute" :props="props" class="bg-grey-4">{{
                  props.row.attribute
                }}</q-td>
                <q-td key="value" :props="props">{{ props.row.value }}</q-td>
              </q-tr>
            </template>
          </q-table>
        </template>
        <template v-if="tab === 'user'">
          <q-table
            title="사용자"
            :columns="userColumnList"
            :rows="userList"
            row-key="name"
            class="q-ma-md"
          />
        </template>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filter = ref(),
  filterRef = ref(),
  tree = ref(_getDefaultTree()),
  selectedNode = ref(null),
  tab = ref('group')

const groupInformation = _getDefaultGroupInformation()

const userColumnList = _getDefaultUserColumnList(),
  userList = _getDefaultUserList()

function _resetFilter() {
  filter.value = ''
  filterRef.value.focus()
}

function _getDefaultTree() {
  return [
    {
      label: '최상위 부서',
      children: [
        {
          label: '개발부',
          children: [{ label: '개발1팀' }, { label: '개발2팀' }],
        },
        {
          label: '사업부',
          children: [{ label: '사업1팀' }, { label: '사업2팀' }],
        },
        {
          label: '영업부',
          children: [
            { label: '영업1팀' },
            { label: '영업2팀' },
            { label: '영업3팀' },
          ],
        },
      ],
    },
  ]
}

function _getDefaultGroupInformation() {
  return [
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
}

function _getDefaultUserColumnList() {
  return [
    {
      name: 'name',
      label: '사용자 명',
      field: (row) => row.name,
      align: 'left',
    },
    {
      name: 'code',
      label: '코드',
      field: (row) => row.code,
      align: 'left',
    },
    {
      name: 'loginId',
      label: '로그인 아이디',
      field: (row) => row.loginId,
      align: 'left',
    },
    {
      name: 'status',
      label: '상태',
      field: (row) => row.status,
      align: 'left',
    },
    {
      name: 'loginId',
      label: '생성 일시',
      field: (row) => row.createDate,
      align: 'left',
    },
    {
      name: 'loginId',
      label: '수정 일시',
      field: (row) => row.updateDate,
      align: 'left',
    },
  ]
}

function _getDefaultUserList() {
  return [
    {
      name: '노상현',
      code: 'clean_brain',
      loginId: 'clean_brain',
      status: '활성',
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
    },
    {
      name: '홍길동',
      code: 'gdhong',
      loginId: 'gdhong',
      status: '활성',
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
    },
    {
      name: '이순신',
      code: 'sslee',
      loginId: 'sslee',
      status: '활성',
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
    },
    {
      name: '유관순',
      code: 'ksyoo',
      loginId: 'ksyoo',
      status: '활성',
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
    },
    {
      name: '이성계',
      code: 'sklee',
      loginId: 'sklee',
      status: '활성',
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
    },
  ]
}
</script>

<style scoped></style>
