alert("hello");

function HStep(w, d, n){
    return d * Math.cos(Math.asin(0.7071/n)) / Math.sin(0.7854 - Math.asin(0.7071/n)) - w /1.4142/Math.tan(Math.asin(0.7071/n));   
}

var h = HStep(0.02, 0.01, 1.5);
alert(h);

function solveOne(w, d, from, to){
    var from;
    for(from = 1.01;from < 4;from += 0.01){
        
    }
}