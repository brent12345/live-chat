import { ref } from "vue";
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
    console.log('User state change. Current user is: ', _user)
    //console.log('Current user ID is: ', _user.uid)
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default  getUser 