
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    let i = document.querySelector('input')

    i.addEventListener('change', function(evento){
       let cantidad = evento.target.value

       for(let i =0; i<cantidad; i++){
            let uno = Math.floor(Math.random()*who.length);
            let dos= Math.floor(Math.random()*action.length);
            let tres =Math.floor(Math.random()*what.length);
            let cuatro = Math.floor(Math.random()*when.length);
            
            let body = document.querySelector('Body');
            let h1 = document.createElement('h1')
            h1.innerHTML = who[uno]+' '+ action[dos]+' '+ what[tres]+' '+when[cuatro]
            body.appendChild(h1)
       }
   })
 
