class Module {
    constructor(txt){
        this.txt=txt;
    }

    report(){
        console.log("Hello from modular js!!! text is::"+this.txt);
    }
}

export {Module};

export default function modularFunction(){
    console.log("Greeting from modular.js");
}