import { ref } from 'vue'
import { defineStore } from 'pinia'
interface User {
    username: string,
    fullname: string,
    latter_activity: string,
    id: number
}
export const useUsersStore = defineStore('users', () => {
    const users = ref<User[]>([])
    users.value = [
        {
            username: 'lazizbekshodmonov',
            fullname: "Lazizbek Shodmonov",
            latter_activity: '23:00, 2-mart',
            id: 1
        },
        {
            username: 'jahongirqurbonov',
            fullname: "Jahongir Qurbonov",
            latter_activity: '13:00, 2-mart',
            id: 2
        },
        {
            username: 'bekjonishpulatov',
            fullname: "Bekjon Ishpulatov",
            latter_activity: '17:00, 12-yanvar',
            id: 3
        },
    ]


    return { users }
})
