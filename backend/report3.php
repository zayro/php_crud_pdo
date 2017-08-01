<?php

require "conexion.php";

$conexion = new Conexion();


extract($_REQUEST);

$sql = "SELECT
bodega.id_producto,
producto.nombre AS producto,
SUM(bodega.cantidad) as cantidad
FROM
bodega
INNER JOIN producto ON bodega.id_producto = producto.id_producto
INNER JOIN proveedor ON bodega.id_proveedor = proveedor.id_proveedor
GROUP BY id_producto
ORDER BY  bodega.cantidad DESC
";

$query = $conexion->query($sql);

$results = $query->fetchAll(PDO::FETCH_ASSOC);

print json_encode($results);