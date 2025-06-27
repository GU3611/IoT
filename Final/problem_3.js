const asyncExample = async (a) => {
    console.log(a, "started");
    
    tmp = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(a, "timeout");
        }, 0);
        let n=a;
        for (let i=0; i<10000000; i++) n+=0.0000001;
        console.log(n);
        return resolve(a);
    });
    
    console.log(a, "finished");
    return tmp;
};

for (let i=0; i<2; i++) {
    asyncExample(i).then((d)=>console.log(d,"done"));
    console.log(i, "executed")
}

console.log("DONE")