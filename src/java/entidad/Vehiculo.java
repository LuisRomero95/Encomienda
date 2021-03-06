
package entidad;

public class Vehiculo {
    
    private int id;
    private String placa;   
    private double volumen;
    private double capacidad;
    private double actualvolumen;
    private double actualcapacidad;   
    private int idConductor;
    private int idAyudante;
    
    public Vehiculo() {
    }
/*
    public Vehiculo(int id, String placa, double capacidad, int idencomienda) {
        this.id = id;
        this.placa = placa;
        this.capacidad = capacidad;
        this.idencomienda = idencomienda;
    }
*/
    public Vehiculo(int id, String placa, double volumen, double capacidad) {
        this.id = id;
        this.placa = placa;
        this.volumen = volumen;
        this.capacidad = capacidad;
    }

    public Vehiculo(int id, String placa, double volumen, double capacidad, double actualvolumen, double actualcapacidad) {
        this.id = id;
        this.placa = placa;
        this.volumen = volumen;
        this.capacidad = capacidad;
        this.actualvolumen = actualvolumen;
        this.actualcapacidad = actualcapacidad;
    }

    public Vehiculo(int id, String placa, double volumen, double capacidad, int idConductor, int idAyudante ) {
        this.id = id;
        this.placa = placa;
        this.volumen = volumen;
        this.capacidad = capacidad;        
        this.idConductor = idConductor;
        this.idAyudante = idAyudante;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }  

    public double getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(double capacidad) {
        this.capacidad = capacidad;
    }

    public double getVolumen() {
        return volumen;
    }

    public void setVolumen(double volumen) {
        this.volumen = volumen;
    }

    public double getActualvolumen() {
        return actualvolumen;
    }

    public void setActualvolumen(double actualvolumen) {
        this.actualvolumen = actualvolumen;
    }

    public double getActualcapacidad() {
        return actualcapacidad;
    }

    public void setActualcapacidad(double actualcapacidad) {
        this.actualcapacidad = actualcapacidad;
    }

    public int getIdConductor() {
        return idConductor;
    }

    public void setIdConductor(int idConductor) {
        this.idConductor = idConductor;
    }

    public int getIdAyudante() {
        return idAyudante;
    }

    public void setIdAyudante(int idAyudante) {
        this.idAyudante = idAyudante;
    }
    
    
}
