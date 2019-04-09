<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true"%>
<%
HttpSession sesion = request.getSession();
    if(sesion.getAttribute("nivel")==null){
        response.sendRedirect("index.jsp");
    }
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Listar Pedido</title>
         <script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
       
        <link href="css/stylesTE.css" rel="stylesheet" type="text/css"/>
      
    </head>
    <body>
<div class="container">
    <input type="text" value="<%= sesion.getAttribute("idEncomienda") %>">IdEncomienda
    <input type="text" value="<%= sesion.getAttribute("idCliente") %>">IdCliente
    <input type="text" value="<%= sesion.getAttribute("idVehiculo") %>">idVehiculo
    <h1 class="well">Registrar Sobre</h1>
	<div class="col-lg-12 well">
	<div class="row">
            <form method="POST" action="SERVPedido">
                <input type="text" name="txtidEncomienda"  value="<%= sesion.getAttribute("idEncomienda") %>">
                <div class="col-sm-12">
                    <div class="row">                                                
                            <div class="col-sm-4 form-group">
                                    <label>Codigo</label>
                                    <input type="text" class="form-control" name="txtCodigo" value="<%= sesion.getAttribute("idCliente") %>.<%= sesion.getAttribute("idEncomienda") %>.<%= sesion.getAttribute("idVehiculo") %>"> 
                                    
                                    <input type="text"  name="txtIdcliente" value="<%= sesion.getAttribute("idCliente") %>">
                            </div>                                           
                    </div> 
                            
                    <div class="row">
                        <div class="col-sm-3 form-group">
                            <input type="submit" class="form-control btn btn-info  btn-responsive" id="registrar" name="btnIngresar" value="Enviar a mi correo">		                
                        </div>     
                        
                        <div class="col-sm-3 form-group">
                        
                        </div> 
                    </div>                     
            </div>
            </form> 
        </div>
	</div>
	</div>
    </body>
</html>
