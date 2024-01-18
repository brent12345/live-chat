<template>
    <div class="welcome container">

        <div v-if="showLogin">
            <h3>Login Into The Chat Room</h3>
            <LoginForm @login="enterChat"/>
            <p>No Account Yet?<span @click="showLogin = false"> Sign up Instead</span></p>
        </div>
        <div v-else>
            <h3>Sign Up for the Chatroom</h3>
            <SignupForm @signup = "enterChat"/>
            <p>Need to Login?<span @click="showLogin = true">Login Instead</span></p>
        </div>  
    </div>
</template>
<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    components: { SignupForm, LoginForm },
    setup () {

        const showLogin = ref(true)
        const router = useRouter()
        const enterChat = () => {
            router.push({ name: 'Chatroom'})
        }
        return { showLogin, enterChat }
    }
}
</script>
<style lang="css">
    .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>