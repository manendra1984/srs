var srsApp = angular.module('srsApp', []);
srsApp.directive('userName', function() {
    var NAME_REGEXP = /^[a-zA-Z ]*$/;
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.number = function(modelValue, viewValue) {
                return NAME_REGEXP.test(viewValue);
            };
        }
    };

});
srsApp.directive('noOfSeat', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(attr.ngMax, function() {
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var maxValidator = function(value) {
                var max = scope.$eval(attr.ngMax) || Infinity;
                if (!isEmpty(value) && value > max) {
                    ctrl.$setValidity('ngMax', false);
                    return undefined;
                } else {
                    ctrl.$setValidity('ngMax', true);
                    return value;
                }
            };

            ctrl.$parsers.push(maxValidator);
            ctrl.$formatters.push(maxValidator);
        }
    };

});
srsApp.controller('mainController', ['$scope', function($scope) {

    $scope.bookedSeat = [];
    $scope.ui = { alert: false };
    $scope.curr_book = {
        username: '',
        noOfSeats: 0,
        seats: []
    };
    $scope.username = '';
    $scope.noOfSeats;
    $scope.seatlayout = false;

    $scope.seatCount = 0;
    $scope.bookedBtn = false;
    $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    $scope.columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    $scope.inputSubmit = function() {
        $scope.seatlayout = true
        localStorage.setItem('seatlayout', true);
        $scope.curr_book.username = $scope.username;
        $scope.curr_book.noOfSeats = $scope.noOfSeats;

        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem('username', $scope.username);
            localStorage.setItem('noOfSeats', $scope.noOfSeats);
            localStorage.setItem('curr_book', JSON.stringify($scope.curr_book));
        }
        $scope.myFrm.$setPristine();
    }
    $scope.seats = [
        [{ id: 'A1', checked: 0, disable: 0 }, { id: 'A2', checked: 0, disable: 0 }, { id: 'A3', checked: 0, disable: 0 }, { id: 'A4', checked: 0, disable: 0 }, { id: 'A5', checked: 0, disable: 0 }, { id: 'A6', checked: 0, disable: 0 }, { id: 'A7', checked: 0, disable: 0 }, { id: 'A8', checked: 0, disable: 0 }, { id: 'A9', checked: 0, disable: 0 }, { id: 'A10', checked: 0, disable: 0 }, { id: 'A11', checked: 0, disable: 0 }, { id: 'A12', checked: 0, disable: 0 }],
        [{ id: 'B1', checked: 0, disable: 0 }, { id: 'B2', checked: 0, disable: 0 }, { id: 'B3', checked: 0, disable: 0 }, { id: 'B4', checked: 0, disable: 0 }, { id: 'B5', checked: 0, disable: 0 }, { id: 'B6', checked: 0, disable: 0 }, { id: 'B7', checked: 0, disable: 0 }, { id: 'B8', checked: 0, disable: 0 }, { id: 'B9', checked: 0, disable: 0 }, { id: 'B10', checked: 0, disable: 0 }, { id: 'B11', checked: 0, disable: 0 }, { id: 'B12', checked: 0, disable: 0 }],
        [{ id: 'C1', checked: 0, disable: 0 }, { id: 'C2', checked: 0, disable: 0 }, { id: 'C3', checked: 0, disable: 0 }, { id: 'C4', checked: 0, disable: 0 }, { id: 'C5', checked: 0, disable: 0 }, { id: 'C6', checked: 0, disable: 0 }, { id: 'C7', checked: 0, disable: 0 }, { id: 'C8', checked: 0, disable: 0 }, { id: 'C9', checked: 0, disable: 0 }, { id: 'C10', checked: 0, disable: 0 }, { id: 'C11', checked: 0, disable: 0 }, { id: 'C12', checked: 0, disable: 0 }],
        [{ id: 'D1', checked: 0, disable: 0 }, { id: 'D2', checked: 0, disable: 0 }, { id: 'D3', checked: 0, disable: 0 }, { id: 'D4', checked: 0, disable: 0 }, { id: 'D5', checked: 0, disable: 0 }, { id: 'D6', checked: 0, disable: 0 }, { id: 'D7', checked: 0, disable: 0 }, { id: 'D8', checked: 0, disable: 0 }, { id: 'D9', checked: 0, disable: 0 }, { id: 'D10', checked: 0, disable: 0 }, { id: 'D11', checked: 0, disable: 0 }, { id: 'D12', checked: 0, disable: 0 }],
        [{ id: 'E1', checked: 0, disable: 0 }, { id: 'E2', checked: 0, disable: 0 }, { id: 'E3', checked: 0, disable: 0 }, { id: 'E4', checked: 0, disable: 0 }, { id: 'E5', checked: 0, disable: 0 }, { id: 'E6', checked: 0, disable: 0 }, { id: 'E7', checked: 0, disable: 0 }, { id: 'E8', checked: 0, disable: 0 }, { id: 'E9', checked: 0, disable: 0 }, { id: 'E10', checked: 0, disable: 0 }, { id: 'E11', checked: 0, disable: 0 }, { id: 'E12', checked: 0, disable: 0 }],
        [{ id: 'F1', checked: 0, disable: 0 }, { id: 'F2', checked: 0, disable: 0 }, { id: 'F3', checked: 0, disable: 0 }, { id: 'F4', checked: 0, disable: 0 }, { id: 'F5', checked: 0, disable: 0 }, { id: 'F6', checked: 0, disable: 0 }, { id: 'F7', checked: 0, disable: 0 }, { id: 'F8', checked: 0, disable: 0 }, { id: 'F9', checked: 0, disable: 0 }, { id: 'F10', checked: 0, disable: 0 }, { id: 'F11', checked: 0, disable: 0 }, { id: 'F12', checked: 0, disable: 0 }],
        [{ id: 'G1', checked: 0, disable: 0 }, { id: 'G2', checked: 0, disable: 0 }, { id: 'G3', checked: 0, disable: 0 }, { id: 'G4', checked: 0, disable: 0 }, { id: 'G5', checked: 0, disable: 0 }, { id: 'G6', checked: 0, disable: 0 }, { id: 'G7', checked: 0, disable: 0 }, { id: 'G8', checked: 0, disable: 0 }, { id: 'G9', checked: 0, disable: 0 }, { id: 'G10', checked: 0, disable: 0 }, { id: 'G11', checked: 0, disable: 0 }, { id: 'G12', checked: 0, disable: 0 }],
        [{ id: 'H1', checked: 0, disable: 0 }, { id: 'H2', checked: 0, disable: 0 }, { id: 'H3', checked: 0, disable: 0 }, { id: 'H4', checked: 0, disable: 0 }, { id: 'H5', checked: 0, disable: 0 }, { id: 'H6', checked: 0, disable: 0 }, { id: 'H7', checked: 0, disable: 0 }, { id: 'H8', checked: 0, disable: 0 }, { id: 'H9', checked: 0, disable: 0 }, { id: 'H10', checked: 0, disable: 0 }, { id: 'H11', checked: 0, disable: 0 }, { id: 'H12', checked: 0, disable: 0 }],
        [{ id: 'I1', checked: 0, disable: 0 }, { id: 'I2', checked: 0, disable: 0 }, { id: 'I3', checked: 0, disable: 0 }, { id: 'I4', checked: 0, disable: 0 }, { id: 'I5', checked: 0, disable: 0 }, { id: 'I6', checked: 0, disable: 0 }, { id: 'I7', checked: 0, disable: 0 }, { id: 'I8', checked: 0, disable: 0 }, { id: 'I9', checked: 0, disable: 0 }, { id: 'I10', checked: 0, disable: 0 }, { id: 'I11', checked: 0, disable: 0 }, { id: 'I12', checked: 0, disable: 0 }],
        [{ id: 'J1', checked: 0, disable: 0 }, { id: 'J2', checked: 0, disable: 0 }, { id: 'J3', checked: 0, disable: 0 }, { id: 'J4', checked: 0, disable: 0 }, { id: 'J5', checked: 0, disable: 0 }, { id: 'J6', checked: 0, disable: 0 }, { id: 'J7', checked: 0, disable: 0 }, { id: 'J8', checked: 0, disable: 0 }, { id: 'J9', checked: 0, disable: 0 }, { id: 'J10', checked: 0, disable: 0 }, { id: 'J11', checked: 0, disable: 0 }, { id: 'J12', checked: 0, disable: 0 }]
    ];
    $scope.chooseSeat = function(id, x, y) {
        $scope.bookedBtn = false;

        localStorage.setItem('bookedBtn', $scope.bookedBtn);
        var seatNo = $scope.seats[x][y].id;

        var tempSeat = {
            no: seatNo,
            x: x,
            y: y
        };

        if ($scope.seats[parseInt(x)][parseInt(y)].checked === true) {
            if ($scope.seatCount < $scope.noOfSeats) {
                $scope.curr_book.seats.push(tempSeat);
                var retrievedCurrBook = localStorage.getItem('curr_book');
                retrievedCurrBook = JSON.parse(retrievedCurrBook);
                retrievedCurrBook.seats.push(tempSeat);
                localStorage.setItem('curr_book', JSON.stringify(retrievedCurrBook));
                $scope.seatCount = $scope.seatCount + 1;
                localStorage.setItem('seatCount', $scope.seatCount);
            } else {

                $scope.ui.alert = true
                $scope.seats[parseInt(x)][parseInt(y)].checked = false;
            }
        } else {
            var retrievedCurrBook = localStorage.getItem('curr_book');
            retrievedCurrBook = JSON.parse(retrievedCurrBook);
            for (var k = 0, len2 = retrievedCurrBook.seats.length; k < len2; k++) {
                if (retrievedCurrBook.seats[k].no === seatNo) {
                    retrievedCurrBook.seats.splice(k, 1);
                    localStorage.setItem('curr_book', JSON.stringify(retrievedCurrBook));
                    break;
                }
            }
            for (var i = 0, len = $scope.curr_book.seats.length; i < len; i++) {
                if ($scope.curr_book.seats[i].no === seatNo) {
                    $scope.curr_book.seats.splice(i, 1);
                    break;
                }
            }
            $scope.seatCount = $scope.seatCount - 1;
            localStorage.setItem('seatCount', $scope.seatCount);
        }
        if ($scope.seatCount === $scope.noOfSeats) {
            $scope.bookedBtn = true;

            localStorage.setItem('bookedBtn', $scope.bookedBtn);
        }
    }
    $scope.bookTickets = function() {
        var flag = 0;
        var tempO = JSON.parse(localStorage.getItem('curr_book'));
        if ($scope.bookedSeat && $scope.bookedSeat.length > 0) {
            for (var i = 0, len = $scope.bookedSeat.length; i < len; i++) {
                if ($scope.bookedSeat[i].username.toLowerCase() === tempO.username.toLowerCase()) {
                    flag = 1;
                    var sn = parseInt($scope.bookedSeat[i].noOfSeats) + parseInt(tempO.noOfSeats);
                    $scope.bookedSeat[i].noOfSeats = sn;
                    for (var j = 0, len1 = tempO.seats.length; j < len1; j++) {
                        $scope.bookedSeat[i].seats.push(tempO.seats[j]);
                    }
                }
                if (i === len - 1 && flag === 0) {
                    $scope.bookedSeat.push(tempO);
                }
            }
        } else if ($scope.bookedSeat.length === 0) {
            $scope.bookedSeat.push(tempO);
        }

        for (var i = 0, len = tempO.seats.length; i < len; i++) {
            $scope.seats[parseInt(tempO.seats[i].x)][parseInt(tempO.seats[i].y)].disable = 1;
        }
        $scope.curr_book.username = '';
        $scope.curr_book.noOfSeats = 0;
        $scope.curr_book.seats = [];

        $scope.username = '';
        $scope.noOfSeats = 0;
        $scope.seatlayout = false;
        $scope.seatCount = 0;
        $scope.bookedBtn = false;
        localStorage.clear();
        localStorage.setItem('bookedSeat', JSON.stringify($scope.bookedSeat));
    }
    $scope.init = function() {
        if (typeof(Storage) !== undefined) {
            var tempObj = JSON.parse(localStorage.getItem('curr_book'));
            $scope.curr_book = tempObj;
            $scope.username = localStorage.getItem('username');
            var noOfSeats = localStorage.getItem('noOfSeats');
            $scope.noOfSeats = parseInt(noOfSeats);
            var seatCount = localStorage.getItem('seatCount');
            $scope.seatCount = parseInt(seatCount);
            if (localStorage.getItem('seatlayout') === 'false')
                $scope.seatlayout = false;
            else
                $scope.seatlayout = true;

            if (localStorage.getItem('bookedBtn') === 'false')
                $scope.bookedBtn = false;
            else
                $scope.bookedBtn = true;
            if ($scope.curr_book !== null) {
                for (var l = 0, len3 = $scope.curr_book.seats.length; l < len3; l++) {
                    $scope.seats[parseInt($scope.curr_book.seats[l].x)][parseInt($scope.curr_book.seats[l].y)].checked = true;
                }
            }
            var tempB = JSON.parse(localStorage.getItem('bookedSeat'));
            if (tempB !== null && tempB.seats !== null) {
                for (var l = 0, len3 = tempB.length; l < len3; l++) {
                    for (var f = 0, len4 = tempB[l].seats.length; f < len4; f++) {
                        $scope.seats[parseInt(tempB[l].seats[f].x)][parseInt(tempB[l].seats[f].y)].disable = true;
                    }
                }
            }
        }
    };
    if (localStorage.getItem('username') !== null) {
        $scope.init();
    }
    if (localStorage.getItem('bookedSeat') !== null) {
        $scope.bookedSeat = JSON.parse(localStorage.getItem('bookedSeat'));
    }

}]);