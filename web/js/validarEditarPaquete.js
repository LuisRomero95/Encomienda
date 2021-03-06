/*
      $(function() {
        $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
            };
        $.datepicker.setDefaults($.datepicker.regional["es"]);
        $("#envio, #llegada").datepicker({ 
            numberOfMonths: 1, 
            showButtonPanel: true,
            minDate: 0

        });                                
    });      
*/      
   $(document).ready(function(){              

        $('#mensaje_error').hide(); 
/*
        $( function() {                   
        var availableTags = new Array();

        var availableTags = [
            "amazonas",
            "ancash",
            "apurimac",
            "arequipa",
            "ayacucho",
            "cajamarca",
            "callao",
            "lima"
        ];                   
          $( "#origen, #destino" ).autocomplete({
            source: availableTags,
            minLength: 1
          });
          
        $('#origen, #destino').change( function () {
            var origen = $('#origen').val();
            var destino = $('#destino').val();
                if( origen === destino){
                    alert('Origen y Destino deben ser diferentes');
                     $('#origen').val(null);
                     $('#destino').val(null);
                     $('#origen').css("border", "1px solid red");
                     $('#destino').css("border", "1px solid red");
                }
                if(origen !== destino){
                    $('#origen').css("border", "");
                    $('#destino').css("border", "");
                }
                if(!availableTags.includes(origen)){                    
                    $('#origen').val(null);
                }
                if(!availableTags.includes(destino)){
                    $('#destino').val(null);
                }

        });          
          
        } );                    
*/
/*        
    $('#origen, #destino').keyup( function () {
        $(this).val($(this).val().toLowerCase());
        if (!/^[a-záéíóúüñ]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^a-záéíóúüñ]+/ig,"");
        }
    });
*/
/*
    $("input[type=radio]").click(function(event){
        var valor = $(event.target).val();
        if(valor === "sobre"){
            $("#div1").show();
            $("#div2").hide();
            $("#altura").val(0);
            $("#anchura").val(0);
            $("#largo").val(0);
            $("#cantidadPaquetes").val(0);
            $("#pesoPaquete").val(0);
            $("#precioPaquete").val(0);
            $("#pesoVolumen").val('');
            $('#mensaje_error').hide();
        } else if (valor === "paquete") {
            $("#div1").hide();
            $("#cantidadSobres").val(0);
            $("#pesoSobre").val(0);
            $("#precioSobre").val(0);
            $("#div2").show();
        } else { 
            // Otra cosa
        }
    });    
    */
    $('#cantidadSobres, #largo,#altura,#anchura ').keyup(function () {
        this.value = this.value.replace(/[^0-9]/g,''); 
    });
    $('#cantidadPaquetes').keyup(function () {
        this.value = this.value.replace(/[^0-8]/g,''); 
    });    
    /*
    $('#cantidadSobres').change( function () {
        var ingreso = $("#cantidadSobres").val();
        var precio_unitario = 10;
        try{
            //Calculamos el número escrito:
             if(ingreso >20){
                   var ingreso = $("#cantidadSobres").val(0);
             }
             ingreso = (isNaN(parseFloat(ingreso)))? 0 : parseFloat(ingreso*precio_unitario);
             ingreso = parseFloat(ingreso).toFixed(2);

            $("#precioSobre").val(ingreso);
         }
        //Si se produce un error no hacemos nada
        catch(e) {}
      });    

*/

     $('#cantidadPaquetes, #largo, #altura, #anchura ,#pesoPaquete, #precioPaquete').change( function () {
        var cantidadPaquetes = $('#cantidadPaquetes').val();
        var largo = $('#largo').val();
        var altura = $('#altura').val();
        var anchura = $('#anchura').val();
        var pesoPaquete = $('#pesoPaquete').val();
        var volumen = $('#volumen').val();

        var costoPesoKilo = 0.20;
        
        var pesoVolumetrico = 0;
        var pesoPaquete_float = 0;
        var peso ;     
 
        try{
        //Calculamos el número escrito:
        if(cantidadPaquetes >25){
            cantidadPaquetes = $("#cantidadPaquetes").val(0);
        }
        
        if(altura < 10 || altura > 25){
           altura = $('#altura').val(0);
       
        }       
        if(anchura < 5 || anchura > 31){
           anchura = $('#anchura').val(0);
           
        }
        if(largo < 14 || largo > 75){
            largo =  $('#largo').val(0);          
            
        }


        var dimensiones = altura*anchura*largo;
        
        var volumen =  Math.round(parseFloat(dimensiones*parseInt(cantidadPaquetes)/1000000)*100)/100;
       
        if(volumen > 0.01){
            $('#volumen').val(volumen);
        }
        else if(volumen <= 0.01){
            $('#volumen').val(0.01);
        }
          var operacion =  Math.round(parseFloat(dimensiones/300)*100)/100;
     //   var operacion = parseFloat(dimensiones/300).toFixed(2);
        
       if(!isNaN(operacion) ){
           pesoVolumetrico = $('#pesoVolumen').val(operacion);
       }
       else {
           pesoVolumetrico = $('#pesoVolumen').val('Alto*Ancho*Largo');
       }
       
       console.log(pesoVolumetrico);
        
           
        pesoPaquete_float = parseFloat(pesoPaquete).toFixed(2);
        console.log(pesoPaquete_float); 
        if(pesoPaquete_float < 1.14 || pesoPaquete_float > 200){
           pesoPaquete_float = $('#pesoPaquete').val(0);           
        }
        if(pesoPaquete_float >= 1.14 || pesoPaquete_float <= 200){
            if (pesoPaquete % 1 !== 0){
                var pesoPaquete_split = pesoPaquete.split(".");
                var pesoPaquete_decimal = pesoPaquete_split[1];

                if(pesoPaquete_decimal.length > 2){
                    $('#pesoPaquete').val(0);
                }            
            }               
        }               
          peso = $('#pesoVolumen').val();
        
        
        console.log(peso);
        //console.log(pesoPaquete*parseFloat(costoPesoKilo).toFixed(2));
        
        var precio = Math.round(parseFloat(cantidadPaquetes*costoPesoKilo*peso))*100/100;
        if(precio < 10){
            precio = 10*cantidadPaquetes;
        }

         $("#precioPaquete").val(precio);
         
         if( parseFloat($("#precioPaquete").val()) > 0){
                 if (parseFloat( $('#pesoVolumen').val()) > parseFloat($('#pesoPaquete').val())){
                     alert('El peso volumen se usará en el precio');
                 }
                 else{
                     alert('El peso volumen NO se usará en el precio');
                 }
         }
        
        }
        //Si se produce un error no hacemos nada
        catch(e) {}

    });
      
       $('#pesoSobre, #pesoPaquete').change( function () {
            var pesoSobre = $('#pesoSobre').val();           
            var pesoPaquete = $('#pesoPaquete').val();
           
           // console.log(parseInt(pesoSobre));
            var pesoSobre_float = Math.round(parseFloat(pesoSobre)*100)/100;
         //   console.log(pesoSobre_float);
          //  var pesoPaquete_float = parseFloat(pesoPaquete).toFixed(2);
                
            if(pesoSobre_float < 0.01 || pesoSobre_float > 1.13){
                
                $('#pesoSobre').val(0);
            }
            if(pesoSobre_float >= 0.01 || pesoSobre_float <= 1.13){
                if(pesoSobre % 1 !== 0){
                    var pesoSobre_split = pesoSobre.split(".");
                    var pesoSobre_decimal = pesoSobre_split[1];
                    if(pesoSobre_decimal.length > 2){                    
                        $('#pesoSobre').val(0);
                    } 
                }
            }
            /*
            if(pesoPaquete_float < 1.13 || pesoPaquete_float > 200){
                $('#pesoPaquete').val(0);
            }    
            */
            console.log(pesoSobre);


            /*
            if(!(pesoPaquete % 1 === 0)){
                if(pesoPaquete.split(".") !== null || pesoPaquete !== 0){
                    var pesoPaquete_split = pesoPaquete.split(".");
                    var pesoPaquete_decimal = pesoPaquete_split[1];

                    if(pesoPaquete_decimal.length > 2){
                        $('#pesoPaquete').val(0);
                    }                    
                }    
          
            }
          */  
    /*         
        //console.log(decimal);        
        if(entero.length > 1){
              $('#pesoSobre').val(0);
        }
         entero = parseInt(entero);    
        if(entero > 1){
              $('#pesoSobre').val(0);
        }        
        //decimal string
        if(decimal.length > 2){
            $('#pesoSobre').val(0);
        }
        //decimal como numero     
        decimal = parseInt(decimal);        
        if(decimal > 13 && entero >=1){
            $('#pesoSobre').val(0);
        }
*/
/*
        regexp = /.{1}[0-9]{2}$/;
        regexp3 = /[a-zA-ZÑáéíóúüñ]$/;
        re = new RegExp(regexp);
        re3 = new RegExp(regexp3);
        if (!(pesoSobre.match(re)) || /\s+$/.test(pesoSobre)|| pesoSobre.match(re3 )){           
            $('#pesoSobre').val(0);        
        }  
  */           
        regexp2 = /.{1}[0-9]{2}$/;
       
 
        re2 = new RegExp(regexp2);
        if (!(pesoPaquete.match(re2)) || /\s+$/.test(pesoPaquete)){           
            $('#pesoPaquete').val(0);        
        }               
             
      }); 

    /* 
   $('#pesoPaquete, #altura, #anchura, #largo').change( function () {
        var placa = $('#pesoPaquete').val();           
        var x = placa.split(".");

        var entero = x[0];
        var decimal = x[1];
        console.log(parseInt(placa));

        console.log(parseFloat(placa).toFixed(2));
        if(parseFloat(placa).toFixed(2) < 0.01){
            $('#pesoSobre').val(0);
        }
        if(parseFloat(placa).toFixed(2) > 1.13){
            $('#pesoSobre').val(0);
        }  

        regexp = /.{1}[0-9]{2}$/;

        re = new RegExp(regexp);
        if (!(placa.match(re)) || /\s+$/.test(placa)){           
            $('#pesoSobre').val(0);        
        }              
  }); 
      
*/

/*
    $("#editarPaquete").click(function() {

        var origen = $('#origen').val();
        var destino = $('#destino').val();
        var envio = $("#envio").val();
        var llegada = $("#llegada").val();
        
        if( origen === null || origen.length === 0 || /^\s+$/.test(origen) ) {
              alert('[ERROR] El campo origen no puede quedar vacío');
              return false;              
        }   
        else if(!(origen.length <=30) || /^\s+$/.test(origen)){
            alert('[ERROR] El origen no puede exceder los 30 dígitos');
            return false; 
        }   
        else if( destino === null || destino.length === 0 || /^\s+$/.test(destino) ) {
              alert('[ERROR] El campo origen no puede quedar vacío');
              return false;              
        }   
        else if(!(destino.length <=30) || /^\s+$/.test(destino)){
            alert('[ERROR] El origen no puede exceder los 30 dígitos');
            return false; 
        }        
        else if( envio === null || envio.length === 0 || /^\s+$/.test(envio) ) {
              alert('[ERROR] El campo envio no puede quedar vacío');
              return false;              
        }   
        else if( llegada === null || llegada.length === 0 || /^\s+$/.test(llegada) ) {
              alert('[ERROR] El campo llegada no puede quedar vacío');
              return false;              
        }               

        //Split de las fechas recibidas para separarlas
        var x = envio.split("/");
        var z = llegada.split("/");

        //Cambiamos el orden al formato americano, de esto dd/mm/yyyy a esto mm/dd/yyyy
        envio = x[2] + "-" + x[1] + "-" + x[0];
        llegada = z[2] + "-" + z[1] + "-" + z[0];

        //Comparamos las fechas
        if (Date.parse(envio) > Date.parse(llegada)){
            alert("[ERROR] La fecha de envio no puede superar la fecha de llegada");
            return false;   
        }
   
        return true;
    });
       */
    
    $("#editarPaquete").click(function() {

        var origen = $('#origen').val();
        var destino = $('#destino').val();
        var opciones = document.getElementsByName("pago1"); 
        var cantidadSobre = $('#cantidadSobres').val();
        var pesoSobre = $('#pesoSobre').val();    
        var pesoSobre_decimal = $('#pesoSobre').val();
        var altura = $('#altura').val();
        var anchura = $('#anchura').val();
        var largo = $('#largo').val();
        var cantidadPaquete = $('#cantidadPaquetes').val();
        var pesoPaquete = $('#pesoPaquete').val();
                        
        if( origen === null || origen.length === 0 || /^\s+$/.test(origen) ) {
            alert('[Aviso] El origen no puede quedar vacío');
            $('#origen').css("border", "1px solid red");
            $("#origen").focus();
            return false;              
        }   
        else if(!(origen.length <=30) || /^\s+$/.test(origen)){
            alert('[Aviso] El origen no puede exceder los 30 dígitos');
            $('#origen').css("border", "1px solid red");
            $("#origen").focus();
            return false; 
        }   
        else if( destino === null || destino.length === 0 || /^\s+$/.test(destino) ) {
            alert('[Aviso] El destino no puede quedar vacío');
            $('#destino').css("border", "1px solid red");
            $("#destino").focus();
            return false;              
        }   
        else if(!(destino.length <=30) || /^\s+$/.test(destino)){
            alert('[Aviso] El destino no puede exceder los 30 dígitos');
            $('#destino').css("border", "1px solid red");
            $("#destino").focus();            
            return false; 
        }      
        
        if( altura === null || altura.length === 0 || /^\s+$/.test(altura) ) {
            alert('[Aviso] La altura no puede quedar vacío');
            $('#altura').css("border", "1px solid red");
            $("#altura").focus();   
            return false;              
        }
        else{
            $('#altura').css("border", "");
        }
        altura = parseFloat(altura).toFixed(2);
        if(altura < 0.01) {
            alert('[Aviso] La altura no puede ser cero');
            $('#altura').css("border", "1px solid red");
            $("#altura").focus();  
            return false;              
        }
        else{
            $('#altura').css("border", "");
        }                    
        if( anchura === null || anchura.length === 0 || /^\s+$/.test(anchura) ) {
            alert('[Aviso] La anchura no puede quedar vacío');
            $('#anchura').css("border", "1px solid red");
            $("#anchura").focus();                          
            return false;              
        }        
        else{
            $('#anchura').css("border", "");
        }                          
        anchura = parseFloat(anchura).toFixed(2);
        if(anchura < 0.01) {
            alert('[Aviso] La anchura no puede ser cero');
            $('#anchura').css("border", "1px solid red");
            $("#anchura").focus();                               
            return false;              
        }      
        else{
            $('#anchura').css("border", "");
        }                      
        if( largo === null || largo.length === 0 || /^\s+$/.test(largo) ) {
            alert('[Aviso] El largo no puede quedar vacío');
            $('#largo').css("border", "1px solid red");
            $("#largo").focus();                           
            return false;              
        }
        else{
            $('#largo').css("border", "");
        }                       
        largo = parseFloat(largo).toFixed(2);
        if(largo < 0.01) {
            alert('[Aviso] El largo no puede ser cero');
            $('#largo').css("border", "1px solid red");
            $("#largo").focus();                            
            return false;
        }
        else{
            $('#largo').css("border", "");
        }                      
        if( cantidadPaquete === null || cantidadPaquete.length === 0 || /^\s+$/.test(cantidadPaquete) ) {
            alert('[Aviso] La cantidad del paquete no puede quedar vacío');
            $('#cantidadPaquetes').css("border", "1px solid red");
            $("#cantidadPaquetes").focus();                         
            return false;              
        }           
        else{
            $('#cantidadPaquetes').css("border", "");
        }                     
        cantidadPaquete = parseInt(cantidadPaquete);       
        if(cantidadPaquete < 1) {
            alert('[Aviso] La cantidad del paquete no puede ser cero');
            $('#cantidadPaquetes').css("border", "1px solid red");
            $("#cantidadPaquetes").focus();                               
            return false;              
        } 
        else{
            $('#cantidadPaquetes').css("border", "");
        }  
        /*
        if( pesoPaquete === null || pesoPaquete.length === 0 || /^\s+$/.test(pesoPaquete) ) {
            alert('[Aviso] El peso del paquete no puede quedar vacío');
            $('#pesoPaquete').css("border", "1px solid red");
            $("#pesoPaquete").focus();                             
            return false;              
        }       
        else{
            $('#pesoPaquete').css("border", "");
        }                       
        pesoPaquete = parseFloat(pesoPaquete).toFixed(2);
        if(pesoPaquete < 0.01) {
            alert('[Aviso] El peso del paquete no puede ser cero');
            $('#pesoPaquete').css("border", "1px solid red");
            $("#pesoPaquete").focus();                               
            return false;              
        }
        else{
            $('#pesoPaquete').css("border", "");
        }                     
       */
      //  var pesonormal = Math.round( parseFloat($("#pesoPaquete").val())*100)/100;
        var pesovolumen = Math.round( parseFloat($("#pesoVolumen").val())*100)/100;
        var pesooriginal = Math.round( parseFloat($("#pesoPaqueteOriginal").val())*100)/100;
        var pesofinal = 0;
        
        var volumenoriginal = Math.round( parseFloat($("#volumenOriginal").val())*100)/100;
        var volumenactual = Math.round( parseFloat($("#volumen").val())*100)/100;
    /*    
        if( pesonormal > 0){
                 if ( pesovolumen > pesonormal){
                  pesofinal =Math.round( parseFloat($("#pesoVolumen").val())*100)/100;
                    
                 }
                 if ( pesovolumen < pesonormal){
                    pesofinal =  Math.round( parseFloat($("#precioPaquete").val())*100)/100;
                 }
        }    /*    
        else if(pesofinal > pesooriginal && volumenactual < volumenoriginal){              
              alert('El peso ha aumentado. Tendra que hacer otra encomienda');
              return false;
        }  */      
        if ( pesovolumen > pesooriginal){
            alert('El peso ha aumentado. Tendra que hacer otra encomienda');
            $('#pesoVolumen').css("border", "1px solid red");
            $("#pesoVolumen").focus();
              return false;

        }        
        else if(volumenactual > volumenoriginal ){
              alert('El volumen ha aumentado. Tendra que hacer otra encomienda');
              return false;
        }       
      
               /*
        if(pesofinal > pesooriginal || volumenactual > volumenoriginal){
            alert(' El peso o el volumen han aumentado. Tendrá que hacer otra encomienda');
            return false;
        }   
               */ 
       var answer = confirm('¿Seguro que desea editar?');
       if (answer)
        {
          console.log('yes');
          alert('Su encomienda ha sido editada con éxito');
          return true;
        }
        else
        {
          console.log('cancel');
          alert('Ha cancelado el registro');
          return false;
        }
       //  confirm('¿Seguro que desea registrar?');
      //  alert('Recibirá en su email los datos de su encomienda');
      //  return ;
      
    });        
    
    /*    
    $("#calcular").click(function() {
        var largo = 0;
        var altura = 0;
        var anchura = 0;
        
         
         altura = $('#altura').val();
         anchura = $('#anchura').val();   
         largo = $('#largo').val();
         var dimensiones = altura*anchura;

       $('#pesoVolumen').val(dimensiones);
       
       $('#pesoPaquete').val(dimensiones*largo);
    });        
        
    $("#limpiar").click(function() {
         return confirm('¿Seguro que desea limpiar todos los campos?');   
    });
    */
});    
