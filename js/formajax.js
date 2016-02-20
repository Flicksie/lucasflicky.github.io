var form = document.getElementById('contform');

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
            location.hash = "/thanks";
        },
        dataType: "json"
    });
    return false;
}
