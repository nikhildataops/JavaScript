const student={
    name:"Nikhil",
    age:19,
    eng:95,
    phy:98,
    math:60,
    getAvg(){
        let avg=(this.eng+this.phy+this.math)/3;
        console.log(avg);
        
    }
}