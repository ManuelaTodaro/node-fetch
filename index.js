const fetch = require("node-fetch")
 function  esercizio1 (){
     fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data => 
        
    {
        data
            .filter(elemento=> elemento.userId === 4 )
            .forEach(elemento=>console.log(elemento.id))    
         }
        )}
        
 function esercizio2 (){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=>{
            data 
                .filter(elemento=> elemento.id%2!==0)
                .forEach(elemento=>console.log(elemento.id))
        })
 }
  function esercizio3(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            data
                 .filter(elemento=>elemento.title %2===0 )
                 .forEach(elemento=>console.log(elemento.id))
        })

  }
  function esercizio4(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=>{
            data
                .filter(elemento=>elemento.body.lenght%3===0)
                .forEach(elemento=>conosole.log( elemento.id))  
                


        })
  }
  function esercizio5(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=>{
            let stringa=[] 
            data

                .filter(elemento=> elemento.body.charAt(0)=== "s")
              
                .forEach(elemento=>stringa.push(elemento.body))
                console.log(stringa)


            
        })
  }
 
 esercizio1()
 esercizio2()
 esercizio3()
 esercizio4()
 esercizio5()
