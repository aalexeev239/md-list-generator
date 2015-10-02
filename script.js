(function(){
var inpMin = document.getElementById('min');
var inpMax = document.getElementById('max');
var out = document.getElementById('out');
var ordered = document.getElementById('ordered');

function generateMD() {
  var min = parseInt(inpMin.value) || 1;
  var max = parseInt(inpMax.value) || 1;
  var isOrdered = ordered.checked;
  
  console.log('ordered', isOrdered);
  if (min > max) {
    max = min;
    inpMax.value = max;
  }
  
  var res = '';
  
  for (var i = min; i <= max; i++) {
    res += '- [ ] ';
    if (isOrdered) res+= i+'. ';
    res += '\n';
  }
  out.value = res;
}

min.oninput = generateMD;
max.oninput = generateMD;
ordered.onchange = generateMD;
generateMD();
})()
