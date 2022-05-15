import { Auth } from 'aws-amplify';


// 회원가입
async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}


// 로그인
async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}


// 로그아웃
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}


export default { signUp, confirmSignUp, signIn, signOut }