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
            v-model:selected="selectedNode"
            :filter="filter"
            selected-color="primary"
            default-expand-all
          />
        </div>
      </div>
      <div v-if="selectedNode" class="col-grow q-pa-lg">
        <q-breadcrumbs gutter="xs" separator-color="blue">
          <template v-for="item in breadCrumbsPathList" :key="item.key">
            <q-breadcrumbs-el :label="item.key" class="text-inherit-weakest" />
          </template>
        </q-breadcrumbs>

        <q-tabs
          v-model="tab"
          dense
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
          class="q-ma-lg bg-inherit-weaker"
        >
          <q-tab
            name="group"
            label="그룹"
            icon="groups"
            class="bg-inherit text-inherit-weakest"
          />
          <q-tab
            name="user"
            label="사용자"
            icon="person"
            class="bg-inherit text-inherit-weakest"
          />
        </q-tabs>

        <template v-if="tab === 'group'">
          <q-table
            title="기본 정보"
            :rows="groupInformation"
            row-key="name"
            bordered
            hide-header
            hide-bottom
            class="q-ma-md"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="attribute" :props="props">{{
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
            bordered
            class="q-ma-md"
          />
        </template>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const filter = ref(),
  filterRef = ref(),
  tree = ref(_getDefaultTree()),
  selectedNode = ref(''),
  tab = ref('group')

const breadCrumbsPathList = ref<object[]>([])
const groupInformation = _getDefaultGroupInformation()

const userColumnList = _getDefaultUserColumnList(),
  userList = _getDefaultUserList()

const endTree = ref('')
const startTree = ref('')

watch(selectedNode, (newSelectedNode) => {
  breadCrumbsPathList.value = []
  breadCrumbsPathList.value.push({ key: tree.value[0].label })
  searchTree(tree.value[0], newSelectedNode)
})

function _resetFilter() {
  filter.value = ''
  filterRef.value.focus()
}

function searchTree(tree, target) {
  if (tree.label === target) {
    return tree
  }
  for (const child of tree.children) {
    breadCrumbsPathList.value.push({ key: child.label })
    const found = searchTree(child, target)
    if (found) {
      return found
    } else {
      breadCrumbsPathList.value.pop()
    }
  }
}

function _getDefaultTree() {
  return [
    {
      label: '최상위 그룹',
      icon: 'domain',
      children: [
        {
          label: '개발부',
          icon: 'groups',
          children: [
            {
              label: '개발1팀',
              icon: 'groups',
              children: [],
            },
            {
              label: '개발2팀',
              icon: 'groups',
              children: [],
            },
          ],
        },
        {
          label: '사업부',
          icon: 'groups',
          children: [
            {
              label: '사업1팀',
              icon: 'groups',
              children: [],
            },
            {
              label: '사업2팀',
              icon: 'groups',
              children: [],
            },
          ],
        },
        {
          label: '영업부',
          icon: 'groups',
          children: [
            {
              label: '영업1팀',
              icon: 'groups',
              children: [],
            },
            {
              label: '영업2팀',
              icon: 'groups',
              children: [],
            },
            {
              label: '영업3팀',
              icon: 'groups',
              children: [],
            },
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
    {
      name: '이황',
      code: 'hlee',
      loginId: 'hlee',
      status: '활성',
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
    },
  ]
}
</script>

<style scoped></style>
