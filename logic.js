function calc() {
    const a =[];
    const val=[];
    const b=[];
    var sgp=0;
    for (let i = 0; i < 9; i++) {
        a[i]=document.getElementById(i+1).value;
        console.log(a[i]);     
        if (a[i]>=90 && a[i]<=100) {
            val[i]=10;
        }  
        else if (a[i]>=80 && a[i]<90){
            val[i]=9;
        }
        else if (a[i]>=70 && a[i]<80) {
            val[i]=8;
        }
        else if (a[i]>=60 && a[i]<70) {
            val[i]=7;
        }
        else if (a[i]>=55 && a[i]<60) {
            val[i]=6;
        }
        else if (a[i]>=50 && a[i]<55) {
            val[i]=5;
        }
        else if (a[i]>=40 && a[i]<50) {
            val[i]=4;
        }
        else{
            val[i]=0;
        }
        console.log(val[i])
        if (i<5) {
            b[i]=val[i]*3;
        }
        else if (i==7){
            b[i]=val[i]*2;
        }
        else {
            b[i]=val[i];
        }
        console.log(b[i]);
        sgp =sgp+b[i];


    }
    let sgpa=sgp/20;
    console.log(sgpa);
    document.getElementById("res").innerHTML=sgpa;
    

    
}
