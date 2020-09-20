var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('angularJogos', function ($scope, $http) {

   // $scope.mintemp = 0;
    $scope.carregajogos = function (){

        $http.post(
            '../src/carregajogos.rest.php',
    
        ).then(
            function (response) {
                $scope.carregajogos = response.data;
                //console.log($scope.carregajogos); 
                       

            }).catch(function (err) {

            }).finally(function () {
               
            });

    }
       $scope.carregajogos();

        $scope.cadastrojogos = function (){

            var placar = $scope.placar;
            var mintemp = $scope.mintemp;
            var maxtemp = $scope.maxtemp;
            var recordemin = $scope.recordemin;
            var recordemax = $scope.recordemax;
            var partida = $scope.partida;
     
            var dados = {placar,mintemp,maxtemp,recordemin,recordemax,partida};
             //console.log(dados);
             
             $scope.loading = true;

             if( placar != null && mintemp != null  && maxtemp != null && recordemin != null && recordemax != null && partida != null){
             $http.post(
                 '../src/cadastrojogos.rest.php',dados
         
             ).then(
                 function (response) {
                     $scope.cadastrojogos = response.data;
                     //console.log($scope.clientes);

                    

                     bootbox.alert('<font color= "green"><i class="fa fa-check" aria-hidden="true"></i>  Salvo com sucesso!! ');
                     window.setTimeout(function () {
                         bootbox.hideAll();
                         window.location = 'index.html';
                         $scope.carregajogos();
                     }, 2000);
 
      
                 }).catch(function (err) {
 
                 }).finally(function () {
                     $scope.loading = false;
                 });

                } else {

                    bootbox.alert('<font color= "red"><i class="fa fa-bug" aria-hidden="true"></i> Rever campos obrigatórios!! ');
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 2000);
            
                }
         }
  
         $scope.TotalTemporada = function () {

            $http.post(
                '../src/TotalTemporada.rest.php',
            ).then(
                function (response) {
                    $scope.TotalTemporada = response.data;
                    //console.log($scope.TotalTemporada.mintemp);

                    var grupo = $scope.TotalTemporada ;
                    for (var g in grupo) {
                        var resultado = grupo[g];
                        $scope.mintempt = resultado.mintemp;
                        $scope.maxtempt = resultado.maxtemp;
                        $scope.recordemint = resultado.recordemin;
                        $scope.recordemaxt = resultado.recordemax;
                        $scope.TotalJogost = resultado.TotalJogos;
                        $scope.placart = resultado.placar;
                    }


                }).catch(function (err) {
    
                }).finally(function () {
    
                });
        }
        $scope.TotalTemporada();


    });
