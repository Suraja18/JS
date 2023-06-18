(function(){
    const superHero="Superman";
    console.log(superHero);
})();
(function(){
    const superHero="Batman";
    console.log(superHero);
})();
//Passing message in console.log
(function(message){
    const superHero="Superman";
    console.log(message,superHero);
})("Hello");
(function(message){
    const superHero="Batman";
    console.log(message, superHero);
})("Hey");