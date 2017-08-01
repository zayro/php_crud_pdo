<?php

require "conexion.php";

$conexion = new Conexion();


extract($_REQUEST);

$sql = "SELECT
bodega.id_proveedor as id,
proveedor.nombre AS proveedor,
COUNT(bodega.cantidad) as cantidad
FROM
bodega
INNER JOIN proveedor ON bodega.id_proveedor = proveedor.id_proveedor
GROUP BY bodega.id_proveedor";

$query = $conexion->query($sql);

$results = $query->fetchAll(PDO::FETCH_ASSOC);

print json_encode($results);