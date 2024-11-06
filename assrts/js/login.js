//show hiden - password

const showHiddenpassword = () => {
    const input = document.getElementById('login-pass');
    const iconEye = document.getElementById('login-eye');
    iconEye.addEventListener('click',()=> {
        //change passaword to text 
        if (input.type === 'password') {
            //change password ta text 
            input.type = 'text';
            
            //icon change
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');

        


        } else {
           input.type = 'password';
           iconEye.classList.add('ri-eye-line');
        }
    });
};

showHiddenpassword();