//fibanocci series
let t;
let f=0;
let s=1;

for(i=0;i<=13;i++)

{
    t=f+s;
    f=s;
    s=t;
    console.log(t)
}