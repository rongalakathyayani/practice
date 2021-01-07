let str="[{}()]()"
let x=str.length;
console.log(x)
let count=0,count1=0,count2=0,count3=0,count4=0,count5=0;
for(i=1;i<=x;i++){
    if(str.charAt(i) == '(' ){
    count++
    }
    else if(str.charAt(i) == ')' )
   count1++
}
for(i=1;i<=x;i++){
    if(str.charAt(i) == '{' ){
    count2++
    }
    else if(str.charAt(i) == '}' )
   count3++
}
for(i=1;i<=x;i++){
    if(str.charAt(i) == '(' ){
    count4++
    }
    else if(str.charAt(i) == ')' )
   count5++
}
if(count==count1&&count2==count3&&count4==count5){
    console.log(true)
}
else{
    console.log(false)
}

