"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},srsApp=angular.module("srsApp",[]);srsApp.directive("userName",function(){var e=/^[a-zA-Z ]*$/;return{restrict:"A",require:"ngModel",link:function(d,a,c,s){s.$validators.number=function(d,a){return e.test(a)}}}}),srsApp.directive("noOfSeat",function(){return{restrict:"A",require:"ngModel",link:function(e,d,a,c){e.$watch(a.ngMax,function(){c.$setViewValue(c.$viewValue)});var s=function(d){var s=e.$eval(a.ngMax)||1/0;return!isEmpty(d)&&d>s?void c.$setValidity("ngMax",!1):(c.$setValidity("ngMax",!0),d)};c.$parsers.push(s),c.$formatters.push(s)}}}),srsApp.controller("mainController",["$scope",function(e){e.bookedSeat=[],e.ui={alert:!1},e.curr_book={username:"",noOfSeats:0,seats:[]},e.username="",e.noOfSeats,e.seatlayout=!1,e.seatCount=0,e.bookedBtn=!1,e.rows=["A","B","C","D","E","F","G","H","I","J"],e.columns=[1,2,3,4,5,6,7,8,9,10,11,12],e.inputSubmit=function(){e.seatlayout=!0,localStorage.setItem("seatlayout",!0),e.curr_book.username=e.username,e.curr_book.noOfSeats=e.noOfSeats,"undefined"!=typeof Storage&&(localStorage.setItem("username",e.username),localStorage.setItem("noOfSeats",e.noOfSeats),localStorage.setItem("curr_book",JSON.stringify(e.curr_book))),e.myFrm.$setPristine()},e.seats=[[{id:"A1",checked:0,disable:0},{id:"A2",checked:0,disable:0},{id:"A3",checked:0,disable:0},{id:"A4",checked:0,disable:0},{id:"A5",checked:0,disable:0},{id:"A6",checked:0,disable:0},{id:"A7",checked:0,disable:0},{id:"A8",checked:0,disable:0},{id:"A9",checked:0,disable:0},{id:"A10",checked:0,disable:0},{id:"A11",checked:0,disable:0},{id:"A12",checked:0,disable:0}],[{id:"B1",checked:0,disable:0},{id:"B2",checked:0,disable:0},{id:"B3",checked:0,disable:0},{id:"B4",checked:0,disable:0},{id:"B5",checked:0,disable:0},{id:"B6",checked:0,disable:0},{id:"B7",checked:0,disable:0},{id:"B8",checked:0,disable:0},{id:"B9",checked:0,disable:0},{id:"B10",checked:0,disable:0},{id:"B11",checked:0,disable:0},{id:"B12",checked:0,disable:0}],[{id:"C1",checked:0,disable:0},{id:"C2",checked:0,disable:0},{id:"C3",checked:0,disable:0},{id:"C4",checked:0,disable:0},{id:"C5",checked:0,disable:0},{id:"C6",checked:0,disable:0},{id:"C7",checked:0,disable:0},{id:"C8",checked:0,disable:0},{id:"C9",checked:0,disable:0},{id:"C10",checked:0,disable:0},{id:"C11",checked:0,disable:0},{id:"C12",checked:0,disable:0}],[{id:"D1",checked:0,disable:0},{id:"D2",checked:0,disable:0},{id:"D3",checked:0,disable:0},{id:"D4",checked:0,disable:0},{id:"D5",checked:0,disable:0},{id:"D6",checked:0,disable:0},{id:"D7",checked:0,disable:0},{id:"D8",checked:0,disable:0},{id:"D9",checked:0,disable:0},{id:"D10",checked:0,disable:0},{id:"D11",checked:0,disable:0},{id:"D12",checked:0,disable:0}],[{id:"E1",checked:0,disable:0},{id:"E2",checked:0,disable:0},{id:"E3",checked:0,disable:0},{id:"E4",checked:0,disable:0},{id:"E5",checked:0,disable:0},{id:"E6",checked:0,disable:0},{id:"E7",checked:0,disable:0},{id:"E8",checked:0,disable:0},{id:"E9",checked:0,disable:0},{id:"E10",checked:0,disable:0},{id:"E11",checked:0,disable:0},{id:"E12",checked:0,disable:0}],[{id:"F1",checked:0,disable:0},{id:"F2",checked:0,disable:0},{id:"F3",checked:0,disable:0},{id:"F4",checked:0,disable:0},{id:"F5",checked:0,disable:0},{id:"F6",checked:0,disable:0},{id:"F7",checked:0,disable:0},{id:"F8",checked:0,disable:0},{id:"F9",checked:0,disable:0},{id:"F10",checked:0,disable:0},{id:"F11",checked:0,disable:0},{id:"F12",checked:0,disable:0}],[{id:"G1",checked:0,disable:0},{id:"G2",checked:0,disable:0},{id:"G3",checked:0,disable:0},{id:"G4",checked:0,disable:0},{id:"G5",checked:0,disable:0},{id:"G6",checked:0,disable:0},{id:"G7",checked:0,disable:0},{id:"G8",checked:0,disable:0},{id:"G9",checked:0,disable:0},{id:"G10",checked:0,disable:0},{id:"G11",checked:0,disable:0},{id:"G12",checked:0,disable:0}],[{id:"H1",checked:0,disable:0},{id:"H2",checked:0,disable:0},{id:"H3",checked:0,disable:0},{id:"H4",checked:0,disable:0},{id:"H5",checked:0,disable:0},{id:"H6",checked:0,disable:0},{id:"H7",checked:0,disable:0},{id:"H8",checked:0,disable:0},{id:"H9",checked:0,disable:0},{id:"H10",checked:0,disable:0},{id:"H11",checked:0,disable:0},{id:"H12",checked:0,disable:0}],[{id:"I1",checked:0,disable:0},{id:"I2",checked:0,disable:0},{id:"I3",checked:0,disable:0},{id:"I4",checked:0,disable:0},{id:"I5",checked:0,disable:0},{id:"I6",checked:0,disable:0},{id:"I7",checked:0,disable:0},{id:"I8",checked:0,disable:0},{id:"I9",checked:0,disable:0},{id:"I10",checked:0,disable:0},{id:"I11",checked:0,disable:0},{id:"I12",checked:0,disable:0}],[{id:"J1",checked:0,disable:0},{id:"J2",checked:0,disable:0},{id:"J3",checked:0,disable:0},{id:"J4",checked:0,disable:0},{id:"J5",checked:0,disable:0},{id:"J6",checked:0,disable:0},{id:"J7",checked:0,disable:0},{id:"J8",checked:0,disable:0},{id:"J9",checked:0,disable:0},{id:"J10",checked:0,disable:0},{id:"J11",checked:0,disable:0},{id:"J12",checked:0,disable:0}]],e.chooseSeat=function(d,a,c){e.bookedBtn=!1,localStorage.setItem("bookedBtn",e.bookedBtn);var s=e.seats[a][c].id,i={no:s,x:a,y:c};if(!0===e.seats[parseInt(a)][parseInt(c)].checked)if(e.seatCount<e.noOfSeats){e.curr_book.seats.push(i);var t=localStorage.getItem("curr_book");t=JSON.parse(t),t.seats.push(i),localStorage.setItem("curr_book",JSON.stringify(t)),e.seatCount=e.seatCount+1,localStorage.setItem("seatCount",e.seatCount)}else e.ui.alert=!0,e.seats[parseInt(a)][parseInt(c)].checked=!1;else{var t=localStorage.getItem("curr_book");t=JSON.parse(t);for(var o=0,l=t.seats.length;o<l;o++)if(t.seats[o].no===s){t.seats.splice(o,1),localStorage.setItem("curr_book",JSON.stringify(t));break}for(var r=0,b=e.curr_book.seats.length;r<b;r++)if(e.curr_book.seats[r].no===s){e.curr_book.seats.splice(r,1);break}e.seatCount=e.seatCount-1,localStorage.setItem("seatCount",e.seatCount)}e.seatCount===e.noOfSeats&&(e.bookedBtn=!0,localStorage.setItem("bookedBtn",e.bookedBtn))},e.bookTickets=function(){var d=0,a=JSON.parse(localStorage.getItem("curr_book"));if(e.bookedSeat&&e.bookedSeat.length>0)for(var c=0,s=e.bookedSeat.length;c<s;c++){if(e.bookedSeat[c].username.toLowerCase()===a.username.toLowerCase()){d=1;var i=parseInt(e.bookedSeat[c].noOfSeats)+parseInt(a.noOfSeats);e.bookedSeat[c].noOfSeats=i;for(var t=0,o=a.seats.length;t<o;t++)e.bookedSeat[c].seats.push(a.seats[t])}c===s-1&&0===d&&e.bookedSeat.push(a)}else 0===e.bookedSeat.length&&e.bookedSeat.push(a);for(var c=0,s=a.seats.length;c<s;c++)e.seats[parseInt(a.seats[c].x)][parseInt(a.seats[c].y)].disable=1;e.curr_book.username="",e.curr_book.noOfSeats=0,e.curr_book.seats=[],e.username="",e.noOfSeats=0,e.seatlayout=!1,e.seatCount=0,e.bookedBtn=!1,localStorage.clear(),localStorage.setItem("bookedSeat",JSON.stringify(e.bookedSeat))},e.init=function(){if(void 0!==("undefined"==typeof Storage?"undefined":_typeof(Storage))){var d=JSON.parse(localStorage.getItem("curr_book"));e.curr_book=d,e.username=localStorage.getItem("username");var a=localStorage.getItem("noOfSeats");e.noOfSeats=parseInt(a);var c=localStorage.getItem("seatCount");if(e.seatCount=parseInt(c),"false"===localStorage.getItem("seatlayout")?e.seatlayout=!1:e.seatlayout=!0,"false"===localStorage.getItem("bookedBtn")?e.bookedBtn=!1:e.bookedBtn=!0,null!==e.curr_book)for(var s=0,i=e.curr_book.seats.length;s<i;s++)e.seats[parseInt(e.curr_book.seats[s].x)][parseInt(e.curr_book.seats[s].y)].checked=!0;var t=JSON.parse(localStorage.getItem("bookedSeat"));if(null!==t&&null!==t.seats)for(var s=0,i=t.length;s<i;s++)for(var o=0,l=t[s].seats.length;o<l;o++)e.seats[parseInt(t[s].seats[o].x)][parseInt(t[s].seats[o].y)].disable=!0}},null!==localStorage.getItem("username")&&e.init(),null!==localStorage.getItem("bookedSeat")&&(e.bookedSeat=JSON.parse(localStorage.getItem("bookedSeat")))}]);