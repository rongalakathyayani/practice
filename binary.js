let num=12, n, rem, binary = 0, x=1;
n=num;
   while (n> 1)
    {
        rem = ~~(n % 2);
        binary = binary+rem * x;
        x=x* 10;
        n/= 2;
    }
   console.log(binary);
   
