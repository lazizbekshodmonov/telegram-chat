<template>
    <div class="home grid lg:grid-cols-3 md:grid-cols-2">
        <div class="saidbar">
            <UsersVue />
        </div>
        <div class="chat lg:col-span-2 md:col-span-1">
            <div v-if="route.name == 'home'" class="chat_not_starting flex  justify-center items-center">
                <h2 class=" text-cyan-50 text-xl">Select a chat to start messaging</h2>
            </div>
            <RouterView v-else />
        </div>
    </div>
</template>

<script setup lang="ts">
import UsersVue from '@/components/Users.vue';
import { useRoute } from 'vue-router';
const route = useRoute()



</script>

<style scoped lang="scss">
.home {
    .saidbar {
        width: 100%;
        // max-width: 700px;
        // min-width: 350px;
        height: 100vh;
        background-color: #19202f;
    }

    .chat {
        width: 100%;
        background-color: #232734;

        .chat_not_starting {
            width: 100%;
            height: 100%;
            background-color: #232734;
        }
    }
}

@media screen and (max-width: 768px) {
    .home {
        position: relative;


        .chat {
            position: absolute;
            right: 0;

            .chat_not_starting {
                display: none;
            }
        }

        .hide {
            width: 0;
            overflow: hidden;
            transition: 0.2s;
        }

        .show {
            width: 100%;
            transition: 0.2s;
        }
    }
}
</style>