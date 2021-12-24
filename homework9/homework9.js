/* Task 1 */
$('a[href^=https]').attr('target', '_blank');

/* Task 2 */

$('h2.head').css('background', 'green');
$('.inner').css('font-size', '35px');

/* Task 3 */

$('div:contains("text1")').insertBefore('h3:contains("header1")');
$('div:contains("text2")').insertBefore('h3:contains("header2")');

/* Task 4 */

$('input:checkbox').on('click', function(){
    let check = $('input:checkbox:checked').length;
    console.log(check);
    if(check < 3){
        $( 'input:checkbox' ).prop( 'disabled', false );
    } else {
        $( 'input:checkbox' ).prop( 'disabled', true );
    }
});

