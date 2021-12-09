/* Task1 */

    let width = prompt('Введіть число ширину'); 
    let height = prompt('Введіть число висоту');

    function calcRectangleArea(width, height){  
        if (width == '' || height == '') throw ('Field is empty');
        width = +width;
        height = +height 
        if (isNaN(width) || isNaN(width) || (width <= 0 || height <= 0)) throw ('The value is not correct !' );
        const S = width * height; 
    }

    try {
       console.log (calcRectangleArea(width, height));
    } catch (error) {
        alert( error);   
    }

    // function calcRectangleArea(width, height){
    //     const S = width * height;
    //     document.write(S);  
    // }
    // try {
    //     calcRectangleArea(4, fdsf);
    // } catch (error) {
    //     alert( 'The value is not correct !');   
    // }


/* Task 2 */

    function checkAge() {
        let age = prompt('Введіть свій вік');
    
        if (age == '') {
            throw new Error('The field is empty! Please enter your age');
        } 

        age = +age;

        if(age < 14){
            throw new Error('You are very young ');
        }
        if(isNaN(age)) {
            throw new Error('Non-numeric value entered ');
        }

        alert('Перегляд фільму');  
    }

        try {
            checkAge();   
        } catch (err) {
        alert(err.name + ' : ' + err.message);
        } 

/* Task 3 */
 
    class MonthException{
        constructor(message){
            this.message = message;
            this.name = 'MonthException'; 
        }
    }

    function showMonthName(month) {
        month = month - 1; 
        const months = ["January","February","Marth","April","May","June","Jule",
                        "August","September","Octoctober","November","December"];
        if (months[month]) {
            return months[month];
        } else {
            throw new MonthException( 'Incorrect month number'); 
        }
    }
  
    try { 
        console.log (showMonthName(14));
    }
    catch (e) {
        console.log( e.name + ' ' + e.message);
    }

    /* task 4 */

        function ShowUsers(ids){
            let myArr = [];
            for(let i = 0; i < ids.length; i++){
                id = ids[i];
                function ShowUser(id){
                        if (id <= 0) {
                            throw new Error  (`ID must not be negative: ${id} `);
                        } else {
                            return ({id: id});
                        }
                    }
            try {    
                ShowUser(id);  
           }
           catch (e) {
               alert( e.name + ' ' + e.message);
            } finally {
                if (ids[i] > 0){
                    myArr.push({id: ids[i]});   
                }
            }
            }
            console.log(myArr);
        }

        ShowUsers([7, -12, 44, 22]); 

        
         
     
        
       
            
        // if(ids[i] > 0){
        //     myArr.push({id: ids[i]})
        // }   
       
    //     function ShowUsers(ids){

    //         for(let i = 0; i < ids.length; i++){
    //             let id = ids[i];
    //             console.log(id);
    //             function ShowUser(id){
    //                 if (id < 0) {
    //                     throw new Error  (`ID must not be negative: ${id} `);
    //                 } else{
    //                     return {id: id};
    //                 }  
    //             }
    //              let el = ShowUser(id);
    //              console.log(el);
                
    //                 if(ids[i] > 0){
    //                      myArr = myArr.push(el);
    //                 }
    //                  console.log[myArr];
    //                 // return myArr;
    //         }
    //     }

    //     try {    
    //         ShowUsers([7, -12, 44, 22]);  
    //    }
    //    catch (e) {
    //        console.log( e.name + ' ' + e.message);
    //     } 
  