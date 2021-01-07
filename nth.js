let n=13;
if(n%2==0){
    prime(n/2)
}
else
    fabanoci(n/2)


function fabanoci(n)
{
    let i,a=0,b=1,c;
    for(i=1;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
    }
    console.log(a) 
}
function prime(n)
{
    let count=0;
    for(i=2;i<=100;i++)
    {
        let x=0;
        for(j=2;j<i;j++)
        {
            if(i%j==0)
            {
                x=1;
                break;
            }
        }
        if(x==0){
             count++;
        }
        if(count==n){
            console.log(i)
            break;
        }
    }
}
