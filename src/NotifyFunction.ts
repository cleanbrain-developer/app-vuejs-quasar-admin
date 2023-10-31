import { QVueGlobals } from 'quasar';

export function notifySuccess($q: QVueGlobals, message: string) {
  $q.notify({
    type: 'positive',
    message: message,
  });
}

export function notifyFail($q: QVueGlobals, message: string) {
  $q.notify({
    type: 'negative',
    message: message,
  });
}

export function notifyInfo($q: QVueGlobals, message: string) {
  $q.notify({
    type: 'info',
    message: message,
    position: 'top',
    color: 'blue-grey-5',
  });
}
