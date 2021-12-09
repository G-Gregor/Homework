/* Task 1 */

      const arr = [2, 3, 4, 5];
      let val = 1;

      // a

      for(let i= 0; i < arr.length; i++ ){

            val *= arr[i];    

      }

      console.log(val);

      // b

      let i =0;
      let val1 = 1;

      while(i < arr.length){

            val1 *= arr[i];
            i++;   

      }

      console.log(val1);

/* Task 2 */

      for(i = 0; i <= 15; i++){

            if (i % 2 == 0 || i == 0){

                  document.write(i + ' ' + 'is even' + '<br>'); 

            } else {

                  document.write(i + ' ' + 'is odd' + '<br>');

            }
      }

// /* Task 3 */

      function randArray(k) {  

            let arr = [];

            function getRandom() {

                  return  Math.floor(Math.random() * (500 - 1)  + 1);  

            }

            for(let i = 0; i < k; i++) {

                  arr.push(getRandom());

            } 

            console.log(arr);
            
      }

      randArray(5);

/* Task 4 */

      let num1 = prompt('Введіть число a'); 
      let a = parseFloat(num1);

      if (Number.isInteger(a) === false) {

            alert('Ви ввели не коректні данні!');

      }

      let num2 = prompt('Введіть число b');
      let b = parseFloat(num2);

      if ( Number.isInteger(a) === false) {

            alert('Ви ввели не коректні данні!');

      }

      function raiseToDegree(a, b) {

            return a ** b;       
      }

      let pow = raiseToDegree(a, b);

      console.log(pow);

/* Task 5 */

      function findMin() {

            let args = Array.from(arguments);
            let minArgs = args[0];

            for(let i = 0; i < arguments.length; i++){
                  
                  if (args[i] < minArgs){

                        minArgs = args[i];
                  }

            }

            //  console.log(args);
            console.log(minArgs);
      }

      findMin(12, 14, 4, -4, 0.2);

/* Task 6 */

      function findUnique(arr) {

            for (let i = 0; i < arr.length ; i++){

                  for ( let j = 0; j < i ; j++){

                        if (arr[i] === arr[j] ){
                 
                              return false;
                 
                        } 
                  }          
            }  

            return true;  

      }

      let res1 = findUnique([1, 2, 3, 7, 3]); 
      let res2 = findUnique([1, 2, 3, 5, 11]);

      console.log (res1);
      console.log (res2);

/* Task 7 */

      function lastElem (arr, a) { 

            if (a === undefined) {

                  return arr.pop();
            }

            return arr.slice(arr.length - a);
      } 

      console.log(lastElem([3, 4, 10, -5]));
      console.log(lastElem([3, 4, 10, -5],2));
      console.log(lastElem([3, 4, 10, -5],8));   

/* Task 8 */

      function getString(str){

      let strAray = str.split(" "); 
      let words = [];

      for(let i = 0; i < strAray.length; i++){

            words[i] = strAray[i][0].toUpperCase() + strAray[i].slice(1);

      }

            return String(words).replace(/,/g, ' ');

      }

      console.log (getString('i love java script' ));