$(document).on('ready',function(){

	FuncionesEventos.noCopyPaste();
});



var FuncionesEventos = {
	noCopyPaste:function(){
				$('.noCopy').bind('copy paste',function(e){
						e.preventDefault();
				})
	}
}