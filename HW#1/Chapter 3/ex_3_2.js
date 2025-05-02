function a() { 
    console.log(this)               // Object [global] { ... }
    console.log(global);            // Object [global] { ... }
    console.log(this === global)    // true 
}

a();