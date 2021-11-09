require('request-promise') ( { 

   url: 'https://ipinfo.io/ip', 
   proxy: 'http://username:password@proxy.proxyverse.io:9200' 

}).then( 
   function(data ){ 
      console.log(data); 
    }, 
    function(err){ 
       console.error(err); 
   } 
);
