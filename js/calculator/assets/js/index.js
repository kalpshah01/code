
        $(document).ready(function(){
            let firstNumber;
            let operator;
            let secondNumber;
        $("form").on('submit',function(e){
            e.preventDefault();
        });
            let ans=document.getElementById('num1');
console.log(ans);
ans.innerText=''
            $('#1').on('click',function(){
                console.log('button 1 clicked');
                ans.value +=1;
            });
            
            $('#2').on('click',function(){
                console.log('button 2 clicked');
                  ans.value +=2;
            });
            $('#3').on('click',function(){
                console.log('button 3 clicked');
                  ans.value +=3;
            });
            $('#4').on('click',function(){
                console.log('button 4 clicked');
                  ans.value +=4;
            });
            $('#5').on('click',function(){
                console.log('button 5 clicked');
                  ans.value +=5;
            });
            $('#6').on('click',function(){
                console.log('button 6 clicked');
                  ans.value +=6;
            });
            $('#7').on('click',function(){
                console.log('button 7 clicked');
                  ans.value +=7;
            });
            $('#8').on('click',function(){
                console.log('button 8 clicked');
                  ans.value +=8;
            });
            $('#9').on('click',function(){
                console.log('button 9 clicked');
                  ans.value +=9;
            });
            $('#0').on('click',function(){
                console.log('button 0 clicked');
                  ans.value +=0;
                  
            });
            $('#sum').on('click',function(){
                console.log('button + clicked');
             firstNumber=parseInt(ans.value);
              operator = '+';
                ans.value  = " ";
            });
            $('#subtract').on('click',function(){
                console.log('button - clicked');
                firstNumber=parseInt(ans.value);
                operator = '-';
                 ans.value  = " ";
            });
            $('#multiply').on('click',function(){
                console.log('button * clicked');
                firstNumber=parseInt(ans.value);
                operator = '*';
                 ans.value  = " ";
            });
            $('#divide').on('click',function(){
                console.log('button / clicked');
                firstNumber=parseInt(ans.value);
                operator = '/';
                 ans.value  = " ";
            });
            $('#modulus').on('click',function(){
                console.log('button % clicked');
                firstNumber=parseInt(ans.value);
                operator = '%';
                 ans.value  = " ";
            });
            $('#squre').on('click',function(){
                console.log('button X^2 clicked');
                firstNumber=parseInt(ans.value);
                ans.value= firstNumber * firstNumber;
                return ans.value;
            });
            $('#equals').on('click',function(){
                console.log('button = clicked');
            secondNumber=parseInt(ans.value);
                if(operator === '+'){
                return ans.value = firstNumber + secondNumber;
                }
                else if(operator === '-'){
                    return ans.value = firstNumber - secondNumber;

            }
                else if(operator === '*'){
                  let  result =firstNumber * secondNumber;
                    return ans.value = result * -1; 

            }
                else if(operator === '/'){
                    return ans.value = firstNumber / secondNumber;

            }
                else if(operator === '%'){
                    return ans.value = firstNumber % secondNumber;

            }
            });


            $('#clear').on('click',function(){
                console.log('button C clicked');
                ans.value = '';
            });
            $('#ce').on('click',function(){
                //  ans.value = '';
                console.log('button CE clicked');
            result=ans.value.slice(0,-  1);
            
            ans.value=result;
            });
            $('#changesign').on('click',function(){
                firstNumber=parseInt(ans.value);
                ans.value = firstNumber * -1;
            })
        });
