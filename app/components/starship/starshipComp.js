angular.module('starwars').component('starship', {

    controller:function(){

    },
    bindings:{
        owner:'@',
        details:'<',
        onPurchase:'&',
    },
    controllerAs:'ship',
    templateUrl:'app/components/starship/starshipTemplate.html',


})

//BINDING @ is string binding
//BINDING < is one way binding; pass through a variable which could be an object, array, etc.
//BINDING @ is action binding; pass through javascript or a function