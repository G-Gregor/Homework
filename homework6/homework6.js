/* Task1 */
    const btn = document.querySelectorAll('button');
    const text = document.getElementById('test');
    // const text = document.querySelector('#test');
    // const text = document.getElementsByTagName('div');
    btn[0].addEventListener('click', function(){
        text.textContent = 'Last';
        //  text[0].textContent = 'Last'; // getElementsByTagName
    });
/* Task2 */

    const img = document.getElementsByClassName('image');
    btn[1].addEventListener('click', function(){
        img[0].src = 'img/cat.jpg';
        alert(img[0].getAttribute('src'));
    });

/* Task 3 */

    const textBlock = document.getElementById('text'),
    paragraph  = textBlock.querySelectorAll('p');
        btn[2].addEventListener('click', function(){    
        for(let i = 0; i < paragraph.length; i++){
            let indent  = paragraph[i].textContent;
            paragraph[i].innerHTML = `Selector text ${[i]} : ${indent}`;
    }
    });

/* Task 4 */

    const listBlock = document.getElementById('list'),
        item  = listBlock.querySelectorAll('li');

    btn[3].addEventListener('click', function(){      
        alert(`${item[0].innerHTML}, ${item[4].innerHTML}, ${item[1].innerHTML}, ${item[3].innerHTML}, ${item[2].innerHTML}`);     
    });

// Другий спосіб
    btn[4].addEventListener('click', function(){ 
        const el1 = listBlock.firstElementChild ,
        el2 = el1.nextElementSibling,
        el5 = listBlock.lastElementChild,
        el4 = el5.previousElementSibling,
        el3 = el2.nextElementSibling;
    
        alert(`${el1.textContent}, ${el5.textContent}, ${el2.textContent}, ${el4.textContent}, ${el3.textContent}`);
});

/* Task 5 */

const title = document.querySelector('h1');
const myBlock = document.querySelector('#myDiv'),
      parag = myBlock.querySelectorAll('p');
const myList = document.querySelector('#myList'),
      myItem = myList.querySelectorAll('li'),
      mySpan = myList.nextElementSibling;

    btn[5].addEventListener('click', function(){      
        title.style.backgroundColor = '#22f668'; 
        title.style.width = '300px';

        parag[0].style.fontWeight = '900';
        parag[1].style.color = 'red';  
        parag[2].style.textDecoration = 'underline';
        parag[3].style.fontStyle = 'italic'; 

        myList.innerHTML = ` ${myItem[0].textContent}${myItem[1].textContent}${myItem[2].textContent}`;
        mySpan.remove();
});

/* Task 6 */

    btn[7].addEventListener('click', function(){
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');

    let textInput1 = prompt('Введіть текст1');
    if (textInput1 !== "") {
        input1.value = textInput1;
    } else {
        alert('Введіть  значення')
    }

    let textInput2 = prompt('Введіть текст2');
    if (textInput2 !== "") {
        input2.value = textInput2;
        
    } else {
        alert('Введіть  значення')
    }

    btn[6].addEventListener('click', function( ){
        input1.value = textInput2;
        input2.value = textInput1;
    });
    });