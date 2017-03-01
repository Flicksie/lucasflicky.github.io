function Tracker(a, b, c, d, e, f, g, h) {
    this.isPreparation = a;
    this.isProduction = b;
    this.isApproval = c;
    this.payment = [
         one = d
        , two = e
        , three = f
    ]
};
var A72899 = new Tracker(2, 1, 0, 2, 0, 0)

function verbose(input) {
    this.pay=[]
    switch (input.isPreparation) {
    case 1:
        this.prep = "Em Etapa Inicial";
        break;
    case 2:
        this.prep = "Etapa Inicial concluída";
        break;
    default:
        this.prep = "Etapa Inicial";
        break;
    }
    switch (input.isProduction) {
    case 1:
        this.prod = "Em produção";
        break;
    case 2:
        this.prod = "Produção Finalizada";
        break;
    case 3:
        this.prod = "Em nova produção";
        break;
    default:
        this.prod = "Etapa de Produção";
        break;
    }
    switch (input.isApproval) {
    case 1:
        this.appr = "Aguardando aprovação";
        break;
    case 2:
        this.appr = "Aprovação OK";
        break;
    case 3:
        this.appr = "Requer revisões";
        break;
    default:
        this.appr = "Etapa de Aprovação";
        break;
    }
    for (i in input.payment) {
        switch (input.payment[i]) {
        case 1:
            this.pay[i] = "Pagamento pendente";
            break;
        case 2:
            this.pay[i] = "Pagamento recebido";
            break;
        case 3:
            this.pay[i] = "Período de pagamento expirado";
            break;
        default:
            this.pay[i] = "Pagamento";
            break;
        }
    }
}


var test = new verbose(A72899)

//-----------------ABOUT TOOLTIPS-----------------//

$('.hoverer').on('mouseover', function (e) {
	var alpha = this.id;
console.log(alpha)
          $('#textbal').html(eval('test.'+alpha)) ;


});

$('.hoverer').on('mouseout', function (e) {
	var alpha = this.id;

         $('#textbal').html('') ;

});
