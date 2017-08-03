angular.module('starwars').service('starshipsSrvc', function($http){
    this.staticData = 'Just to show how we can use a service in our controllers.'

    this.getStarships = function(){
        return $http.get('https://swapi.co/api/starships').then((response)=>{
            return response.data.results.map(e=>{
                // url 'https://swapi.co/api/starships/5/'
                // This is to get ids from the url property
               e.id = e.url.slice(31, e.url.length-1) *1;
               console.log(e.id);
               return e;
            })
        }).catch(err=>console.log(err))
    }
    this.getStarship = function(id){
        return $http.get(`https://swapi.co/api/starships/${id}`).then((response)=>{
            //Great place to transform or manipulate data if we need to instead of doing it in the controller
            return response.data
        }).catch(err=>console.log(err))
    }
})