let string ="";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML === undefined || e.target.innerHTML== null){
            string= "ERROR";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '='){
            let new_string= eval(string);
            if(string===new_string){
                string= "ERROR";
                document.querySelector('input').value = string;
            }
            else{
                string = new_string;
                document.querySelector('input').value = string;
            }
        }
        else if(e.target.innerHTML == 'RESET'){
            string = "";
            document.querySelector('input').value =string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }       
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
})