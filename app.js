let answers=[];
let answer ;
let name = window.prompt("Enter your Name: ");
 answers.push(name);

let gender= window.prompt("Enter your Gender: ");
answers.push(gender);
answer = window.prompt("Enter your Age: ");
for (  i=0 ; answer <= 0; i++){
    answer = window.prompt("Enter your Age: ");
}
answers.push(answer);


if (window.confirm("Do you want to skip welcome message") == false)
 {
            if (gender == 'male')
            {
                alert("Welcome, MR. " + name);  }
            else if ( gender == 'female')
            {
                alert("Welcome, MS. " + name); } 
            else {
                alert("Welcome, " + name );  }
    
  } 

/******************************************************************************************** */
 

    playing(answer);
    watching(answer);
    sports(answer);
    

function playing (answer) {
 answer= window.prompt("Are you intersting in video games? ");
invalid(answer) ;
return answer;
}

function watching (answer)
{
 answer= window.prompt("Are you intersting in watching anime?")
invalid(answer);
return answer;
}

function sports(answer)
{
    answer= window.prompt("Are you intersting in Football?")
    invalid(answer);
    return answer;
}

function invalid (answer)
{
if (answer === "") {
    answer="invalid sring"; 
    answers.push(answer);
}
else {answers.push(answer);}
return answer;
}
console.log(answers)





