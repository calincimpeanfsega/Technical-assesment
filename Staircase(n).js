function Staircase(n)
{
    for(let i=1;i<=n;i++)
    {
       console.log("");
       for(let j=i;j>0;j--)
          process.stdout.write("#");
    }
}
Staircase(4);
console.log("");
