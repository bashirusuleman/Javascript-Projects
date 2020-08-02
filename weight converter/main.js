const lbs = document.getElementById('lbsInput');

//make the output hidden on loading the window
document.getElementById('output').style.visibility = 'hidden';

//converter function
lbs.addEventListener('input', function(e){
 document.getElementById('output').style.visibility = 'visible';
 let pounds =  e.target.value;
 document.getElementById('gramsOutputs').innerHTML = (453.592 * pounds);
 document.getElementById('kgOutputs').innerHTML = (0.453592 * pounds);
 document.getElementById('ozOutputs').innerHTML = (16 * pounds);
 })
