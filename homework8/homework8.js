/* Task 1 */

    // function upperCase (exp) {
    //     const regExp = /^[a-z]/;

    //     if (regExp.test(exp)){
    //         console.log("String's not starts with uppercase character");
    //     } else {
    //         console.log("String's starts with uppercase character")
    //     }
    // }

    // upperCase('regexp');
    // upperCase('RegExp');

/* Task 2 */

    // function checkEmail(email) {
    //     const email_regExp =  /[\w]+@([\w]+\.)+[\w]+/g;
    //     console.log(email_regExp.test(email))
    // }

    // checkEmail("Qmail2@gmail.com");

/* Task 3 */

    // let str = 'cdbBdbsbz';
    // let regExp = /d(b+)(d)/gi;
    // console.log(regExp.exec(str).map(String));

/* Task 4 */

    // let str = "Java Script";
    // let result = str.replace(/(\w+) (\w+)/, (match, name, surname) => `${surname} ${name}`);

    // console.log(result); 

/* Task 5 */
   
    // function numberCard(num){

    //     let regExp = /[\d]{4}[-][\d]{4}[-][\d]{4}[-][\d]{4}/;

    //     if(regExp.test(num)){
    //             console.log(num);
    //     }else {
    //         console.log('Not a valid number card')
    //     }
    // }

    // numberCard('9999-9999-9999-9999');

/* Task 6 */

    // function checkEmail(mail){

    //     const email_regExp =  /^[\w]+([-_]?\w+)+@([\w]+\.)+[\w]{2,3}/g; 

    //     if(email_regExp.test(mail)){
    //             console.log('Email is correct');
    //         } else {
    //             console.log('Email is  not correct')
    //         }
    // }

    // checkEmail('my-Mail@gmail.com');
    // checkEmail('#my_mail@gmail.com');
    // checkEmail('my_ma--il@gmail.com');

/* Task 7 */

    function checkLogin(login){

        const login_regExp =  /^(?=.{2,10}$)[a-zA-Z]+([\.]?\w+)+$/g;  
        if(login_regExp.test(login)){
            console.log(true);
            let result = login.match( /[\d|.+]+/g).map(Number);
            console.log(result);
        }else {
            console.log(false)
            console.log(login.match(/[\d|.+]+/g).map(Number));
        }
    }

    checkLogin('ee1.1ret3');
    checkLogin('ee1*1ret3');




