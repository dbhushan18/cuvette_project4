let string ="";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'RESET'){
            string = "";
            document.querySelector('input').value =string;
        }
        
       else if(e.target.innerHTML === undefined || e.target.innerHTML== null){
            string= "ERROR";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '='){
            if(string.charAt(0) =="*" || string.charAt(0) =="/" || isNaN(string.charAt(string.length-1)) ){
                string= "ERROR";
                document.querySelector('input').value = string;
            } 
            else if(eval(string) == Math.floor(eval(string))){
                let newstring = eval(string);
                document.querySelector('input').value = newstring;
            }
            else{
                string = eval(string).toFixed(2);
                document.querySelector('input').value = string;
            }  
        }
        
        else if(e.target.innerHTML == 'DEL'){
            string = string.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }       
        else{
            if(isNaN(string.charAt(string.length-1)) && isNaN(e.target.innerHTML ) && isNaN(charAt(0)) ){
                string.charAt(string.length-1)=e.target
                document.querySelector('input').value = string;
                
            }
            else{
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;    
            }
        }
        
    })
})
