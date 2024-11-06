import { ref } from 'vue'

export function useMessage() {
  const message = ref('')
  const type = ref<'success' | 'error' | 'info'>('info')
  const visible = ref(false)

  function show(msg: string, msgType: 'success' | 'error' | 'info' = 'info') {
    message.value = msg
    type.value = msgType
    visible.value = true

    setTimeout(() => {
      visible.value = false
    }, 3000)
  }

  return {
    success: (msg: string) => show(msg, 'success'),
    error: (msg: string) => show(msg, 'error'),
    info: (msg: string) => show(msg, 'info'),
    message,
    type,
    visible,
  }
}
