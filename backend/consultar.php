<?php

require "conexion.php";

$conexion = new Conexion();


extract($_REQUEST);

$sql = "SELECT
bodega.id_bodega,
proveedor.nombre AS proveedor,
producto.nombre AS producto,
bodega.cantidad,
bodega.id_proveedor,
bodega.id_producto
FROM
bodega
INNER JOIN producto ON bodega.id_producto = producto.id_producto
INNER JOIN proveedor ON bodega.id_proveedor = proveedor.id_proveedor
ORDER BY bodega.id_bodega DESC
";

$query = $conexion->query($sql);

$results = $query->fetchAll(PDO::FETCH_ASSOC);

print json_encode($results);