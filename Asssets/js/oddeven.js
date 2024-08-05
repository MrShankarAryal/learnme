document.getElementById('check-odd-even').addEventListener('click',function(){
    var n= prompt("enter a number :");
    oddeven(n);
})  
 
 function oddeven(n){
    if(n%2 ==0){
          alert("Even\n Thankyou");
    }
    else{
        alert("odd \n thankyou");
    }
 }    
