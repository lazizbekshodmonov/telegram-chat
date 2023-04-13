import { ref } from 'vue'
import { defineStore } from 'pinia'
interface User {
  username: string,
  fullname: string
}
export const useProfileStore = defineStore('profile', () => {
  const user = ref<User>({
    username: 'lazizbekshodmonov',
    fullname: 'Lazizbek Shodmonov '
  })
  const isLogin = ref<boolean>(false)


  return { user, isLogin }
})
