<template>
    <div class="user_item flex">
        <div class="navbar pl-12 pr-12 pt-4 pb-4 flex">
            <div class="user_avatar mr-3">
                <img src="../assets/images/istockphoto-1300845620-612x612.jpg" alt="">
            </div>
            <div class="user_info">
                <h2 class="full_name mb-1 mt-1">{{ user?.fullname }}</h2>
                <p class="latter_activity">{{ user?.latter_activity }}</p>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import Users from '@/components/Users.vue';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/users';

const store = useUsersStore()

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id)

const user = computed(() => store.users.find(item => item.id == +id.value))

const close = () => {
    router.back()

}





</script>

<style scoped lang="scss">
.user_item {
    height: 100vh;
    background: #232734;
    border-radius: 7px 0px 0px 0px;

    .navbar {
        width: 100%;
        height: 83px;
        border-bottom: 1px solid #5e6374;

        .user_avatar {
            width: 50px;
            width: 50px;
            overflow: hidden;
            border-radius: 50%;

            img {
                width: 100%;
            }

        }

        .user_info {
            // height: 100%;

            .full_name {
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 21px;

                color: #FFFFFF;

                border-radius: 2px;
            }

            .latter_activity {
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                /* identical to box height */


                color: #888888;

                border-radius: 2px;
            }
        }
    }

    .chat {
        width: 100%;
    }
}
</style>