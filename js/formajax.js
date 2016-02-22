var form = document.getElementById('contform');

function sendSuccess(){
	location.hash = "";
			$('#shadows').fadeIn();
			resetPage('soft');
			allPassive();
			$('#thanks').fadeIn();
			setTimeout(function () {
				$('#thanks').fadeOut();
				$('#shadows').fadeOut('slow');
			}, 4000);
			$('#thanks').on('click', function (e) {
				$('#shadows').fadeOut('slow');
				$('#thanks').fadeOut();
			});
			$(".nav-1").addClass('ativo');
};

function sendFailure(){
			$('#oops').fadeIn();
			setTimeout(function () {
				$('#oops').fadeOut();
			}, 4000);
			$('#oops').on('click', function (e) {
				$('#oops').fadeOut();
			});
};





form.onsubmit = function(){
    var values = {};
    var formInputs = this.querySelectorAll("input");
    
    for(var i=0; i < formInputs.length; i++){
        values[formInputs[i].name] = formInputs[i].value;
    }

    var message = this.querySelector("textarea");
    values[message.name] = message.value;

    $.ajax({
        url: "//formspree.io/contato@lucasflicky.com",
        type: "POST",
        data: values,
        success:function(response){
            sendSuccess();
        },
		error:function(response){
			sendFailure();
        },
        dataType: "json"
    });
    return false;
}
