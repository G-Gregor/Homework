/* Task 1 */

    let x = 1;
    let y = 2;

    let res1 = String(x) + y; // Допишіть код, необхідно використовувати змінні x і y

    console.log(res1); // "12"
    console.log(typeof res1); // "string"

    let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y

    console.log(res2); // "true2"
    console.log(typeof res2); // "string"

    let res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y

    console.log(res3); // true
    console.log(typeof res3); // "boolean"

    let res4 = Number('x') / y;// Допишіть код, необхідно використовувати змінні x і y

    console.log(res4); // NaN
    console.log(typeof res4); // "number"


/* Task 2 */

    let num = prompt('Введіть число');

    // a

        let intNum = Number.isInteger(num / 2);
        
            if (num > 0 && intNum == true) { 

                console.log('Число парне та додатнє!');

            } else {

                console.log('Ви не пройшли перевірку!');

            }

    // b

        let sevNum = Number.isInteger(num / 7);

        if (sevNum == true) { 

            console.log('Число кратне 7!');

        } else {

            console.log('Число не кратне 7!');

        }
      
/* Task 3 */

    const arr = [];

    // 1)

        arr.unshift(1);
     
    // 2)

        arr[1] = 'element';

    // 3)

        arr[2] = true;

    // 4)

        arr.push(null);

    // 5)

        alert(arr.length);

    // 6)

        arr.push(prompt("Введіть  своє ім'я", 'Hrihorii'));

    // 7)

        alert(arr[4]);

    // 8)

        arr.shift();

        alert(arr);


/* Task 4 */

    let cities = ["Rome", "Lviv", "Warsaw"]; 
    let str = String(cities);

    console.log(str.replace(/,/g, '*'));


/* Task 5 */

    let isAdult = prompt('Ваш вік?', 18);

    if (isAdult >= 18){

        alert('Ви досягли повнолітнього віку'); 

    } else {

        alert('Ви ще надто молоді');

    }


/* Task 6 */

    // a

        let side1 = prompt('Довжина першої сторони', 3);
        let a = (parseFloat(side1));
        
        if (isNaN(a) && a > 0) {

            alert('Incorrect data');

        }


        let side2 = prompt('Довжина другої сторони', 4);
        let b = (parseFloat(side2));

        if (isNaN(b) && b > 0) {

            alert('Incorrect data');

        }

        let side3 = prompt('Довжина третьої сторони', 5);
        let c = (parseFloat(side3));

        if (isNaN(c) && c > 0) {

            alert('Incorrect data');

        }
        
        let p = (a + b + c) / 2 
        let s = (p * (p - a) * (p - b) * (p - c)) ** (1/2);

        console.log(s.toFixed(3));
 
    // b

        let area1 = 1/2 * a * b;
        let area2 = 1/2 * a * c;
        let area3 = 1/2 * c * b;

        let S1 = area1.toFixed(3); 
        let S2 = area2.toFixed(3);
        let S3 = area3.toFixed(3);

        if (s == S1 || s == S2 || s == S3){

            console.log('Прямокутний трикутник');

        } else {

            console.log('Це не прямокутний трикутник');

        }
    

/* Task 7 */

    
    let todayDay = new Date();
    let currentTime = todayDay.toLocaleTimeString();
    let time = parseInt(currentTime);
    
    // 1-ий Варіант

        if ( 23 < time && time < 5 || time == 0){   

            alert(`${currentTime};  Доброї ночі!`);

        } else if (5 < time && time < 11 ) {

            alert(`${currentTime};   Доброго ранку!`);

        } else if (11 < time && time < 17 ){

            alert(`${currentTime};   Доброго дня!`);

        } else if (17 < time && time < 23 ){

            alert(`${currentTime};  Доброго вечора!`);

        }


     // 2-ий Варіант

        // let intervalsTime1 = time > 23 && time < 5 || time == 0;
        // let intervalsTime2 = time < 5 < time && time < 11;
        // let intervalsTime3 = 11 < time && time < 17;
        // let intervalsTime4 = time > 17 && time < 23;

        // let booleanTime = !!time;
        
        // switch(booleanTime) {

        //     case  intervalsTime2 :

        //         alert(`${currentTime};   Доброго ранку!`);

        //             break;

        //     case  intervalsTime3 :

        //         alert(`${currentTime};   Доброго дня!`);

        //             break;

        //     case  intervalsTime4 :

        //         alert(`${currentTime};  Доброго вечора!`);

        //             break;

        //     case  intervalsTime1 :

        //         alert(`${currentTime};  Доброї ночі!`);

        //             break;
        // }