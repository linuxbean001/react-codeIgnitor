import axios from 'axios';
export default class AllService {
    postSignup(userInfoVo){
        console.log('adminService...xx..x',userInfoVo);
        return  axios({
            method: 'POST',
            url: 'http://localhost/souq_aljumla/api/gievit_signup', 
            headers: { 'content-type': 'application/json' },
           // config: { headers: {'Content-Type': 'multipart/form-data','content-type': 'application/json' }},
            data: userInfoVo
          }).then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

}    

 
