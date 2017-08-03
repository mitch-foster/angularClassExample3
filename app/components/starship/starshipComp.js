angular.module('starwars').component('starship', {

    controller:function(){
        this.goToHyperSpace = ()=>{
            alert(`The ${this.details.name} is going to hyperspace!`)
        }
    },
    bindings:{
        owner:'@',
        details:'<',
        onPurchase:'&',
        fullDetails:'<'
    },
    controllerAs:'ship',
    templateUrl:'app/components/starship/starshipTemplate.html',


})

//BINDING @ is string binding
//BINDING < is one way binding; pass through a variable which could be an object, array, etc.
//BINDING & is action binding; pass through javascript or a function