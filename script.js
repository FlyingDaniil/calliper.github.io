// var w;
// var d;
// var n;
// var h;

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

function solveH(w, n){
    return 70.71 * w / Math.tan(Math.asin(0.7071 / n));
}

function main(w, d){
  n = solveOne(w, d);
  n = solveTwo(w, d, n);
  n = solveThree(w, d, n);
  n = ((n * 1000) ^ 0) / 1000;

  h = solveH(w, n);
  h = ((h * 1000) ^ 0) / 1000;

  alert(n);
  alert(h);

}

main(w, d);
