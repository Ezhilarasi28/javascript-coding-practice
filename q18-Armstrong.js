//armstrong 

let num =153;
let arm =0;
let rem =0;
let num2 =num;
while(num>0)
{
    rem= num % 10
    arm = arm +(rem*rem*rem)
    num =num/10
}if(num2==arm)
{
    console.log("arm")
}else
{
    console.log("not arm") 
}

 
 

 