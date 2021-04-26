//Challenge 1: Your Age in Days

/*
Create function to calculate the age in days
-show prompt 
-takes birthyear and calculates the age in days
*/
function ageInDays() {
     var birthYear = prompt('What year were you born?');
     var ageInDayss = (2020 - birthYear) * 365;
     var h1 = document.createElement('h1');
     var textAnswer = document.createTextNode('You are ' + ageInDayss + 'days old.');
     h1.setAttribute('id', 'ageInDays'); //set h1 id to ageInDays
     h1.appendChild(textAnswer); //append the textAnswer var to the h1
     document.getElementById('flex-box-result').appendChild(h1); //grab flexbox result and append the h1 to it.

    // console.log(ageInDayss);
}

function reset() {
    document.getElementById('ageInDays').remove();
    
}