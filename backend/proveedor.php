<?php

require "conexion.php";

$conexion = new Conexion();


extract($_REQUEST);

$sql = "SELECT * FROM proveedor";

$query = $conexion->query($sql);

$results = $query->fetchAll(PDO::FETCH_ASSOC);

print json_encode($results);