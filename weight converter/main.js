const lbs = document.getElementById('lbsInput');

//make the output hidden on loading the window
document.getElementById('output').style.visibility = 'hidden';

//converter function
lbs.addEventListener('input', function(e){
 let pounds =  e.target.value;
 let units = document.getElementById('units').value;
  // Function to loop through IDs to change visibility
  function changeVisibility(ids){
      for (let i = 0; i<ids.length; i++){
          document.getElementById(ids[i]).style.visibility ='visible';
      }
  }
 if (units=== 'lbs'){
    changeVisibility(["grams", "kilo", "oz"]);
    document.getElementById('gramsOutputs').innerHTML = (453.592 * pounds);
    document.getElementById('kgOutputs').innerHTML = (0.453592 * pounds);
    document.getElementById('ozOutputs').innerHTML = (16 * pounds);
 }  else if (units=== 'kg') {
    changeVisibility(["grams", "pounds", "oz"]);
    //Remove the display of Kilograms 
    document.getElementById('kilo').style.display = 'none';
    document.getElementById('gramsOutputs').innerHTML = (453.592 * pounds);
    document.getElementById('kgOutputs').innerHTML = (0.453592 * pounds);
    document.getElementById('ozOutputs').innerHTML = (16 * pounds);
 }
 else if (units=== 'grams') {
    changeVisibility(["kilo", "pounds", "oz"]);
    document.getElementById('grams').style.display = 'none';
    document.getElementById('gramsOutputs').innerHTML = (453.592 * pounds);
    document.getElementById('kgOutputs').innerHTML = (0.453592 * pounds);
    document.getElementById('ozOutputs').innerHTML = (16 * pounds);
 }
 else if (units=== 'ounces') {
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsOutputs').innerHTML = (453.592 * pounds);
    document.getElementById('kgOutputs').innerHTML = (0.453592 * pounds);
    document.getElementById('ozOutputs').innerHTML = (16 * pounds);
 }
})


    