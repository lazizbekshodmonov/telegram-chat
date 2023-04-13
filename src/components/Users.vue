<template>
    <div class="navbar p-2">
        <div class="title flex mt-3 mb-3">
            <img class=" mr-3" src="../icons/Shape.svg" alt="">
            <h3>Chats</h3>
        </div>
        <div class="search  mb-8">
            <input type="text" class="pl-2" placeholder="Search">
        </div>
        <ul class="users ">
            <li class="user_item" v-for="(user, i) in store.users" :key="user.id">
                <RouterLink :to="'/users/' + user.id" class="flex">
                    <div class="avatar mr-3">
                        <img src="../assets/images/istockphoto-1300845620-612x612.jpg" alt="">
                    </div>
                    <div class="user_info flex flex-col-reverse justify-between">
                        <h2 class=" text-cyan-50 name">{{ user.fullname }}</h2>
                        <p class=" text-zinc-600 last_message">Salom</p>
                    </div>
                    <div class="last_message_date">
                        <p class="date">8:32 PM</p>
                    </div>
                </RouterLink>
            </li>


        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useUsersStore } from '../stores/users'
const id = ref<number>(1)
const store = useUsersStore()

</script>

<style scoped lang="scss">
.navbar {


    .title {
        h3 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            font-feature-settings: 'fina' on, 'init' on;
            color: #8c9097;
            // border-radius: 2px;
        }
    }

    .search {
        background: rgba(255, 255, 255, 0.0605);
        border-radius: 3px;
        border-bottom: 1px solid #5e6374;

        input {
            width: 100%;
            height: 30px;
            outline: none;
            background: rgba(255, 255, 255, 0.0605);
        }
    }

    .users {
        .user_item {
            height: 70px;

            .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }

            .user_info {
                width: calc(100% - 120px);

                .name {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 21px;

                    color: #FFFFFF;


                    /* Inside auto layout */

                    flex: none;
                    order: 4;
                    flex-grow: 0;
                }

                .last_message {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                    color: #888888;
                }

            }

            .last_message_date {
                width: 50px;

                .date {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                    color: #838383;
                }
            }
        }
    }
}
</style>