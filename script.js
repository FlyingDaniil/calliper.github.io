function HStep(w, d, n){
    return d * Math.cos(Math.asin(0.70710678/n)) / Math.sin(0.785398 - Math.asin(0.70710678/n)) - w * 0.70710678 /Math.tan(Math.asin(0.70710678/n));
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
    return 70.710678 * w / Math.tan(Math.asin(0.70710678 / n));
}

function main(){
  var dd = d.value;
  var ww = w.value;
  var nn, hh;
  dd /= 100;
  ww /= 100;
  nn = solveOne(ww, dd);
  nn = solveTwo(ww, dd, nn);
  nn = solveThree(ww, dd, nn);
  nn = Math.round(nn * 1000) / 1000;

  hh = solveH(ww, nn);
  hh = Math.round(hh * 1000) / 1000;

  d.value = d.value + " cm";
  w.value = w.value + " cm";
  n.value = nn ;
  h.value = hh + " cm";

}

main(w, d);
