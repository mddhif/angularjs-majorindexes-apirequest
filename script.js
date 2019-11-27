function indexController($scope, $http) {

   var apiUrl = "https://financialmodelingprep.com//api/v3/majors-indexes";

            $http.get(apiUrl).then( function(res) {
               $scope.indexes = res.data.majorIndexesList;
            });

}
