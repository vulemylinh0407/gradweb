function navToggle(toggleClass) {
	let toggle = document.querySelector(toggleClass)
	toggle.addEventListener('click', () => {
		document.body.classList.toggle('nav-open')
	})
}

navToggle('.toggle')

$( ".logo-bg" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(45deg)");
    } else {
        $(this).css("transform","" );
    }
});
