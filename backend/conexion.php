<?php
session_start();

class Conexion extends PDO {
	
	private $tipo_de_base = "mysql";
	private $host = "localhost";
	private $nombre_de_base = "u769767837_demo";
	private $usuario = "u769767837_demo";	
	private $contrasena = "demo2017";
	private $port = "3306";
	
	public function __construct() {
		try{
			
			parent::__construct($this->tipo_de_base.":host=".$this->host.";port=".$this->port.";dbname=".$this->nombre_de_base, $this->usuario, $this->contrasena);
			
		}
		catch(PDOException $e){
			
			echo "Ha surgido un error y no se puede conectar a la base de datos. Detalle: " . $e->getMessage();
			
			exit;
			
		}
		
	}
	
}

