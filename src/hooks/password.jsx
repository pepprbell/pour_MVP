import { Auth } from 'aws-amplify';


// 비밀번호 변경
async function changePW() {
    await Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


// 유저 이메일로 confirmation code 보내기
async function forgotPW() {
    await Auth.forgotPassword(username)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


// 코드랑 new password 모아서 보내기
async function forgotPWSubmit() {
    await Auth.forgotPasswordSubmit(username, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}