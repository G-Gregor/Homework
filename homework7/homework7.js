/* Task 1 */

    let newWindow = window.open('about:blank', 'Task1', 'width=300, height=300');
    newWindow.innerHTML = `<h2> Task1 </h2>`;
    let resTimeout = setTimeout(function() {
        newWindow.resizeTo(500, 500);
    }, 2000);

    let movTimeout = setTimeout(function() {
        newWindow.moveTo(200, 200);;
    },4000);

    let closeTimeout = setTimeout(function()  {
        newWindow.close();
    }, 6000);

/* Task 2 */

    const btn = document.querySelectorAll('button');
        const text = document.getElementById('txt');

        btn[0].addEventListener('click', function(){
            text.style.color = 'orange';  
            text.style.fontSize = '20';
            text.style.fontFamily = 'Comic Sans MS'; 
        });

/* Task 3 */

    btn[1].addEventListener('click', function(){
        document.body.style.backgroundColor = 'blue';   
    });

    btn[2].addEventListener('dblclick', function(){
        document.body.style.backgroundColor = 'pink';   
    });

    btn[3].addEventListener('mousedown', function(){
        document.body.style.backgroundColor = 'brown';   
    });
    btn[3].addEventListener(' mouseup', function(){
        document.body.style.backgroundColor = 'white';   
    });
    btn[3].addEventListener('click', function(){
        document.body.style.backgroundColor = 'white';   
    });

    document.querySelector('a').addEventListener('mouseover', function(){
        document.body.style.backgroundColor = 'yellow';
    });
    document.querySelector('a').addEventListener('mouseout', function(){
        document.body.style.backgroundColor = 'white';
    });

/* Task 4 */

    const myList = document.querySelector('select');
        btn[4].addEventListener('click', function(){
            myList.removeChild(myList.options[myList.selectedIndex]);   
        });   

    
/* Task 5 */

    btn[5].addEventListener('mouseenter', function(){
        btn[5].insertAdjacentHTML('afterend', '<p> Mouse on me! </p>');
    });

    btn[5].addEventListener('click', function(){
        btn[5].nextSibling.insertAdjacentHTML('afterend', '<p> I was pressed!! </p>');
    });
    btn[5].addEventListener('mouseout', function(){
        btn[5].nextSibling.nextSibling.insertAdjacentHTML('afterend', '<p> Mouse in not on me! </p>');
    });

/* Task 6 */

    function sizeScreen (){
        let height = window.innerHeight;
        let width = window.innerWidth;
        let text = document.querySelector('.text');

        text.innerText = (`Width: ${width}  Height: ${height}`);
    }

    sizeScreen ();
    window.addEventListener('resize', sizeScreen);

/* Task 7 */

    const newCountry = document.getElementById('country');
    let txt = document.querySelector('.name');
    let cities = document.getElementById('cities');

    let ukr = ['Kiev', 'Lviv', 'Odessa'];
    let ger = ['Berlin', 'Munich', 'Frankfurt'];
    let usa = ['New-York', 'Boston', 'Chikago'];

    function addOption()
	{ 
	   let country = newCountry.options.selectedIndex;
	 switch (country)
	  {
	  case 0:

	    for (let i = 0; i < ger.length; i++){
	       cities[i] = new Option(ger[i], i);
           
	    }

	    break;

	  case 1:

	    for (let j = 0; j < usa.length; j++){
	       cities[j] = new Option(usa[j], j);
	    }

	    break;

	    case 2:
	    
	    for (let k = 0; k < ukr.length; k++){
	       cities[k] = new Option(ukr[k], k);
	    }

	    break;
	 }
     nameCauntry();
 }

 newCountry.addEventListener('change', addOption);
 newCountry.addEventListener('change', nameCauntry);
  function nameCauntry(){
    let nameCaun = newCountry.options[newCountry.selectedIndex].text;

    let nameCity = cities.options[cities.selectedIndex].text;
    console.log(nameCity)
    txt.innerText = `${nameCaun}  ${nameCity}`;
}

cities.addEventListener('change', nameCauntry);


