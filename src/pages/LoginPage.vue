<template>
  <div class="fullscreen flex flex-center">
    <q-card-section
      class="text-grey-5 column justify-center items-center q-gutter-sm"
    >
      <img
        alt="logo"
        class="rounded-borders"
        src="/logo.png"
        style="width: 200px"
      />
      <div class="text-h6 text-grey-7">Admin Application</div>
    </q-card-section>
    <q-card-section horizontal>
      <q-card-section style="min-width: 500px">
        <q-form
          ref="formRef"
          class="q-gutter-y-sm"
          @submit="onSubmit"
          @reset="onReset"
        >
          <q-input
            label="아이디"
            v-model="loginId"
            placeholder="아이디를 입력하세요."
          />
          <q-input
            label="비밀번호"
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
          <q-checkbox
            v-model="saveId"
            class="text-grey-7"
            label="아이디 저장"
            size="xs"
          />
          <q-btn
            class="full-width"
            color="primary"
            label="Login"
            type="submit"
          />
        </q-form>
      </q-card-section>
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { notifyFail, notifyInfo } from 'src/NotifyFunction'

const formRef = ref(null)
const loginId = ref(null)
const password = ref(null)
const saveId = ref(false)
const $q = useQuasar()

function onSubmit() {
  if (!loginId.value) {
    notifyInfo($q, '로그인 아이디를 입력하세요.')
    return
  }
  if (!password.value) {
    notifyInfo($q, '비밀번호를 입력하세요.')
    return
  }

  if (loginId.value === 'clean_brain' && password.value === '1234') {
    location.href = '/'
  } else {
    notifyFail($q, '로그인 아이디 또는 비밀번호가 일치하지 않습니다.')
  }
}

function onReset() {
  loginId.value = null
  password.value = null
}
</script>

<style scoped></style>
