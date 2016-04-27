'use strict';
angular.module('angularApp', [])

.controller('ContactController', ['$scope', function($scope) {
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                        var channels = [{value:"Tel.", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                                }])

.controller('FeedbackController', ['$scope', function($scope) {
            $scope.sendFeedback = function() {
                    console.log($scope.feedback);
                    if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                                $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])
                                    
                                    
                                
.controller('angularController', ['$scope', function($scope) {
    
    $scope.tab = 1;
    
    $scope.filtText = '';
    
    var cars=[
                 {
                    color1: 'white',
                    color2: 'navy',
                    name: "Ford Explorer",
                    category: "SUV",
                    price: 35000,
                    description: "Family sized SUV, great in all weathers and terrains!"
                },
                {
                    color1: 'white',
                    color2: 'black',
                    name: "Cadillac Escalade",
                    category: "SUV",
                    price: 70000,
                    description: "Luxurious, status symbol, that will impress."
                },
                {
                    color1: 'blue',
                    color2: 'red',
                    name: "Ford F-150",
                    category: "Truck",
                    price: 55000,
                    description: "Rugged, reliable, and stylish."
                },
                {
                    color1: 'black',
                    color2: 'red',
                    name: "Dodge Ram",
                    category: "Truck",
                    price: 50000,
                    description: "Most towing capacity in class while retaining comfort."
                },
                {
                    color1: 'beige',
                    color2: 'black',
                    name: "Honda Accord",
                    category: "Car",
                    price: 18000,
                    description: "Efficient and cost-effective, a true family sedan."
                },
                {
                    color1: 'silver',
                    color2: '#33cc33',
                    name: "Toyota Prius",
                    category: "Car",
                    price: 33000,
                    description: "Electrifying, enviromentally friendly, and top of class mpg."
                }
                ]; 
    
     $scope.cars = cars;

     $scope.select = function(setTab) {
        $scope.tab = setTab;
        if (setTab === 2) {
            $scope.filtText = "SUV";
        }
        else if (setTab === 3) {
            $scope.filtText = "Truck";
        }
        else if (setTab === 4) {
            $scope.filtText = "Car";
        }
        else {
            $scope.filtText = "";
        }
    };
    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };
    
    $scope.showDetails = false;

    $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
    
    
    
    
}]);