
function palindrome(nau){
            var c = nau;
            var r , x=0;
            while(nau > 0){
             r = nau % 10;
             x = x*10 + r;
             nau = parseInt(nau/10);
            }
            if ( x == c){
             alert("Palindrome\nThank you \n Enjoy");
         }
         else{
             alert(" Not Palindrome \n Thank you \n study");
         }
         }
         document.getElementById('palindrome').addEventListener('click',function(){
            var nau = prompt("Enter a number:");
            palindrome(nau);
        }
        )