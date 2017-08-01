var app = angular.module('app', ['ngMaterial', 'md.data.table', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: './list.html',
            controller: 'controlador'
        })

    .when('/add', {
        templateUrl: './add.html',
        controller: 'crear'
    })

    .when('/report', {
            templateUrl: './reporte.html',
            controller: 'reporte'
        })
        .otherwise({ redirectTo: '/' })
});

app.controller('controlador', function($scope, $http, $mdDialog, $httpParamSerializerJQLike) {

    $scope.ordenar = "nombre";


    $scope.eliminar = function($id) {
        var r = confirm("desea eliminar el id: " + $id);
        if (r == true) {
            $scope.delete($id);
        }
    }

    $scope.delete = function($id) {
        $http({
            method: 'POST',
            url: './backend/eliminar.php',
            data: "id=" + $id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function successCallback(response) {
            $scope.fn_consultar();
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_consultar = function() {
        $http({
            method: 'POST',
            url: './backend/consultar.php'
        }).then(function successCallback(response) {
            $scope.consulta = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_consultar();

    $scope.fn_select_proovedor = function() {
        $http({
            method: 'POST',
            url: './backend/proveedor.php'
        }).then(function successCallback(response) {
            $scope.select_proveedor = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };


    $scope.fn_select_proovedor();

    $scope.dialog = function(ev, url, data) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: url,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                locals: {
                    items: data
                },
            })
            .then(function(answer) {
                console.log(answer);
                $scope.fn_consultar();
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };


    function DialogController($scope, $http, $mdDialog, items, $httpParamSerializerJQLike) {

        if (items == '') {
            $scope.DataForm = {};

        } else {
            $scope.DataForm = items;
        }


        $scope.fn_select_producto = function() {
            $http({
                method: 'POST',
                url: './backend/producto.php'
            }).then(function successCallback(response) {
                $scope.select_producto = response.data;
                console.log('datos de consulta', $scope.consulta);
            }, function errorCallback(response) {
                console.error(response);
            });
        };

        $scope.fn_select_producto();

        $scope.fn_select_proovedor = function() {
            $http({
                method: 'POST',
                url: './backend/proveedor.php'
            }).then(function successCallback(response) {
                $scope.select_proveedor = response.data;
                console.log('datos de consulta', $scope.consulta);
            }, function errorCallback(response) {
                console.error(response);
            });
        };


        $scope.fn_select_proovedor();

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };

        $scope.guardar = function(datos) {

            console.log('enviar datos:', datos);

            $http({
                method: 'POST',
                url: './backend/guardar.php',
                data: $httpParamSerializerJQLike(datos),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function successCallback(response) {
                console.info(response);
                $scope.answer(response);
            }, function errorCallback(response) {
                console.error(response);
            });
        };


        $scope.actualizar = function($datos) {

            console.info($datos);

            $http({
                method: 'POST',
                url: './backend/actualizar.php',
                data: $httpParamSerializerJQLike($datos),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function successCallback(response) {
                console.info(response);
                $scope.answer(response);
            }, function errorCallback(response) {
                console.error(response);
            });
        };


    }


});


app.controller('crear', function($scope, $http, $mdDialog, $httpParamSerializerJQLike) {

    $scope.DataForm = {};

    $scope.fn_select_producto = function() {
        $http({
            method: 'POST',
            url: './backend/producto.php'
        }).then(function successCallback(response) {
            $scope.select_producto = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_select_proovedor = function() {
        $http({
            method: 'POST',
            url: './backend/proveedor.php'
        }).then(function successCallback(response) {
            $scope.select_proveedor = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_select_producto();
    $scope.fn_select_proovedor();



    $scope.guardar = function(datos) {

        console.log('enviar datos:', datos);

        $http({
            method: 'POST',
            url: './backend/guardar.php',
            data: $httpParamSerializerJQLike(datos),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function successCallback(response) {
            alert('se almacenaron los registros');
            $scope.DataForm = {};
        }, function errorCallback(response) {
            console.error(response);
        });
    };



});

app.controller('reporte', function($scope, $http) {


    $scope.fn_reporte1 = function() {
        $http({
            method: 'POST',
            url: './backend/report1.php'
        }).then(function successCallback(response) {
            $scope.reporte1 = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_reporte1();


    $scope.fn_reporte2 = function() {
        $http({
            method: 'POST',
            url: './backend/report2.php'
        }).then(function successCallback(response) {
            $scope.reporte2 = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_reporte2();


    $scope.fn_reporte3 = function() {
        $http({
            method: 'POST',
            url: './backend/report3.php'
        }).then(function successCallback(response) {
            $scope.reporte3 = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_reporte3();

    $scope.fn_consultar = function() {
        $http({
            method: 'POST',
            url: './backend/consultar.php'
        }).then(function successCallback(response) {
            $scope.consulta = response.data;
            console.log('datos de consulta', $scope.consulta);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.fn_consultar();


});