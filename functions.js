
function Period(){
  let first_day = document.getElementById("First_day").value;;
  let how_long = document.getElementById("How_long").value;
  let average_length_one = document.getElementById("Average_length").value;
  const date = new Date("'"+first_day+"'");
  const first_date = new Date("'"+first_day+"'")
  const second_date = new Date("'"+first_day+"'")
  if (first_day == "") {
      document.getElementById("error").innerHTML = "Please Choose a valid date of Your Menstrual Period ";

  }
  else if (how_long == "") {
      document.getElementById("error").innerHTML = "Please select a valid input from how long your period lasts"
   }
   else if (average_length_one == "") {
      document.getElementById("error").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
   }
  else  {  
    document.getElementById("error").innerHTML = ""
    const myArray = how_long.split(" ");
    let day = myArray[0];
    const length_Array = average_length_one.split(" ");
    let average_length = parseInt(length_Array[0]);
    next_period = date.setDate(date.getDate() + average_length);
    
    
    document.getElementById("How_long_range").innerHTML = '<table style="width:300px"><tbody><tr><td class="border border-slate-300">How Long Your Period Lasts</td></tr></tbody></table>'
    for (let i = 0; i <= day-1; i++){
      document.getElementById("how_long_data"+ i).innerHTML = '<table'+' style='+'"width:300px"'+'>'+'<tbody><tr>'+ '<td class=' +'"border border-slate-300">'+(first_date.getDate()+i) + "-"+ (first_date.getMonth()+1)+ "-" + first_date.getFullYear()+ "\n"+'</td>'+ '</tr></tbody></table>'
    }
  ovulation_date = parseInt(date.getDate()/2)
  const oval = new Date("'"+first_day+"'");
  oval.setDate(ovulation_date)
  document.getElementById("ovulation_date").innerHTML = '<table class="border-solid border-2 border-black text-center w-5/6 h-60"><tbody class="border-2 border-black"><tr><td class="border-2 border-black">Your Most Probable Ovulation Days</td></tr></tbody></table>'
    for (let j = 0; j <= day-1; j++){
      //oval.setDate(oval.getDate() +j);
      document.getElementById("ovulation_date"+ j).innerHTML = '<table'+' class='+'"border-solid border-2 border-black text-center w-5/6 h-60"'+'>'+'<tbody class="border-2 border-black"><tr>'+ '<td class="border-2 border-black">'+(oval.getDate()+j) + "-"+ (oval.getMonth()+1)+ "-" + oval.getFullYear()+ "\n";+'</td>'+ '</tr></tbody></table>'
    }
    // display the Result
    document.getElementById("next_per").innerHTML = '<table class="border-solid border-2 border-black text-center w-5/6 h-60"><tbody class="border-2 border-black"><tr><td class="border-2 border-black">Your Next Period Is On</td></tr></tbody></table>'
    next_period = parseInt(second_date.getDate() + average_length)
    second_date.setDate(next_period)
    document.getElementById("next_period").innerHTML = '<table'+' class='+'"border-solid border-2 border-black text-center w-5/6 h-60"'+'>'+'<tbody class="border-2 border-black"><tr>'+ '<td class=' +'"border-2 border-black">'+second_date.getDate() + "-"+ (second_date.getMonth()+1)+ "-" + second_date.getFullYear()+ "\n"+'</td>'+ '</tr></tbody></table>';  
    document.getElementById("presultguide").innerHTML = ""
    document.getElementById("presultbar").innerHTML = ""
    document.getElementById("presultguide").innerHTML += "The below result is just an estimation an lavaniya bro it need to be corrected\n\n\n"
    document.getElementById("presultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"      //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
}
}

function Macbalanced(){
  document.getElementById("tabledata").innerHTML = ""
  document.getElementById("tabledata").innerHTML +='<tbody class="border-2 border-black">' + '<tr>'+'<td class='+'"border-2 border-black">'+'Protein'+'</td>'+'<td class='+'"border-2 border-black">'+average_protein+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Carbs'+'</td>'+'<td class='+'"border-2 border-black">'+average_carbs+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Fat'+'</td>'+'<td class='+'"border-2 border-black">'+average_fats+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Sugar'+'</td>'+'<td class='+'"border-2 border-black">'+sugar+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Saturated Fat'+'</td>'+'<td class='+'"border-2 border-black">'+saturated_fat+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Calories'+'</td>'+'<td class='+'"border-2 border-black">'+BMR+' Calories/day'+'</td>'+'</tr>'+
   '</tbody>'
}
function Maclowfat(){
  document.getElementById("tabledata").innerHTML = ""
  updatefat = parseInt(average_fats-min_fats)
  updatefcal = parseInt((updatefat*9/2))
  updatefprotein = parseInt(average_protein + updatefcal/4)
  updatefcarb = parseInt(average_carbs + updatefcal/4)
  document.getElementById("tabledata").innerHTML +='<tbody class="border-2 border-black">' + '<tr>'+'<td class='+'"border-2 border-black">'+'Protein'+'</td>'+'<td class='+'"border-2 border-black">'+updatefprotein+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Carbs'+'</td>'+'<td class='+'"border-2 border-black">'+updatefcarb+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Fat'+'</td>'+'<td class='+'"border-2 border-black">'+min_fats+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Sugar'+'</td>'+'<td class='+'"border-2 border-black">'+sugar+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Saturated Fat'+'</td>'+'<td class='+'"border-2 border-black">'+saturated_fat+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Calories'+'</td>'+'<td class='+'"border-2 border-black">'+BMR+' Calories/day'+'</td>'+'</tr>'+'</tbody>'
}
function Maclowcarbs(){
  document.getElementById("tabledata").innerHTML = ""
  updatecarb = parseInt(average_carbs-min_carbs)
  updateccal = parseInt((updatecarb*4/2))
  updatecprotein = parseInt(average_protein + updateccal/4)
  updatecfat = parseInt(average_fats + updateccal/9)
  document.getElementById("tabledata").innerHTML +='<tbody class="border-2 border-black">' + '<tr>'+'<td class='+'"border-2 border-black">'+'Protein'+'</td>'+'<td class='+'"border-2 border-black">'+updatecprotein+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Carbs'+'</td>'+'<td class='+'"border-2 border-black">'+min_carbs+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Fat'+'</td>'+'<td class='+'"border-2 border-black">'+updatecfat+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Sugar'+'</td>'+'<td class='+'"border-2 border-black">'+sugar+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Saturated Fat'+'</td>'+'<td class='+'"border-2 border-black">'+saturated_fat+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Calories'+'</td>'+'<td class='+'"border-2 border-black">'+BMR+' Calories/day'+'</td>'+'</tr>'+'</tbody>'
}
function Machighprotein(){
  document.getElementById("tabledata").innerHTML = ""
  updateprotein = parseInt(max_protein-average_protein)
  updatepcal = parseInt((updateprotein*4/2))
  updatepcarb = parseInt(average_carbs + updateccal/4)
  updatepfat = parseInt(average_fats + updatepcal/9)
  document.getElementById("tabledata").innerHTML +='<tbody class="border-2 border-black">' + '<tr>'+'<td class='+'"border-2 border-black">'+'Protein'+'</td>'+'<td class='+'"border-2 border-black">'+max_protein+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Carbs'+'</td>'+'<td class='+'"border-2 border-black">'+updatepcarb+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Fat'+'</td>'+'<td class='+'"border-2 border-black">'+updatepfat+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Sugar'+'</td>'+'<td class='+'"border-2 border-black">'+sugar+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Saturated Fat'+'</td>'+'<td class='+'"border-2 border-black">'+saturated_fat+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Calories'+'</td>'+'<td class='+'"border-2 border-black">'+BMR+' Calories/day'+'</td>'+'</tr>'+'</tbody>'
}


function Macro(){
  let age = document.getElementById("mage").value;
  let gender = document.getElementById("moptions").value;
  let height  = document.getElementById("mheight").value;
  let weight = document.getElementById("mweight").value;
  let activity_type = document.getElementById("mactivity").value;
  let goal  = document.getElementById("mgoal").value;
  //console.log(document.getElementById("moptions").value);
  if(gender == "Male"){
    BMR = parseInt(13.397*weight + 4.799*height - 5.677*age + 88.362);
    //console.log(BMR)
  }
  else{
    BMR = parseInt(9.247*weight + 3.098*height - 4.330*age + 447.593);
    //console.log(BMR)
  }
  if (activity_type == "Basal Metabolic Rate (BMR)"){
    BMR = BMR;
  }
  else if (activity_type == "Little or no exercise (sedentary)"){
    BMR = parseInt((BMR*20/100)+ BMR);
  }
  else if (activity_type == "Exercise 1-3 times a week (Light)"){
    BMR = parseInt((BMR*37.5/100)+ BMR);
  }
  else if (activity_type == "Exercise 4-5 times a week (Moderate)"){
    BMR = parseInt((BMR*46.6/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 3-4 times a week (Active)"){
    BMR = parseInt((BMR*54/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 6-7 times a week (Very Active)"){
    BMR = parseInt((BMR*72/100)+ BMR);
  }
  else{
    BMR = parseInt((BMR*89/100)+ BMR);
  }
  if(goal == "Maintain Weight"){
    BMR = BMR;

  }
  else if (goal == "Weight loss of 0.25 kg per week or 0.5 lb per week"){
    BMR = BMR - 250;
  }
  else if (goal == "Weight loss of 0.5 kg per week or 1 lb per week"){
    BMR = BMR - 500;
  }
  else if (goal == "Weight loss of 1 kg per week or 2 lb per week"){
    BMR = BMR - 1000;
  }
  else if (goal == "Weight gain of 0.5 kg per week or 1 lb per week"){
    BMR = BMR + 500;
  }
  else if (goal == "Weight gain of 1 kg per week or 2 lb per week"){
    BMR = BMR + 1000;
  }
  else if (goal == "Weight gain of 0.25 kg per week or 0.5 lb per week"){
    BMR = BMR + 250;
  }
  //console.log(BMR)
  min_protein = parseInt(3.5/100*BMR)
  average_protein = parseInt(6/100*BMR)
  max_protein = parseInt(8.5/100*BMR)

  min_carbs = parseInt(10.69/100*BMR)
  average_carbs = parseInt(13.33/100*BMR)
  max_carbs = parseInt(17.4566/100*BMR)

  min_fats = parseInt(2.2999/100*BMR)
  average_fats = parseInt(2.8224/100*BMR)
  max_fats = parseInt(3.995/100*BMR)

  sugar = parseInt(2.666/100*BMR)
  saturated_fat = parseInt(1.1163/100*BMR)
  //display the results

  if (age == "") {
    document.getElementById("merror").innerHTML = "Please Enter a valid age.";
}
  else if (height == "") {
    document.getElementById("merror").innerHTML = "Please Enter a valid height"
 }
  else if (weight == "") {
    document.getElementById("merror").innerHTML = "Please Enter a valid weight) "
 }
  else if (activity_type == "Select Activity Type") {
  document.getElementById("merror").innerHTML = "Please Choose Activity type"
}
  else if (goal == "Select Your Goal") {
  document.getElementById("merror").innerHTML = "Please Choose Your Goal "
}
  else{
    document.getElementById("resultguide").innerHTML = ""
    document.getElementById("resultbar").innerHTML = ""
    document.getElementById("tabledata").innerHTML = ""
    document.getElementById("resultguide").innerHTML += "The below result is just an estimation an lavaniya bro it need to be corrected\n"
    document.getElementById("resultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"
    document.getElementById("but").innerHTML = ""
    //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
    document.getElementById("but").innerHTML += '<button type'+'="button" class='+'"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'+' onclick="Macbalanced()">'+'Balanced</button>\n' + '<button type'+'="button" class='+'"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'+' onclick="Maclowfat()">'+'Low Fat</button>\n'+'<button type'+'="button" class='+'"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'+' onclick="Maclowcarbs()">'+'Low Carb</button>\n'+ '<button type'+'="button" class='+'"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'+' onclick="Machighprotein()">'+'High Protein</button>'
    document.getElementById("tabledata").innerHTML +='<tbody class="border-2 border-black">' + '<tr>'+'<td class='+'"border-2 border-black">'+'Protein'+'</td>'+'<td class='+'"border-2 border-black">'+average_protein+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Carbs'+'</td>'+'<td class='+'"border-2 border-black">'+average_carbs+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Fat'+'</td>'+'<td class='+'"border-2 border-black">'+average_fats+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Sugar'+'</td>'+'<td class='+'"border-2 border-black">'+sugar+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Saturated Fat'+'</td>'+'<td class='+'"border-2 border-black">'+saturated_fat+' grams/day'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Calories'+'</td>'+'<td class='+'"border-2 border-black">'+BMR+' Calories/day'+'</td>'+'</tr>'+
   '</tbody>'
  }
}

function cgfr(){
  let cserum = document.getElementById("gcserum").value;
  let cheight  = document.getElementById("gcheight").value;
  if (cserum == "") {
    document.getElementById("cgerror").innerHTML = "Please Enter a valid serum creatinine for children "
    CGFR = ""
  }
  else if (cheight == "") {
    document.getElementById("cgerror").innerHTML = "Please Enter a valid children height "
    CGFR = ""
  }
    else{
      CGFR = 0.413*cheight/cserum; 
      document.getElementById("cgerror").innerHTML = ""


      document.getElementById("cgerror").innerHTML = ""
      document.getElementById("cgresultguide").innerHTML = ""
      document.getElementById("cgresultbar").innerHTML = ""
      document.getElementById("cgtabledata").innerHTML = ""
      document.getElementById("cgresultguide").innerHTML += "The below result is just an estimation an lavaniya bro it need to be corrected\n"
      document.getElementById("cgresultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"
      //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
      document.getElementById("cgtabledata").innerHTML +='<thead class=" border-2 bg-sky-200 border-black "><tr><th>Formulas</th><th>Result</th></tr></thead>'+'<tbody class="border-2 border-black">' + '<tr>'+'<td  class="border-2 border-black">'+'CKD-EPI Formula'+'</td>'+'<td  class="border-2 border-black">'+CGFR+' mL/min/1.73 m2'+
   '</tbody>'

  }
}



function Gfr(){
  // Bhai isme converter ke liye set nahi hai ye dekhna padega
  let serum = document.getElementById("gserum").value;
  let age = document.getElementById("gage").value;
  let gender  = document.getElementById("ggender").value;
  let race = document.getElementById("grace").value;

  if(gender =="Female" && race == "Black" && serum<= 0.7){
    GFR = 166*(serum/0.7)**-0.329*0.993**age;
  }
  else if(gender =="Female" && race == "Black" && serum>0.7){
    GFR = 166*(serum/0.7)**-1.209*0.993**age;
  }
  else if(gender =="Male" && race == "Black" && serum<= 0.9){
    GFR = 163*(serum/0.9)**-0.411*0.993**age;
  }
  else if(gender =="Male" && race == "Black" && serum> 0.9){
    GFR = 163*(serum/0.9)**-1.209*0.993**age;
  }
  else if(gender =="Female" && race == "Non Black" && serum<= 0.7){
    GFR = 144*(serum/0.7)**-0.329*0.993**age;
  }
  else if(gender =="Female" && race == "Non Black" && serum> 0.7){
    GFR = 144*(serum/0.7)**-1.209*0.993**age;
  }
  else if(gender =="Male" && race == "Non Black" && serum<=0.9){
    GFR = 141*(serum/0.9)**-0.411*0.993**age;
  }
  else if(gender =="Male" && race == "Non Black" && serum>0.9){
    GFR = 141*(serum/0.9)**-1.209*0.993**age;
  }
  



  if (age == "") {
    document.getElementById("gerror").innerHTML = "Please Enter a valid age.";
    GFR = ""
}
  else if (serum == "") {
    document.getElementById("gerror").innerHTML = "Please Enter a valid serum creatinine) "
    GFR = ""
 }
  else{
    document.getElementById("gerror").innerHTML = ""
    document.getElementById("gresultguide").innerHTML = ""
    document.getElementById("gresultbar").innerHTML = ""
    document.getElementById("gtabledata").innerHTML = ""
    document.getElementById("gresultguide").innerHTML += "The below result is just an estimation an lavaniya bro it need to be corrected\n"
    document.getElementById("gresultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"
    //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
    document.getElementById("gtabledata").innerHTML +='<thead class=" border-2 bg-sky-200 border-black "><tr><th>Formulas</th><th>Result</th></tr></thead>'+'<tbody class="border-2 border-black">' + '<tr>'+'<td class='+'"border-2 border-black">'+'CKD-EPI Formula'+'</td>'+'<td class='+'"border-2 border-black">'+GFR+' mL/min/1.73 m2'+
   '</tbody>'
}
}


function Bsa(){
  let gender = document.getElementById("bgender").value;
  let weight = document.getElementById("bweight").value;
  let height = document.getElementById("bheight").value;

  dubsa = 0.007184*weight**0.425*height**0.725;
  mobsa = 0.016667*weight**0.5*height**0.5;
  habsa = 0.024265*weight**0.5378*height**0.3964
  gebsa = 0.0235*weight**0.51456*height**0.42246
  bobsa = 0.03330*weight**(0.6157-0.0188*Math.log10(weight))*height**0.3
  fubsa = 0.008883*weight**0.444*height**0.663
  tabsa = 0.007241*weight**0.425*height**0.725
  if(gender == "Male"){
    scbsa = 0.000579479*weight**0.38*height**1.24

  }
  else if (gender == "Female"){
    scbsa = 0.000975482*weight**0.46*height**1.08
    }
  
  if (weight == "") {
    document.getElementById("berror").innerHTML = "Please Enter a valid weight "
    document.getElementById("boutput").innerHTML = ""
  }
  else if (height == "") {
    document.getElementById("berror").innerHTML = "Please Enter a valid height "
    document.getElementById("boutput").innerHTML = ""
  }
  else{      
    document.getElementById("bresultguide").innerHTML = ""
    document.getElementById("bresultbar").innerHTML = ""
    document.getElementById("btabledata").innerHTML = ""
    document.getElementById("bresultguide").innerHTML += "The following are the body surface area results based on popular formulas:\n"
    document.getElementById("bresultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"
    //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
    document.getElementById("btabledata").innerHTML +='<thead  class=" border-2 bg-sky-200 border-black " ><tr><th>Formulas</th><th>Result</th></tr></thead>'+'<tbody  class="border-2 border-black">' + '<tr>'+'<td class='+'"border-2 border-black">'+'Du Bois'+'</td>'+'<td class='+'"border-2 border-black">'+dubsa+' meter Square'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Mosteller'+'</td>'+'<td class='+'"border-2 border-black">'+mobsa+' meters square'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Haycock'+'</td>'+'<td class='+'"border-2 border-black">'+habsa+' meters square'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Gehan & George'+'</td>'+'<td class='+'"border-2 border-black">'+gebsa+' meters square'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Boyd'+'</td>'+'<td class='+'"border-2 border-black">'+bobsa+' meters square'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Fujimoto'+'</td>'+'<td class='+'"border-2 border-black">'+fubsa+' meters square'+'</td>'+'</tr>'+'<td class='+'"border-2 border-black">'+'Takahira'+'</td>'+'<td class='+'"border-2 border-black">'+tabsa+' meters square'+'</td>'+'</tr>'+ '<tr>'+'<td class='+'"border-2 border-black">'+'Schlich'+'</td>'+'<td class='+'"border-2 border-black">'+scbsa+' meters square'+'</td>'+'</tr>'+
   '</tbody>'
   
  }
}


function Protein(){
  let age = document.getElementById("page").value;
  let gender = document.getElementById("pgender").value;
  let height  = document.getElementById("pheight").value;
  let weight = document.getElementById("pweight").value;
  let activity_type = document.getElementById("pactivity").value;

  if(gender == "Male"){
    BMR = parseInt(13.397*weight + 4.799*height - 5.677*age + 88.362);
    //console.log(BMR)
  }
  else{
    BMR = parseInt(9.247*weight + 3.098*height - 4.330*age + 447.593);
    //console.log(BMR)
  }
  if (activity_type == "Basal Metabolic Rate (BMR)"){
    BMR = BMR;
  }
  else if (activity_type == "Little or no exercise (sedentary)"){
    BMR = parseInt((BMR*20/100)+ BMR);
  }
  else if (activity_type == "Exercise 1-3 times a week (Light)"){
    BMR = parseInt((BMR*37.5/100)+ BMR);
  }
  else if (activity_type == "Exercise 4-5 times a week (Moderate)"){
    BMR = parseInt((BMR*46.6/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 3-4 times a week (Active)"){
    BMR = parseInt((BMR*54/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 6-7 times a week (Very Active)"){
    BMR = parseInt((BMR*72/100)+ BMR);
  }
  else{
    BMR = parseInt((BMR*89/100)+ BMR);
  }
  min_cdc = parseInt(BMR/4*10/100)
  max_cdc = parseInt(BMR/4*35/100)

  if (age == "") {
    document.getElementById("perror").innerHTML = "Please Enter a valid age.";
}
  else if (height == "") {
    document.getElementById("perror").innerHTML = "Please Enter a valid height"
 }
  else if (weight == "") {
    document.getElementById("perror").innerHTML = "Please Enter a valid weight) "
 }
  else if (activity_type == "Select Activity Type") {
  document.getElementById("perror").innerHTML = "Please Choose Activity type"
}
else{
    document.getElementById("perror").innerHTML = ""
    document.getElementById("prresultguide").innerHTML = ""
    document.getElementById("prresultbar").innerHTML = ""
    document.getElementById("prresult").innerHTML = ""
    document.getElementById("prresultguide").innerHTML += "The below result is just an estimation an lavaniya bro it need to be corrected\n"
    document.getElementById("prresultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"
    //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
    document.getElementById("prresult").innerHTML = "According to central authority of disease and care You need minimum " + min_cdc + "-" + max_cdc + "grams of Protein \n" + "According to World Health Organization You need 58g of Protein daily."
    
}
}

function Fat(){
  let age = document.getElementById("fage").value;
  let gender = document.getElementById("fgender").value;
  let height  = document.getElementById("fheight").value;
  let weight = document.getElementById("fweight").value;
  let activity_type = document.getElementById("factivity").value;

  if(gender == "Male"){
    BMR = parseInt(13.397*weight + 4.799*height - 5.677*age + 88.362);
    //console.log(BMR)
  }
  else{
    BMR = parseInt(9.247*weight + 3.098*height - 4.330*age + 447.593);
    //console.log(BMR)
  }
  if (activity_type == "Basal Metabolic Rate (BMR)"){
    BMR = BMR;
  }
  else if (activity_type == "Little or no exercise (sedentary)"){
    BMR = parseInt((BMR*20/100)+ BMR);
  }
  else if (activity_type == "Exercise 1-3 times a week (Light)"){
    BMR = parseInt((BMR*37.5/100)+ BMR);
  }
  else if (activity_type == "Exercise 4-5 times a week (Moderate)"){
    BMR = parseInt((BMR*46.6/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 3-4 times a week (Active)"){
    BMR = parseInt((BMR*54/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 6-7 times a week (Very Active)"){
    BMR = parseInt((BMR*72/100)+ BMR);
  }
  else{
    BMR = parseInt((BMR*89/100)+ BMR);
  }
  min_dfallowance = parseInt(BMR/9*20/100)
  max_dfallowance = parseInt(BMR/9*35/100)
  sfallowance = parseInt(BMR/9*10/100)
  sfallowanceh = parseInt(BMR/9*7/100)
  weight_maintain = parseInt(BMR)

  lose_half = parseInt(BMR-500)
  lose_full = parseInt(BMR-1000)
  gain_half = parseInt(BMR+500)
  gain_full = parseInt(BMR+1000)

  hmin_dfallowance = parseInt(lose_half/9*20/100)
  hmax_dfallowance = parseInt(lose_half/9*35/100)
  hsfallowance = parseInt(lose_half/9*10/100)
  hsfallowanceh = parseInt(lose_half/9*7/100)

  fmin_dfallowance = parseInt(lose_full/9*20/100)
  fmax_dfallowance = parseInt(lose_full/9*35/100)
  fsfallowance = parseInt(lose_full/9*10/100)
  fsfallowanceh = parseInt(lose_full/9*7/100)

  ghmin_dfallowance = parseInt(gain_half/9*20/100)
  ghmax_dfallowance = parseInt(gain_half/9*35/100)
  ghsfallowance = parseInt(gain_half/9*10/100)
  ghsfallowanceh = parseInt(gain_half/9*7/100)

  gfmin_dfallowance = parseInt(gain_full/9*20/100)
  gfmax_dfallowance = parseInt(gain_full/9*35/100)
  gfsfallowance = parseInt(gain_full/9*10/100)
  gfsfallowanceh = parseInt(gain_full/9*7/100)

  if (age == "") {
    document.getElementById("ferror").innerHTML = "Please Enter a valid age.";
}
  else if (height == "") {
    document.getElementById("ferror").innerHTML = "Please Enter a valid height"
 }
  else if (weight == "") {
    document.getElementById("ferror").innerHTML = "Please Enter a valid weight) "
 }
  else if (activity_type == "Select Activity Type") {
    document.getElementById("ferror").innerHTML = "Please Choose Activity type"
}
  else{
    document.getElementById("ferror").innerHTML = ""
    document.getElementById("fresultguide").innerHTML = ""
    document.getElementById("fresultbar").innerHTML = ""
    document.getElementById("ftabledata").innerHTML = ""
    document.getElementById("fresultguide").innerHTML += "The below result is just an estimation an lavaniya bro it need to be corrected\n"
    document.getElementById("fresultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"
    //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
    document.getElementById("ftabledata").innerHTML +='<thead class=" border-2 bg-sky-200 border-black "><tr><th>Goal</th><th>Daily Calorie Allowance</th><th>Daily Fat Allowance (20-35%)*</th><th>Saturated Fat Allowance (10%)*</th><th>Saturated Fat Allowance (7)*</th></tr></thead>'+'<tbody>' +'<tr>'+'<td class='+'"border-2 border-black">'+'Weight Maintainance'+'</td>'+'<td class='+'"border-2 border-black">'+weight_maintain+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ min_dfallowance + "-"+ max_dfallowance +' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ sfallowance+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ sfallowanceh+' grams'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Lose half kg per week'+'</td>'+'<td class='+'"border-2 border-black">'+lose_half+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ hmin_dfallowance + "-"+ hmax_dfallowance +' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ hsfallowance+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ hsfallowanceh+' grams'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Lose 1 Kg per week'+'</td>'+'<td class='+'"border-2 border-black">'+lose_full+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ fmin_dfallowance + "-"+ fmax_dfallowance +' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ fsfallowance+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ fsfallowanceh+' grams'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Gain half Kg per week'+'</td>'+'<td class='+'"border-2 border-black">'+gain_half+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ ghmin_dfallowance + "-"+ ghmax_dfallowance +' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ ghsfallowance+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ ghsfallowanceh+' grams'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Gain 1 Kg Per Week'+'</td>'+'<td class='+'"border-2 border-black">'+gain_full+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ gfmin_dfallowance + "-"+ gfmax_dfallowance +' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ gfsfallowance+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ "<"+ gfsfallowanceh+' grams'+'</td>'+'</tr>'+
   '</tbody>'
}

}

function Carbs(){
  let age = document.getElementById("caage").value;
  let gender = document.getElementById("cagender").value;
  let height  = document.getElementById("caheight").value;
  let weight = document.getElementById("caweight").value;
  let activity_type = document.getElementById("caactivity").value;

  if(gender == "Male"){
    BMR = parseInt(13.397*weight + 4.799*height - 5.677*age + 88.362);
    //console.log(BMR)
  }
  else{
    BMR = parseInt(9.247*weight + 3.098*height - 4.330*age + 447.593);
    //console.log(BMR)
  }
  if (activity_type == "Basal Metabolic Rate (BMR)"){
    BMR = BMR;
  }
  else if (activity_type == "Little or no exercise (sedentary)"){
    BMR = parseInt((BMR*20/100)+ BMR);
  }
  else if (activity_type == "Exercise 1-3 times a week (Light)"){
    BMR = parseInt((BMR*37.5/100)+ BMR);
  }
  else if (activity_type == "Exercise 4-5 times a week (Moderate)"){
    BMR = parseInt((BMR*46.6/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 3-4 times a week (Active)"){
    BMR = parseInt((BMR*54/100)+ BMR);
  }
  else if (activity_type == "Intense exercise 6-7 times a week (Very Active)"){
    BMR = parseInt((BMR*72/100)+ BMR);
  }
  else{
    BMR = parseInt((BMR*89/100)+ BMR);
  }
  dcallowance = parseInt(BMR)
  forty = parseInt(BMR/4*40/100)
  fifty_five = parseInt(BMR/4*55/100)
  sixty_five = parseInt(BMR/4*65/100)
  seventy_five = parseInt(BMR/4*75/100)

  lose_half = parseInt(BMR-500)
  lose_full = parseInt(BMR-1000)
  gain_half = parseInt(BMR+500)
  gain_full = parseInt(BMR+1000)

  hdcallowance = parseInt(lose_half)
  hforty = parseInt(lose_half/4*40/100)
  hfifty_five = parseInt(lose_half/4*55/100)
  hsixty_five = parseInt(lose_half/4*65/100)
  hseventy_five = parseInt(lose_half/4*75/100)

  fdcallowance = parseInt(lose_full)
  fforty = parseInt(lose_full/4*40/100)
  ffifty_five = parseInt(lose_full/4*55/100)
  fsixty_five = parseInt(lose_full/4*65/100)
  fseventy_five = parseInt(lose_full/4*75/100)

  ghdcallowance = parseInt(gain_half)
  ghforty = parseInt(gain_half/4*40/100)
  ghfifty_five = parseInt(gain_half/4*55/100)
  ghsixty_five = parseInt(gain_half/4*65/100)
  ghseventy_five = parseInt(gain_half/4*75/100)

  gfdcallowance = parseInt(gain_full)
  gfforty = parseInt(gain_full/4*40/100)
  gffifty_five = parseInt(gain_full/4*55/100)
  gfsixty_five = parseInt(gain_full/4*65/100)
  gfseventy_five = parseInt(gain_full/4*75/100)
  if (age == "") {
    document.getElementById("caerror").innerHTML = "Please Enter a valid age.";
}
  else if (height == "") {
    document.getElementById("caerror").innerHTML = "Please Enter a valid height"
 }
  else if (weight == "") {
    document.getElementById("caerror").innerHTML = "Please Enter a valid weight) "
 }
  else if (activity_type == "Select Activity Type") {
    document.getElementById("caerror").innerHTML = "Please Choose Activity type"
}
  else{
    document.getElementById("caerror").innerHTML = ""
    document.getElementById("caresultguide").innerHTML = ""
    document.getElementById("caresultbar").innerHTML = ""
    document.getElementById("catabledata").innerHTML = ""
    document.getElementById("caresultguide").innerHTML += "The below result is just an estimation an lavaniya bro it need to be corrected\n"
    document.getElementById("caresultbar").innerHTML += '<div class='+'"affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">'+"Result" + "</div>"
    //<div class="  affilate ad container mx-auto bg-gray-200 px-4 py-4 mt-2">affilate ad</div>
    document.getElementById("catabledata").innerHTML +='<thead class=" border-2 bg-sky-200 border-black "><tr><th>Goal</th><th>Daily Calorie Allowance</th><th>40%*</th><th>55%*</th><th>65%*</th><th>75%*</th></tr></thead>'+'<tbody class="border-2 border-black">' +'<tr>'+'<td class='+'"border-2 border-black">'+'Weight Maintainance'+'</td>'+'<td class='+'"border-2 border-black">'+dcallowance+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+forty+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+fifty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+sixty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+seventy_five+' Calories'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Lose Half Kg'+'</td>'+'<td class='+'"border-2 border-black">'+hdcallowance+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+hforty+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+hfifty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+hsixty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+hseventy_five+' Calories'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Lose 1 Kg'+'</td>'+'<td class='+'"border-2 border-black">'+fdcallowance+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+fforty+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ffifty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+fsixty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+fseventy_five+' Calories'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Gain half Kg'+'</td>'+'<td class='+'"border-2 border-black">'+ghdcallowance+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ghforty+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+ghfifty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ghsixty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+ghseventy_five+' Calories'+'</td>'+'</tr>'+'<tr>'+'<td class='+'"border-2 border-black">'+'Gain half Kg'+'</td>'+'<td class='+'"border-2 border-black">'+gfdcallowance+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+gfforty+' grams'+'</td>'+'<td class='+'"border-2 border-black">'+gffifty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+gfsixty_five+' Calories'+'</td>'+'<td class='+'"border-2 border-black">'+gfseventy_five+' Calories'+'</td>'+'</tr>'+
   '</tbody>'
}

}

function Due(){
  let first_day = document.getElementById("dfirst_day").value;
  let average_length_one = document.getElementById("daverage_length").value;
  const date = new Date("'"+first_day+"'");
  const length_Array = average_length_one.split(" ");
  let average_length = parseInt(length_Array[0]);
  if (average_length<28){
    filtered = parseInt(28-average_length)
    due_date = date.setDate(date.getDate()-filtered)
  }
  else if(average_length>28){
    filtered_two = average_length-28
    due_date = date.setDate(date.getDate()+filtered_two)
  }
  if (first_day == "") {
      document.getElementById("derror").innerHTML = "Please Choose a valid date of Your Menstrual Period ";
  }
   else if (average_length_one == "") {
      document.getElementById("derror").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
   }
  else  {  
    document.getElementById("derror").innerHTML = ""
    date.setDate(date.getDate() + 280);
    // display the Result
    document.getElementById("doutput").innerHTML = "Your estimated due date is on:" + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    document.getElementById("derror").innerHTML = ""
    }
}

function Ovulation(){
  let first_day = document.getElementById("ofirst_day").value;
  let average_length_one = document.getElementById("oaverage_length").value;
  const date = new Date("'"+first_day+"'");
  const length_Array = average_length_one.split(" ");
  let average_length = parseInt(length_Array[0]);
  date.setDate(date.getDate() + average_length);
  const ovul_date = new Date("'"+first_day+"'");
  ovul_date.setDate(ovul_date.getDate() + average_length/2)

  const preg_date = new Date("'"+first_day+"'");
  preg_date.setDate(preg_date.getDate() + average_length +1);
  console.log(preg_date)
  const fer_date = new Date("'"+first_day+"'"); 
  fer_date.setDate(fer_date.getDate()/2)
  
  if (first_day == "") {
      document.getElementById("oerror").innerHTML = "Please Choose a valid date of Your Menstrual Period ";
  }
   else if (average_length_one == "") {
      document.getElementById("oerror").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
   }
  else  {  
    document.getElementById("oerror").innerHTML = ""
    date.setDate(date.getDate() + 280);
    // display the Result
    document.getElementById("ooutput").innerHTML = "Your Next Period is on: " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    document.getElementById("ooutput1").innerHTML = "Your Pregnancy test day is on: " + preg_date.getDate() + "/" + (preg_date.getMonth()+1) + "/" + preg_date.getFullYear();
    document.getElementById("ooutput2").innerHTML = "Your ovulation day is on: " + ovul_date.getDate() + "/" + (ovul_date.getMonth()+1) + "/" + ovul_date.getFullYear();
    }
    document.getElementById("oerror").innerHTML = ""
    }

    function Conception(){
      let first_day = document.getElementById("cfirst_day").value;
      let average_length_one = document.getElementById("caverage_length").value;
      const date = new Date("'"+first_day+"'");
      const length_Array = average_length_one.split(" ");
      let average_length = parseInt(length_Array[0]);
      date.setDate(date.getDate() + average_length);
      const temp = new Date("'"+first_day+"'");
      const temp1 = new Date("'"+first_day+"'");
      const temp2 = new Date("'"+first_day+"'");
      const temp3 = new Date("'"+first_day+"'");
      const temp4 = new Date("'"+first_day+"'");
      temp.setDate(temp.getDate() + average_length/2 -2)
      temp1.setDate(temp1.getDate() + average_length/2 -1)
      temp2.setDate(temp2.getDate() + average_length)
      temp3.setDate(temp3.getDate() + average_length/2 +1)
      temp4.setDate(temp4.getDate() + average_length/2 +2)
      if (first_day == "") {
        document.getElementById("cerror").innerHTML = "Please Choose a valid date of Your Menstrual Period ";
    }
     else if (average_length_one == "") {
        document.getElementById("cerror").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
     }
    else  {  
      document.getElementById("cerror").innerHTML = ""
      date.setDate(date.getDate() + 280);
      // display the Result
      document.getElementById("coutput").innerHTML = "Your Conception date can be in between \n" + temp.getDate() + "/" + (temp.getMonth()+1) + "/" + temp.getFullYear();
      document.getElementById("coutput1").innerHTML = temp1.getDate() + "/" + (temp1.getMonth()+1) + "/" + temp1.getFullYear();
      document.getElementById("coutput2").innerHTML = temp2.getDate() + "/" + (temp2.getMonth()+1) + "/" + temp2.getFullYear();
      document.getElementById("coutput3").innerHTML = temp3.getDate() + "/" + (temp3.getMonth()+1) + "/" + temp3.getFullYear();
      document.getElementById("coutput4").innerHTML = temp4.getDate() + "/" + (temp4.getMonth()+1) + "/" + temp4.getFullYear();
      
      }
      document.getElementById("cerror").innerHTML = ""
      }
  
      function bmi() {
        let bmi_age = document.getElementById("bmi_age").value;
        let bmi_height = document.getElementById("bmi_height").value;
        let bmi_weight = document.getElementById("bmi_weight").value;
        if (bmi_age == "") {
          document.getElementById("bmi_output1").innerHTML = "Please Enter a valid age "
      
        }
        else if (bmi_height == "") {
          document.getElementById("bmi_output1").innerHTML = "Please Enter a valid  height "
      
        }
        else if (bmi_weight == "") {
          document.getElementById("bmi_output1").innerHTML = "Please Enter a valid  weight "
      
        }
        else {
          bmi1 = bmi_weight / (bmi_height * bmi_height);
          document.getElementById("bmi_output1").innerHTML = "Your estimated BMI is " + bmi1
      
        }
      
        if (bmi1 < 18.5) {
          document.getElementById("bmi_output2").innerHTML = "You are underweight"
      
        }
        else if (24.9 > bmi1 > 18.5) {
          document.getElementById("bmi_output2").innerHTML = "You have Healthy Weight "
      
        }
        else if (29.9 > bmi1 > 25) {
          document.getElementById("bmi_output2").innerHTML = "You are overweight "
      
        }
        else {
          document.getElementById("bmi_output2").innerHTML = "You are obesed "
      
        }
      }
      
      function bmr() {
        let bmr_age = document.getElementById("bmr_age").value;
        let bmr_gender = document.getElementById("bmr_gender").value;
        let bmr_height = document.getElementById("bmr_height").value;
        let bmr_weight = document.getElementById("bmr_weight").value;
      
        //console.log(document.getElementById("moptions").value);
        if (bmr_gender == "Male") {
          bmr1 = parseInt(13.397 * bmr_weight + 4.799 * bmr_height - 5.677 * bmr_age + 88.362);
          document.getElementById("bmr_output1").innerHTML = "Your estimated BMR is " + bmr1
          //console.log(BMR)
        }
        else {
          bmr1 = parseInt(9.247 * bmr_weight + 3.098 * bmr_height - 4.330 * bmr_age + 447.593);
          document.getElementById("bmr_output1").innerHTML = "Your estimated BMR is " + bmr1
          //console.log(BMR)
        }
      }
      
      function bodyfat() {
        let bodyfat_age = document.getElementById("bodyfat_age").value;
        let bodyfat_gender = document.getElementById("bodyfat_gender").value;
        let bodyfat_height = document.getElementById("bodyfat_height").value;
        let bodyfat_weight = document.getElementById("bodyfat_weight").value;
        let bodyfat_neck = document.getElementById("bodyfat_neck").value;
        let bodyfat_waist = document.getElementById("bodyfat_waist").value;
        if (bodyfat_age == "") {
          document.getElementById("bodyfat_output1").innerHTML = "Please Enter a valid age "
      
        }
        else if (bodyfat_height == "") {
          document.getElementById("bodyfat_output1").innerHTML = "Please Enter a valid height "
      
        }
        else if (bodyfat_weight == "") {
          document.getElementById("bodyfat_output1").innerHTML = "Please Enter a valid weight "
      
        }
        else if (bodyfat_gender == "") {
          document.getElementById("bodyfat_output1").innerHTML = "Please Enter a valid gender "
      
        }
        else if (bodyfat_neck == "") {
          document.getElementById("bodyfat_output1").innerHTML = "Please Enter a valid neck size "
      
        }
        else if (bodyfat_waist == "") {
          document.getElementById("bodyfat_output1").innerHTML = "Please Enter a valid waist size"
      
        }
        else {
          if (bodyfat_gender == "Male") {
            BFP = (86.010 * Math.log10(bodyfat_neck)) - (70.041 * Math.log10(bodyfat_height)) + 36.76
            document.getElementById("bodyfat_output1").innerHTML = "Your Body Fat Percentage is "
              + BFP
          }
          else {
            BFP = (163.205 * Math.log10(bodyfat_waist + bodyfat_hip - bodyfat_neck)) - (97.684 * (Math.log10(bodyfat_height))) - 78.387
            document.getElementById("bodyfat_output1").innerHTML = "Your Body Fat Percentage is "
              + BFP
          }
        }
      }
      
      
      function calorieburned() {
        let calorieburned_weight = document.getElementById("calorieburned_weight").value;
        let calorieburned_activity = document.getElementById("calorieburned_activity").value;
        let calorieburned_duration = document.getElementById("calorieburned_duration").value;
        //console.log(document.getElementById("moptions").value);
        if (calorieburned_activity == "writing, desk work, using computer") {
          calorie1 = parseInt((1.5 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "walking fastly") {
          calorie1 = parseInt((2 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "walking slowly") {
          calorie1 = parseInt((3 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "sweeping or mopping floors, vacuuming carpets") {
          calorie1 = parseInt((3 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "yoga session with asanas and pranayama") {
          calorie1 = parseInt((3.3 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "Tennis doubles") {
          calorie1 = parseInt((5 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "Weight lifting (moderate intensity)") {
          calorie1 = parseInt((5 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "aerobic dancing, medium effort") {
          calorie1 = parseInt((6 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "bicycling light effort") {
          calorie1 = parseInt((6 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "jumping jacks") {
          calorie1 = parseInt((7 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "sun salutation (Surya Namaskar, vigorous with transition jumps)") {
          calorie1 = parseInt((7.4 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "basketball game") {
          calorie1 = parseInt((8 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "swimming moderately") {
          calorie1 = parseInt((8 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "jogging") {
          calorie1 = parseInt((8.8 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "rope jumping") {
          calorie1 = parseInt((9.8 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "soccer") {
          calorie1 = parseInt((10.3 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "rope jumping (84/min)") {
          calorie1 = parseInt((10.5 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else if (calorieburned_activity == "rope jumping (100/min)") {
          calorie1 = parseInt((11 * calorieburned_duration * calorieburned_weight) / 200);
        }
        else {
          calorie1 = parseInt((11.2 * calorieburned_duration * calorieburned_weight) / 200);
        }
      
        if (calorieburned_activity == "") {
          document.getElementById("calorieburned_output1").innerHTML = "Please Enter a valid activity.";
        }
        else if (calorieburned_duration == "") {
          document.getElementById("calorieburned_output1").innerHTML = "Please Enter a valid duration"
        }
        else if (calorieburned_weight == "") {
          document.getElementById("calorieburned_output1").innerHTML = "Please Enter a valid weight) "
        }
      
        else {
          document.getElementById("calorieburned_output1").innerHTML = "You burned " + calorie1 + " calories"
      
        }
      }
      
      
      
      
      
      function calorie() {
        let calorie_age = document.getElementById("calorie_age").value;
        let calorie_height = document.getElementById("calorie_height").value;
        let calorie_weight = document.getElementById("calorie_weight").value;
        let calorie_activity = document.getElementById("calorie_activity").value;
        let calorie_gender = document.getElementById("calorie_gender").value;
        //console.log(document.getElementById("moptions").value);
        if (calorie_gender == "Male") {
          calorie_bmr1 = parseInt(13.397 * calorie_weight + 4.799 * calorie_height - 5.677 * calorie_age + 88.362);
      
          //console.log(BMR)
        }
        else {
          calorie_bmr1 = parseInt(9.247 * calorie_weight + 3.098 * calorie_height - 4.330 * calorie_age + 447.593);
      
          //console.log(BMR)
        }
        if (calorie_activity == "writing, desk work, using computer") {
          calorie11 = parseInt(1.5 * calorie_bmr1);
        }
        else if (calorie_activity == "walking fastly") {
          calorie11 = parseInt(2 * calorie_bmr1);
        }
        else if (calorie_activity == "walking slowly") {
          calorie11 = parseInt(3 * calorie_bmr1);
        }
        else if (calorie_activity == "sweeping or mopping floors, vacuuming carpets") {
          calorie11 = parseInt(3 * calorie_bmr1);
        }
        else if (calorie_activity == "yoga session with asanas and pranayama") {
          calorie11 = parseInt(3.3 * calorie_bmr1);
        }
        else if (calorie_activity == "Tennis doubles") {
          calorie11 = parseInt(5 * calorie_bmr1);
        }
        else if (calorie_activity == "Weight lifting (moderate intensity)") {
          calorie11 = parseInt(5 * calorie_bmr1);
        }
        else if (calorie_activity == "aerobic dancing, medium effort") {
          calorie11 = parseInt(6 * calorie_bmr1);
        }
        else if (calorie_activity == "bicycling light effort") {
          calorie11 = parseInt(6 * calorie_bmr1);
        }
        else if (calorie_activity == "jumping jacks") {
          calorie11 = parseInt(7 * calorie_bmr1);
        }
        else if (calorie_activity == "sun salutation (Surya Namaskar, vigorous with transition jumps)") {
          calorie11 = parseInt(7.4 * calorie_bmr1);
        }
        else if (calorie_activity == "basketball game") {
          calorie11 = parseInt(8 * calorie_bmr1);
        }
        else if (calorie_activity == "swimming moderately") {
          calorie11 = parseInt(8 * calorie_bmr1);
        }
        else if (calorie_activity == "jogging") {
          calorie1 = parseInt(8.8 * calorie_bmr1);
        }
        else if (calorie_activity == "rope jumping") {
          calorie11 = parseInt(9.8 * calorie_bmr1);
        }
        else if (calorie_activity == "soccer") {
          calorie11 = parseInt(10.3 * calorie_bmr1);
        }
        else if (calorie_activity == "rope jumping (84/min)") {
          calorie11 = parseInt(10.5 * calorie_bmr1);
        }
        else if (calorie_activity == "rope jumping (100/min)") {
          calorie11 = parseInt(11 * calorie_bmr1);
        }
        else {
          calorie11 = parseInt(11.2 * calorie_bmr1);
        }
      
        if (calorie_activity == "") {
          document.getElementById("calorie_output1").innerHTML = "Please Enter a valid activity.";
        }
        else if (calorie_age == "") {
          document.getElementById("calorie_output1").innerHTML = "Please Enter a valid age"
        }
        else if (calorie_weight == "") {
          document.getElementById("calorie_output1").innerHTML = "Please Enter a valid weight) "
        }
        else if (calorie_height == "") {
          document.getElementById("calorie_output1").innerHTML = "Please Enter a valid height) "
        }
        else if (calorie_gender == "") {
          document.getElementById("calorie_output1").innerHTML = "Please Enter a valid gender) "
        }
      
        else {
          document.getElementById("calorie_output1").innerHTML = "You gained " + calorie11 + " calories"
      
        }
      }
      
      
      function healthyweight() {
        let healthyweight_height = document.getElementById("healthyweight_height").value;
        hweight1 = parseInt((healthyweight_height * healthyweight_height) * 18.5);
        hweight2 = parseInt((healthyweight_height * healthyweight_height) * 25);
        document.getElementById("healthyweight_output1").innerHTML = "Your healthy weight ranges from " + hweight1 + " to " + hweight2
      
      }
      
      
      function idealweight() {
        let idealweight_age = document.getElementById("idealweight_age").value;
        let idealweight_gender = document.getElementById("idealweight_gender").value;
        let idealweight_height = document.getElementById("idealweight_height").value;
        idealweight_length = idealweight_height / 2.54
        iw_length_feet = Math.floor(idealweight_length / 12)
        iw_length_inch = idealweight_length - (12 * iw_length_feet)
        if (idealweight_height > 152.4) {
          if (idealweight_gender == "Male") {
            idealweight_weight = 50 + (2.3 * iw_lenght_inch)
            document.getElementById("idealweight_output1").innerHTML = "Your ideal is" + idealweight_weight +" kg"
          }
      
          else{
            idealweight_weight = 45.5 + (2.3 * iw_lenght_inch)
            document.getElementById("idealweight_output1").innerHTML = "Your ideal is" + idealweight_weight +" kg"
          }
        }
      
      
        else{
          if (idealweight_gender == "Male") {
            idealweight_weight = 50 - (2.3 * iw_lenght_inch)
            document.getElementById("idealweight_output1").innerHTML = "Your ideal is" + idealweight_weight +" kg"
          }
      
          else{
            idealweight_weight = 45.5 - (2.3 * iw_lenght_inch)
            document.getElementById("idealweight_output1").innerHTML = "Your ideal is" + idealweight_weight +" kg"
          }
        }
      }
      
      
      function leanbody() {
      
      }
      
      function ww() {
        let ww_foodenergy = document.getElementById("ww_foodenergy").value;
        let ww_sugar = document.getElementById("ww_sugar").value;
        let ww_fat = document.getElementById("ww_fat").value;
        let ww_protein = document.getElementById("ww_protein").value;
        ww_point = (ww_foodenergy * 0.0305) + (ww_fat * 0.275) + (ww_sugar * 0.12) - (ww_protein * 0.098);
        document.getElementById("ww_output1").innerHTML = "Your weight watcher point is " + ww_point
      }
      
      
      
      
      function Period() {
        let first_day = document.getElementById("First_day").value;;
        let how_long = document.getElementById("How_long").value;
        let average_length_one = document.getElementById("Average_length").value;
        const date = new Date("'" + first_day + "'");
        const first_date = new Date("'" + first_day + "'")
        const second_date = new Date("'" + first_day + "'")
        if (first_day == "") {
          document.getElementById("error").innerHTML = "Please Choose a valid date of Your Menstrual Period ";
      
        }
        else if (how_long == "") {
          document.getElementById("error").innerHTML = "Please select a valid input from how long your period lasts"
        }
        else if (average_length_one == "") {
          document.getElementById("error").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
        }
        else {
          document.getElementById("error").innerHTML = ""
          const myArray = how_long.split(" ");
          let day = myArray[0];
          const length_Array = average_length_one.split(" ");
          let average_length = parseInt(length_Array[0]);
          next_period = date.setDate(date.getDate() + average_length);
          document.getElementById("How_long_range").innerHTML = "How Long Your Period Lasts"
          for (let i = 0; i <= day - 1; i++) {
            document.getElementById("how_long_data" + i).innerHTML = (first_date.getDate() + i) + "-" + (first_date.getMonth() + 1) + "-" + first_date.getFullYear() + "\n";
          }
          ovulation_date = parseInt(date.getDate() / 2)
          const oval = new Date("'" + first_day + "'");
          oval.setDate(ovulation_date)
          document.getElementById("ovulation_date").innerHTML = "Your Most Probable Ovulation Days"
          for (let j = 0; j <= day - 1; j++) {
            //oval.setDate(oval.getDate() +j);
            document.getElementById("ovulation_date" + j).innerHTML = (oval.getDate() + j) + "-" + (oval.getMonth() + 1) + "-" + oval.getFullYear() + "\n";
          }
          // display the Result
          document.getElementById("next_per").innerHTML = "Your Next Period Date is:"
          next_period = parseInt(second_date.getDate() + average_length)
          second_date.setDate(next_period)
          document.getElementById("next_period").innerHTML = second_date.getDate() + "-" + (second_date.getMonth() + 1) + "-" + second_date.getFullYear() + "\n";
        }
      }
      
      
      function Macro() {
        let age = document.getElementById("mage").value;
        let gender = document.getElementById("moptions").value;
        let height = document.getElementById("mheight").value;
        let weight = document.getElementById("mweight").value;
        let activity_type = document.getElementById("mactivity").value;
        let goal = document.getElementById("mgoal").value;
        //console.log(document.getElementById("moptions").value);
        if (gender == "Male") {
          BMR = parseInt(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
          //console.log(BMR)
        }
        else {
          BMR = parseInt(9.247 * weight + 3.098 * height - 4.330 * age + 447.593);
          //console.log(BMR)
        }
        if (activity_type == "Basal Metabolic Rate (BMR)") {
          BMR = BMR;
        }
        else if (activity_type == "Little or no exercise (sedentary)") {
          BMR = parseInt((BMR * 20 / 100) + BMR);
        }
        else if (activity_type == "Exercise 1-3 times a week (Light)") {
          BMR = parseInt((BMR * 37.5 / 100) + BMR);
        }
        else if (activity_type == "Exercise 4-5 times a week (Moderate)") {
          BMR = parseInt((BMR * 46.6 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 3-4 times a week (Active)") {
          BMR = parseInt((BMR * 54 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 6-7 times a week (Very Active)") {
          BMR = parseInt((BMR * 72 / 100) + BMR);
        }
        else {
          BMR = parseInt((BMR * 89 / 100) + BMR);
        }
        if (goal == "Maintain Weight") {
          BMR = BMR;
      
        }
        else if (goal == "Weight loss of 0.25 kg per week or 0.5 lb per week") {
          BMR = BMR - 250;
        }
        else if (goal == "Weight loss of 0.5 kg per week or 1 lb per week") {
          BMR = BMR - 500;
        }
        else if (goal == "Weight loss of 1 kg per week or 2 lb per week") {
          BMR = BMR - 1000;
        }
        else if (goal == "Weight gain of 0.5 kg per week or 1 lb per week") {
          BMR = BMR + 500;
        }
        else if (goal == "Weight gain of 1 kg per week or 2 lb per week") {
          BMR = BMR + 1000;
        }
        else if (goal == "Weight gain of 0.25 kg per week or 0.5 lb per week") {
          BMR = BMR + 250;
        }
        //console.log(BMR)
        min_protein = parseInt(3.5 / 100 * BMR)
        average_protein = parseInt(6 / 100 * BMR)
        max_protein = parseInt(8.5 / 100 * BMR)
      
        min_carbs = parseInt(10.69 / 100 * BMR)
        average_carbs = parseInt(13.33 / 100 * BMR)
        max_carbs = parseInt(17.4566 / 100 * BMR)
      
        min_fats = parseInt(2.2999 / 100 * BMR)
        average_fats = parseInt(2.8224 / 100 * BMR)
        max_fats = parseInt(3.995 / 100 * BMR)
      
        sugar = parseInt(2.666 / 100 * BMR)
        saturated_fat = parseInt(1.1163 / 100 * BMR)
        //display the results
      
        if (age == "") {
          document.getElementById("merror").innerHTML = "Please Enter a valid age.";
        }
        else if (height == "") {
          document.getElementById("merror").innerHTML = "Please Enter a valid height"
        }
        else if (weight == "") {
          document.getElementById("merror").innerHTML = "Please Enter a valid weight) "
        }
        else if (activity_type == "Select Activity Type") {
          document.getElementById("merror").innerHTML = "Please Choose Activity type"
        }
        else if (goal == "Select Your Goal") {
          document.getElementById("merror").innerHTML = "Please Choose Your Goal "
        }
        else {
          document.getElementById("mprotein").innerHTML = "You need minimum " + min_protein + " grams of Protein" + " and averagely " + average_protein + "grams of Protein " + "and maximum " + max_protein + " grams of Protein.\n"
          document.getElementById("mcarbs").innerHTML = "You need minimum " + min_carbs + " grams of carbohydrate's" + " and averagely " + average_carbs + "grams of carbohydrate's " + "and maximum " + max_carbs + " grams of carbohydrate's.\n"
          document.getElementById("mfats").innerHTML = "You need minimum " + min_fats + " grams of fat's" + " and averagely " + average_fats + "grams of fat's " + "and maximum " + max_fats + " grams of fats.\n"
          document.getElementById("msugar").innerHTML = "You need less than " + sugar + " grams of sugar.\n"
          document.getElementById("msaturated").innerHTML = "You need less than " + saturated_fat + " grams of saturated fat's.\n"
          document.getElementById("mcalorie").innerHTML = "You should consume atleast " + BMR + " calories.\n"
      
        }
      
      
      }
      
      
      function cgfr() {
        let cserum = document.getElementById("gcserum").value;
        let cheight = document.getElementById("gcheight").value;
        if (cserum == "") {
          document.getElementById("cgerror").innerHTML = "Please Enter a valid serum creatinine for children "
          CGFR = ""
        }
        else if (cheight == "") {
          document.getElementById("cgerror").innerHTML = "Please Enter a valid children height "
          CGFR = ""
        }
        else {
          CGFR = 0.413 * cheight / cserum;
          document.getElementById("cGFR").innerHTML = "Your estimated GFR is " + CGFR
          document.getElementById("cgerror").innerHTML = ""
        }
      }
      
      
      
      function Gfr() {
        // Bhai isme converter ke liye set nahi hai ye dekhna padega
        let serum = document.getElementById("gserum").value;
        let age = document.getElementById("gage").value;
        let gender = document.getElementById("ggender").value;
        let race = document.getElementById("grace").value;
      
        if (gender == "Female" && race == "Black" && serum <= 0.7) {
          GFR = 166 * (serum / 0.7) ** -0.329 * 0.993 ** age;
        }
        else if (gender == "Female" && race == "Black" && serum > 0.7) {
          GFR = 166 * (serum / 0.7) ** -1.209 * 0.993 ** age;
        }
        else if (gender == "Male" && race == "Black" && serum <= 0.9) {
          GFR = 163 * (serum / 0.9) ** -0.411 * 0.993 ** age;
        }
        else if (gender == "Male" && race == "Black" && serum > 0.9) {
          GFR = 163 * (serum / 0.9) ** -1.209 * 0.993 ** age;
        }
        else if (gender == "Female" && race == "Non Black" && serum <= 0.7) {
          GFR = 144 * (serum / 0.7) ** -0.329 * 0.993 ** age;
        }
        else if (gender == "Female" && race == "Non Black" && serum > 0.7) {
          GFR = 144 * (serum / 0.7) ** -1.209 * 0.993 ** age;
        }
        else if (gender == "Male" && race == "Non Black" && serum <= 0.9) {
          GFR = 141 * (serum / 0.9) ** -0.411 * 0.993 ** age;
        }
        else if (gender == "Male" && race == "Non Black" && serum > 0.9) {
          GFR = 141 * (serum / 0.9) ** -1.209 * 0.993 ** age;
        }
      
      
      
      
        if (age == "") {
          document.getElementById("gerror").innerHTML = "Please Enter a valid age.";
          GFR = ""
        }
        else if (serum == "") {
          document.getElementById("gerror").innerHTML = "Please Enter a valid serum creatinine) "
          GFR = ""
        }
        else {
          document.getElementById("GFR").innerHTML = "Your estimated GFR is " + GFR
          document.getElementById("gerror").innerHTML = ""
        }
      }
      
      function Bsa() {
        let gender = document.getElementById("bgender").value;
        let weight = document.getElementById("bweight").value;
        let height = document.getElementById("bheight").value;
      
        dubsa = 0.007184 * weight ** 0.425 * height ** 0.725;
        mobsa = 0.016667 * weight ** 0.5 * height ** 0.5;
        habsa = 0.024265 * weight ** 0.5378 * height ** 0.3964
        gebsa = 0.0235 * weight ** 0.51456 * height ** 0.42246
        bobsa = 0.03330 * weight ** (0.6157 - 0.0188 * Math.log10(weight)) * height ** 0.3
        fubsa = 0.008883 * weight ** 0.444 * height ** 0.663
        tabsa = 0.007241 * weight ** 0.425 * height ** 0.725
        if (gender == "Male") {
          scbsa = 0.000579479 * weight ** 0.38 * height ** 1.24
      
        }
        else if (gender == "Female") {
          scbsa = 0.000975482 * weight ** 0.46 * height ** 1.08
        }
      
        if (weight == "") {
          document.getElementById("berror").innerHTML = "Please Enter a valid weight "
          document.getElementById("boutput").innerHTML = ""
        }
        else if (height == "") {
          document.getElementById("berror").innerHTML = "Please Enter a valid height "
          document.getElementById("boutput").innerHTML = ""
        }
        else {
          document.getElementById("berror").innerHTML = ""
          document.getElementById("boutput").innerHTML = "Bsa according to Du Bois: " + dubsa + "\n" + "Bsa according to Mosteller: " + mobsa + "\n" + "Bsa according to Hay Cock: " + habsa + "\n" + "Bsa according to Gehan and George: " + gebsa + "\n" + "Bsa according to Boyd: " + bobsa + "\n" + "Bsa according to Fujimoto: " + fubsa + "\n" + "Bsa according to Takahira: " + tabsa + "\n" + "Bsa according to Schlich: " + scbsa + "\n";
      
        }
      }
      
      function Protein() {
        let age = document.getElementById("page").value;
        let gender = document.getElementById("pgender").value;
        let height = document.getElementById("pheight").value;
        let weight = document.getElementById("pweight").value;
        let activity_type = document.getElementById("pactivity").value;
      
        if (gender == "Male") {
          BMR = parseInt(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
          //console.log(BMR)
        }
        else {
          BMR = parseInt(9.247 * weight + 3.098 * height - 4.330 * age + 447.593);
          //console.log(BMR)
        }
        if (activity_type == "Basal Metabolic Rate (BMR)") {
          BMR = BMR;
        }
        else if (activity_type == "Little or no exercise (sedentary)") {
          BMR = parseInt((BMR * 20 / 100) + BMR);
        }
        else if (activity_type == "Exercise 1-3 times a week (Light)") {
          BMR = parseInt((BMR * 37.5 / 100) + BMR);
        }
        else if (activity_type == "Exercise 4-5 times a week (Moderate)") {
          BMR = parseInt((BMR * 46.6 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 3-4 times a week (Active)") {
          BMR = parseInt((BMR * 54 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 6-7 times a week (Very Active)") {
          BMR = parseInt((BMR * 72 / 100) + BMR);
        }
        else {
          BMR = parseInt((BMR * 89 / 100) + BMR);
        }
        min_cdc = parseInt(BMR / 4 * 10 / 100)
        max_cdc = parseInt(BMR / 4 * 35 / 100)
      
        if (age == "") {
          document.getElementById("perror").innerHTML = "Please Enter a valid age.";
        }
        else if (height == "") {
          document.getElementById("perror").innerHTML = "Please Enter a valid height"
        }
        else if (weight == "") {
          document.getElementById("perror").innerHTML = "Please Enter a valid weight) "
        }
        else if (activity_type == "Select Activity Type") {
          document.getElementById("perror").innerHTML = "Please Choose Activity type"
        }
        else {
          document.getElementById("poutput").innerHTML = "According to central authority of disease and care You need minimum " + min_cdc + "-" + max_cdc + "grams of Protein \n" + "According to World Health Organization You need 58g of Protein daily."
        }
      }
      
      function Fat() {
        let age = document.getElementById("fage").value;
        let gender = document.getElementById("fgender").value;
        let height = document.getElementById("fheight").value;
        let weight = document.getElementById("fweight").value;
        let activity_type = document.getElementById("factivity").value;
      
        if (gender == "Male") {
          BMR = parseInt(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
          //console.log(BMR)
        }
        else {
          BMR = parseInt(9.247 * weight + 3.098 * height - 4.330 * age + 447.593);
          //console.log(BMR)
        }
        if (activity_type == "Basal Metabolic Rate (BMR)") {
          BMR = BMR;
        }
        else if (activity_type == "Little or no exercise (sedentary)") {
          BMR = parseInt((BMR * 20 / 100) + BMR);
        }
        else if (activity_type == "Exercise 1-3 times a week (Light)") {
          BMR = parseInt((BMR * 37.5 / 100) + BMR);
        }
        else if (activity_type == "Exercise 4-5 times a week (Moderate)") {
          BMR = parseInt((BMR * 46.6 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 3-4 times a week (Active)") {
          BMR = parseInt((BMR * 54 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 6-7 times a week (Very Active)") {
          BMR = parseInt((BMR * 72 / 100) + BMR);
        }
        else {
          BMR = parseInt((BMR * 89 / 100) + BMR);
        }
        min_dfallowance = parseInt(BMR / 9 * 20 / 100)
        max_dfallowance = parseInt(BMR / 9 * 35 / 100)
        sfallowance = parseInt(BMR / 9 * 10 / 100)
        sfallowanceh = parseInt(BMR / 9 * 7 / 100)
        weight_maintain = parseInt(BMR)
      
        lose_half = parseInt(BMR - 500)
        lose_full = parseInt(BMR - 1000)
        gain_half = parseInt(BMR + 500)
        gain_full = parseInt(BMR + 1000)
      
        hmin_dfallowance = parseInt(lose_half / 9 * 20 / 100)
        hmax_dfallowance = parseInt(lose_half / 9 * 35 / 100)
        hsfallowance = parseInt(lose_half / 9 * 10 / 100)
        hsfallowanceh = parseInt(lose_half / 9 * 7 / 100)
      
        fmin_dfallowance = parseInt(lose_full / 9 * 20 / 100)
        fmax_dfallowance = parseInt(lose_full / 9 * 35 / 100)
        fsfallowance = parseInt(lose_full / 9 * 10 / 100)
        fsfallowanceh = parseInt(lose_full / 9 * 7 / 100)
      
        ghmin_dfallowance = parseInt(gain_half / 9 * 20 / 100)
        ghmax_dfallowance = parseInt(gain_half / 9 * 35 / 100)
        ghsfallowance = parseInt(gain_half / 9 * 10 / 100)
        ghsfallowanceh = parseInt(gain_half / 9 * 7 / 100)
      
        gfmin_dfallowance = parseInt(gain_full / 9 * 20 / 100)
        gfmax_dfallowance = parseInt(gain_full / 9 * 35 / 100)
        gfsfallowance = parseInt(gain_full / 9 * 10 / 100)
        gfsfallowanceh = parseInt(gain_full / 9 * 7 / 100)
      
        if (age == "") {
          document.getElementById("ferror").innerHTML = "Please Enter a valid age.";
        }
        else if (height == "") {
          document.getElementById("ferror").innerHTML = "Please Enter a valid height"
        }
        else if (weight == "") {
          document.getElementById("ferror").innerHTML = "Please Enter a valid weight) "
        }
        else if (activity_type == "Select Activity Type") {
          document.getElementById("ferror").innerHTML = "Please Choose Activity type"
        }
        else {
          document.getElementById("foutput").innerHTML = "You need " + weight_maintain + "Calories for weight maintainance and your Daily fat allowance is " + min_dfallowance + "-" + max_dfallowance + ". Your saturated fat allowance is less than " + sfallowance + ". And your saturated fat allowance to reduce heart disease risk is less than " + sfallowanceh
          document.getElementById("foutput1").innerHTML = "You need " + lose_half + "Calories for lose half kg weight and your Daily fat allowance is " + hmin_dfallowance + "-" + hmax_dfallowance + ". Your saturated fat allowance is less than " + hsfallowance + ". And your saturated fat allowance to reduce heart disease risk is less than " + hsfallowanceh
          document.getElementById("foutput2").innerHTML = "You need " + lose_full + "Calories for lose full kg weight and your Daily fat allowance is " + fmin_dfallowance + "-" + fmax_dfallowance + ". Your saturated fat allowance is less than " + fsfallowance + ". And your saturated fat allowance to reduce heart disease risk is less than " + fsfallowanceh
          document.getElementById("foutput3").innerHTML = "You need " + gain_half + "Calories for half kg weight gain and your Daily fat allowance is " + ghmin_dfallowance + "-" + ghmax_dfallowance + ". Your saturated fat allowance is less than " + ghsfallowance + ". And your saturated fat allowance to reduce heart disease risk is less than " + ghsfallowanceh
          document.getElementById("foutput4").innerHTML = "You need " + gain_full + "Calories for full kg weight and your Daily fat allowance is " + gfmin_dfallowance + "-" + gfmax_dfallowance + ". Your saturated fat allowance is less than " + gfsfallowance + ". And your saturated fat allowance to reduce heart disease risk is less than " + gfsfallowanceh
          document.getElementById("ferror").innerHTML = ""
        }
      
      }
      
      function Carbs() {
        let age = document.getElementById("caage").value;
        let gender = document.getElementById("cagender").value;
        let height = document.getElementById("caheight").value;
        let weight = document.getElementById("caweight").value;
        let activity_type = document.getElementById("caactivity").value;
      
        if (gender == "Male") {
          BMR = parseInt(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
          //console.log(BMR)
        }
        else {
          BMR = parseInt(9.247 * weight + 3.098 * height - 4.330 * age + 447.593);
          //console.log(BMR)
        }
        if (activity_type == "Basal Metabolic Rate (BMR)") {
          BMR = BMR;
        }
        else if (activity_type == "Little or no exercise (sedentary)") {
          BMR = parseInt((BMR * 20 / 100) + BMR);
        }
        else if (activity_type == "Exercise 1-3 times a week (Light)") {
          BMR = parseInt((BMR * 37.5 / 100) + BMR);
        }
        else if (activity_type == "Exercise 4-5 times a week (Moderate)") {
          BMR = parseInt((BMR * 46.6 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 3-4 times a week (Active)") {
          BMR = parseInt((BMR * 54 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 6-7 times a week (Very Active)") {
          BMR = parseInt((BMR * 72 / 100) + BMR);
        }
        else {
          BMR = parseInt((BMR * 89 / 100) + BMR);
        }
        dcallowance = parseInt(BMR)
        forty = parseInt(BMR / 4 * 40 / 100)
        fifty_five = parseInt(BMR / 4 * 55 / 100)
        sixty_five = parseInt(BMR / 4 * 65 / 100)
        seventy_five = parseInt(BMR / 4 * 75 / 100)
      
        lose_half = parseInt(BMR - 500)
        lose_full = parseInt(BMR - 1000)
        gain_half = parseInt(BMR + 500)
        gain_full = parseInt(BMR + 1000)
      
        hdcallowance = parseInt(lose_half)
        hforty = parseInt(lose_half / 4 * 40 / 100)
        hfifty_five = parseInt(lose_half / 4 * 55 / 100)
        hsixty_five = parseInt(lose_half / 4 * 65 / 100)
        hseventy_five = parseInt(lose_half / 4 * 75 / 100)
      
        fdcallowance = parseInt(lose_full)
        fforty = parseInt(lose_full / 4 * 40 / 100)
        ffifty_five = parseInt(lose_full / 4 * 55 / 100)
        fsixty_five = parseInt(lose_full / 4 * 65 / 100)
        fseventy_five = parseInt(lose_full / 4 * 75 / 100)
      
        ghdcallowance = parseInt(gain_half)
        ghforty = parseInt(gain_half / 4 * 40 / 100)
        ghfifty_five = parseInt(gain_half / 4 * 55 / 100)
        ghsixty_five = parseInt(gain_half / 4 * 65 / 100)
        ghseventy_five = parseInt(gain_half / 4 * 75 / 100)
      
        gfdcallowance = parseInt(gain_full)
        gfforty = parseInt(gain_full / 4 * 40 / 100)
        gffifty_five = parseInt(gain_full / 4 * 55 / 100)
        gfsixty_five = parseInt(gain_full / 4 * 65 / 100)
        gfseventy_five = parseInt(gain_full / 4 * 75 / 100)
        if (age == "") {
          document.getElementById("caerror").innerHTML = "Please Enter a valid age.";
        }
        else if (height == "") {
          document.getElementById("caerror").innerHTML = "Please Enter a valid height"
        }
        else if (weight == "") {
          document.getElementById("caerror").innerHTML = "Please Enter a valid weight) "
        }
        else if (activity_type == "Select Activity Type") {
          document.getElementById("caerror").innerHTML = "Please Choose Activity type"
        }
        else {
          document.getElementById("caoutput").innerHTML = "You need " + dcallowance + "Calories for weight maintainance and your 40% carbs of your calories is " + forty + " grams. And your 55% carbs of your calories is " + fifty_five + " grams. And your 65% carbs of your calories is " + sixty_five + "grams. And your 75% carbs of your calories is " + seventy_five + "\n"
          document.getElementById("caoutput1").innerHTML = "You need " + hdcallowance + "Calories to lose half kg of weight and your 40% carbs of your calories is " + hforty + " grams. And your 55% carbs of your calories is " + hfifty_five + " grams. And your 65% carbs of your calories is " + hsixty_five + "grams. And your 75% carbs of your calories is " + hseventy_five + "\n"
          document.getElementById("caoutput2").innerHTML = "You need " + fdcallowance + "Calories to lose full kg of weight and your 40% carbs of your calories is " + fforty + " grams. And your 55% carbs of your calories is " + ffifty_five + " grams. And your 65% carbs of your calories is " + fsixty_five + "grams. And your 75% carbs of your calories is " + fseventy_five + "\n"
          document.getElementById("caoutput3").innerHTML = "You need " + ghdcallowance + "Calories to gain half kg of weight and your 40% carbs of your calories is " + ghforty + " grams. And your 55% carbs of your calories is " + ghfifty_five + " grams. And your 65% carbs of your calories is " + ghsixty_five + "grams. And your 75% carbs of your calories is " + ghseventy_five + "\n"
          document.getElementById("caoutput3").innerHTML = "You need " + gfdcallowance + "Calories to gain full kh of weight and your 40% carbs of your calories is " + gfforty + " grams. And your 55% carbs of your calories is " + gffifty_five + " grams. And your 65% carbs of your calories is " + gfsixty_five + "grams. And your 75% carbs of your calories is " + gfseventy_five + "\n"
          document.getElementById("caerror").innerHTML = ""
        }
      
      }
      
      function Tdee() {
        let age = document.getElementById("tage").value;
        let gender = document.getElementById("tgender").value;
        let height = document.getElementById("theight").value;
        let weight = document.getElementById("tweight").value;
        let activity_type = document.getElementById("tactivity").value;
      
        if (gender == "Male") {
          BMR = parseInt(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
          //console.log(BMR)
        }
        else {
          BMR = parseInt(9.247 * weight + 3.098 * height - 4.330 * age + 447.593);
          //console.log(BMR)
        }
        if (activity_type == "Basal Metabolic Rate (BMR)") {
          BMR = BMR;
        }
        else if (activity_type == "Little or no exercise (sedentary)") {
          BMR = parseInt((BMR * 20 / 100) + BMR);
        }
        else if (activity_type == "Exercise 1-3 times a week (Light)") {
          BMR = parseInt((BMR * 37.5 / 100) + BMR);
        }
        else if (activity_type == "Exercise 4-5 times a week (Moderate)") {
          BMR = parseInt((BMR * 46.6 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 3-4 times a week (Active)") {
          BMR = parseInt((BMR * 54 / 100) + BMR);
        }
        else if (activity_type == "Intense exercise 6-7 times a week (Very Active)") {
          BMR = parseInt((BMR * 72 / 100) + BMR);
        }
        else {
          BMR = parseInt((BMR * 89 / 100) + BMR);
        }
        lose_quad = parseInt(BMR - 250)
        lose_half = parseInt(BMR - 500)
        gain_quad = parseInt(BMR + 250)
        gain_half = parseInt(BMR + 500)
      
        if (age == "") {
          document.getElementById("terror").innerHTML = "Please Enter a valid age.";
        }
        else if (height == "") {
          document.getElementById("terror").innerHTML = "Please Enter a valid height"
        }
        else if (weight == "") {
          document.getElementById("terror").innerHTML = "Please Enter a valid weight) "
        }
        else if (activity_type == "Select Activity Type") {
          document.getElementById("terror").innerHTML = "Please Choose Activity type"
        }
        else {
          document.getElementById("toutput").innerHTML = "The estimated TDEE is " + BMR + ".\n To lose 250g weight you need " + lose_quad + "of calories. And to lose 500g of weight you need " + lose_half + "of calories. And to gain 250 g of weight you need " + gain_quad + "of calories. And to gain 500g of weight you need " + gain_half + "of calories."
          document.getElementById("terror").innerHTML = ""
        }
      }
      
      function Due() {
        let first_day = document.getElementById("dfirst_day").value;
        let average_length_one = document.getElementById("daverage_length").value;
        const date = new Date("'" + first_day + "'");
        const length_Array = average_length_one.split(" ");
        let average_length = parseInt(length_Array[0]);
        if (average_length < 28) {
          filtered = parseInt(28 - average_length)
          due_date = date.setDate(date.getDate() - filtered)
        }
        else if (average_length > 28) {
          filtered_two = average_length - 28
          due_date = date.setDate(date.getDate() + filtered_two)
        }
        if (first_day == "") {
          document.getElementById("derror").innerHTML = "Please Choose a valid date of Your Menstrual Period ";
        }
        else if (average_length_one == "") {
          document.getElementById("derror").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
        }
        else {
          document.getElementById("derror").innerHTML = ""
          date.setDate(date.getDate() + 280);
          // display the Result
          document.getElementById("doutput").innerHTML = "Your estimated due date is on:" + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
          document.getElementById("derror").innerHTML = ""
        }
      }
      
      function Ovulation() {
        let first_day = document.getElementById("ofirst_day").value;
        let average_length_one = document.getElementById("oaverage_length").value;
        const date = new Date("'" + first_day + "'");
        const length_Array = average_length_one.split(" ");
        let average_length = parseInt(length_Array[0]);
        date.setDate(date.getDate() + average_length);
        const ovul_date = new Date("'" + first_day + "'");
        ovul_date.setDate(ovul_date.getDate() + average_length / 2)
      
        const preg_date = new Date("'" + first_day + "'");
        preg_date.setDate(preg_date.getDate() + average_length + 1);
        console.log(preg_date)
        const fer_date = new Date("'" + first_day + "'");
        fer_date.setDate(fer_date.getDate() / 2)
      
        if (first_day == "") {
          document.getElementById("oerror").innerHTML = "Please Choose a valid date of Your Menstrual Period ";
        }
        else if (average_length_one == "") {
          document.getElementById("oerror").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
        }
        else {
          document.getElementById("oerror").innerHTML = ""
          date.setDate(date.getDate() + 280);
          // display the Result
          document.getElementById("ooutput").innerHTML = "Your Next Period is on: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
          document.getElementById("ooutput1").innerHTML = "Your Pregnancy test day is on: " + preg_date.getDate() + "/" + (preg_date.getMonth() + 1) + "/" + preg_date.getFullYear();
          document.getElementById("ooutput2").innerHTML = "Your ovulation day is on: " + ovul_date.getDate() + "/" + (ovul_date.getMonth() + 1) + "/" + ovul_date.getFullYear();
        }
        document.getElementById("oerror").innerHTML = ""
      }
      
      function Conception() {
        let first_day = document.getElementById("cfirst_day").value;
        let average_length_one = document.getElementById("caverage_length").value;
        const date = new Date("'" + first_day + "'");
        const length_Array = average_length_one.split(" ");
        let average_length = parseInt(length_Array[0]);
        date.setDate(date.getDate() + average_length);
        const temp = new Date("'" + first_day + "'");
        const temp1 = new Date("'" + first_day + "'");
        const temp2 = new Date("'" + first_day + "'");
        const temp3 = new Date("'" + first_day + "'");
        const temp4 = new Date("'" + first_day + "'");
        temp.setDate(temp.getDate() + average_length / 2 - 2)
        temp1.setDate(temp1.getDate() + average_length / 2 - 1)
        temp2.setDate(temp2.getDate() + average_length)
        temp3.setDate(temp3.getDate() + average_length / 2 + 1)
        temp4.setDate(temp4.getDate() + average_length / 2 + 2)
        if (first_day == "") {
          document.getElementById("cerror").innerHTML = "Please Choose a valid date of Your Menstrual Period ";
        }
        else if (average_length_one == "") {
          document.getElementById("cerror").innerHTML = "Please Choose Your average length of your cycle (Average 28) "
        }
        else {
          document.getElementById("cerror").innerHTML = ""
          date.setDate(date.getDate() + 280);
          // display the Result
          document.getElementById("coutput").innerHTML = "Your Conception date can be in between \n" + temp.getDate() + "/" + (temp.getMonth() + 1) + "/" + temp.getFullYear();
          document.getElementById("coutput1").innerHTML = temp1.getDate() + "/" + (temp1.getMonth() + 1) + "/" + temp1.getFullYear();
          document.getElementById("coutput2").innerHTML = temp2.getDate() + "/" + (temp2.getMonth() + 1) + "/" + temp2.getFullYear();
          document.getElementById("coutput3").innerHTML = temp3.getDate() + "/" + (temp3.getMonth() + 1) + "/" + temp3.getFullYear();
          document.getElementById("coutput4").innerHTML = temp4.getDate() + "/" + (temp4.getMonth() + 1) + "/" + temp4.getFullYear();
      
        }
        document.getElementById("cerror").innerHTML = ""
      }
      
      
      
      
      
      
      
      
      
      
      

    

    





