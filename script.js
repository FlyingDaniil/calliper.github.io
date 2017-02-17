var w = 0.03;
var d = 0.01;

alert("hello");

function HStep(w, d, n){
    return d * Math.cos(Math.asin(0.7071/n)) / Math.sin(0.7854 - Math.asin(0.7071/n)) - w /1.4142/Math.tan(Math.asin(0.7071/n));
}

function solveOne(w, d){
    var from;
    for(from = 1.01; from < 4; from += 0.01){
          var hs;
          hs = HStep(w, d, from);
          if (hs <= 0){
            return from - 0.01;
          }
    }
}

function solveTwo(w, d, from){
    for (from; from < from + 0.01; from += 0.001) {
        var hs;
        hs = HStep(w, d, from);
        if (hs <= 0){
          return from - 0.001;
        }
    }
}

function solveThree(w, d, from) {
    for (from; from < from + 0.001; from += 0.0001){
        var hs;
        hs = HStep(w, d, from);
        if (hs <= 0){
          return from - 0.0001;
        }
    }
}

alert("hello");



var a = solveOne(w, d);
a = ((a*100) ^ 0) / 100;
alert(a);
a = solveTwo(w, d, a);
a = ((a*1000) ^ 0) / 1000;
alert(a);
a = solveThree(w, d, a);
a = ((a*10000) ^ 0) / 10000;
alert(a);
