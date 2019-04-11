<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
        <title>Registrar Tipo Encomienda</title>
         <script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/validarRegistrarSobre.js" type="text/javascript"></script>
        <link href="css/stylesTE.css" rel="stylesheet" type="text/css"/>
      
    </head>
    <body>
<div class="container">
    <input type="hidden" value="<%= sesion.getAttribute("idEncomienda") %>">
    <input type="hidden" value="<%= sesion.getAttribute("nivel") %>">
    <h1 class="well">Registrar Sobre</h1>
	<div class="col-lg-12 well">
	<div class="row">                        
            <form method="POST" action="SERVTipoEncomienda" autocomplete="off">
                <div class="col-sm-12">
                    <div class="row">
                        <input type="hidden" name="txtidEncomienda"  value="<%= sesion.getAttribute("idEncomienda") %>">
                        
                            <div class="col-sm-4 form-group">
                                    <label>Cantidad</label>
                                    <input type="text" class="form-control" name="txtCantidad" id="cantidadSobres">
                            </div>
                        
                            <div class="col-sm-4 form-group">
                                    <label>Peso por Sobre (kg)</label>
                                    <input type="text"  class="form-control" name="txtPeso" id="peso"> 
                            </div>
                        
                            <div class="col-sm-4 form-group">
                                    <label>Precio</label>
                                    <input type="text"  class="form-control" readonly="" name="txtPrecio"  id="precio" value="10"> 
                            </div>
                    </div>                    
                    <div class="row">
                        <div class="col-sm-4 form-group">
                            <input type="submit" class="form-control btn btn-info  btn-responsive" id="registrar" name="btnAceptarSobre" value="Aceptar" onclick="return confirm('¿Seguro que desea registrar?')" >		                
                        </div>
                        
                        <div class="col-sm-4 form-group">
                            <input type="reset" class="form-control btn btn-warning  btn-responsive" id="limpiar" name="btnLimpiar" value="Limpiar" onclick="return confirm('¿Seguro que desea limpiar todos los campos?')">		                
                        </div>
                        
                        <div class="col-sm-4 form-group">
                            <a class="form-control btn btn-danger  btn-responsive" href="SERVTipoEncomienda?action=refresh2&idEncomienda=<c:out value="<%= sesion.getAttribute("idEncomienda") %>"/>" onclick="return confirm('¿Seguro que desea salir del registro?')" > Regresar</a>
                        </div>

                    </div>                     
            </div>
            </form> 
        </div>
	</div>
	</div>
    </body>
</html>
