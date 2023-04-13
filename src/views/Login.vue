<template>
    <div class="authentication grid lg:grid-cols-2 md:grid-cols-1 md:justify-center">
        <div class="auth_banner bg-slate-500">

        </div>
        <div class="auth_form p-4 flex justify-center items-center">
            <form class="form " @submit.prevent="">
                <div class="flex justify-center mb-6">
                    <h2 class="font-bold text-4xl">Login</h2>
                </div>
                <div class="username flex flex-col mb-6 ">
                    <label for="userbame" class=" mb-2">Username</label>
                    <input type="text" id="username" class=" p-3" v-model="username">
                </div>
                <div class="password flex flex-col">
                    <label for="password" class=" mb-2">Password</label>
                    <input type="password" id="password" class="p-3" v-model="password" autocomplete="on">
                </div>
                <div class="buttons flex justify-between">
                    <button class="btn btn-color-seriy" @click="login">Login</button>
                    <RouterLink to="/registration" class="btn btn-color-white flex justify-center items-center">Sign Up
                    </RouterLink>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const username = ref()
const password = ref()
const login = () => {
    console.log(username.value, password.value);

}
const register = () => {
    router.push('/registration')
    console.log('register');

}


</script>

<style scoped lang="scss">
.authentication {
    width: 100%;
    height: 100vh;

    .auth_form {
        width: 100%;

        .form {
            width: 100%;
            max-width: 416px;

            .username,
            .password {
                width: 100%;
                height: 100px;

                label {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 100%;
                    color: #3E334E;
                }

                input {
                    width: 100%;
                    height: 56px;
                    border: 1px solid #AFA2C3;
                    border-radius: 8px;
                    outline: none;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    /* identical to box height, or 150% */


                    color: #3E334E;
                }


            }

            .buttons {
                width: 100%;

                .btn {
                    width: 45%;
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .authentication {
        .auth_banner {
            display: none;
        }
    }
}
</style>