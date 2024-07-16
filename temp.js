const arr= [];

// not implemented for circles within
function intersect(){
    const c1=arr[0];
    const c2=arr[1];

    if(Math.hypot(c1.x-c2.x,c1.y-c2.y) <= c1.radius+c2.radius)
    return "Intersecting";
    else 
    return "Not Intersecting";
}

document.addEventListener('click',(e) => {
    const crcl=document.querySelectorAll('.circle');
    console.log(crcl);
    if(crcl.length==2){
        crcl.forEach((crc)=>{
            document.body.removeChild(crc);
            arr.pop();
        })
    }

    const x= e.clientX;
    const y= e.clientY;
    console.log(x + " " + y);

    const ran=Math.random();
    const radius = Math.min(window.innerHeight,window.innerWidth)/2*ran;

    arr.push({x,y,radius});
    console.log(arr);

    const el =document.createElement('div');
    el.className='circle';
    el.style.width=2*radius+'px';
    el.style.height=2*radius+'px';
    el.style.top=y-radius+'px';
    el.style.left=x-radius+'px';
    document.body.appendChild(el);
    if(crcl.length==1){
        console.log(intersect());
    }
})