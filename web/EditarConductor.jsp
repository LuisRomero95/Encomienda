
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page session="true"%>
<%
HttpSession sesion = request.getSession();
    if(sesion.getAttribute("usuario")==null){
        response.sendRedirect("index.jsp");
    }
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Conductor</title>
        <jsp:include page="navbar.jsp"/>
        <script src="js/validarEditarConductor.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="container">
        <form class="form-horizontal" method="POST" action="SERVConductor" autocomplete="off">
        <fieldset>

        <!-- Form Name -->
        <legend>Editar de Conductor</legend>
        
        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="id">ID</label>  
          <div class="col-md-4">
              <input id="id" name="txtId" type="text" placeholder="Id" readonly="" class="form-control input-md" value="<c:out value="${conductor.id}" />" > 
          </div>
        </div>        

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="dni">DNI</label>  
          <div class="col-md-4">
          <input id="dni" name="txtDni" type="text" placeholder="Dni" class="form-control input-md" value="<c:out value="${conductor.dni}" />" > 
          <input id="dniOriginal" name="txtDniOrginal" type="hidden" value="<c:out value="${conductor.dni}" />" > 
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="nombre">Nombre</label>  
          <div class="col-md-4">
          <input id="nombre" name="txtNombre" type="text" placeholder="Nombre" class="form-control input-md" value="<c:out value="${conductor.nom}" />" > 
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="apellido">Apellido</label>  
          <div class="col-md-4">
          <input id="apellido" name="txtApellido" type="text" placeholder="Apellido" class="form-control input-md" value="<c:out value="${conductor.ape}" />" > 
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="licencia">Licencia</label>  
            <div class="col-md-4">
                <input id="licencia" name="txtLicencia" type="text" placeholder="Licencia" class="form-control input-md" value="<c:out value="${conductor.lic}" />" > 
                <input id="licenciaOriginal" name="txtLicenciaOriginal" type="hidden" value="<c:out value="${conductor.lic}" />" >
            </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="email">Email</label>  
            <div class="col-md-4">
                <input id="email" name="txtEmail" type="text" placeholder="Email" class="form-control input-md"  value="<c:out value="${conductor.email}" />" > 
                <input id="emailOriginal" name="txtEmailOriginal" type="hidden"  value="<c:out value="${conductor.email}" />" > 
            </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="telefono">Teléfono</label>  
          <div class="col-md-4">
          <input id="telefono" name="txtTelefono" type="text" placeholder="Teléfono" class="form-control input-md"  value="<c:out value="${conductor.tel}" />" > 
          </div>
        </div>    

        <!-- Button (Double) -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="registrar">Botones</label>
          <div class="col-md-4">
            <input type="submit" id="editar" name="btnEditar" class="btn-success form-control" value="Editar">
            <br>
            <input type="reset" id="limpiar" name="btnLimpiar" class="btn-warning form-control" value="Limpiar">
            <br>
            <a class="btn-danger form-control" href="SERVConductor?action=refresh" id="regresar">
                <div align="center">  Regresar</div>
            </a>            
          </div>
        </div>

        </fieldset>
        </form>            
        </div>
    </body>
</html>
