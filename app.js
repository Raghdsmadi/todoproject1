var name = window.prompt("Enter your Name: ");



var gender = window.prompt("Enter your Gender: ");
var age = window.prompt("Enter your Age: ");
for (  i=0 ; age <= 0; i++){
    alert ( "Age must be greater than 0")
    var age = window.prompt("Enter your Age: ");
}

//result = window.confirm("Do you want to skip welcome message ?");

//var conf=  window.prompt("Do you want to skip welcome message ? please enter yes or no");
/*var result =window.confirm("Do you want to skip welcome message");
if (result = 0){*/
//alert ("Do you want to skip welcome message ? ")
 /*if (gender == 'male')
        {
            alert("Welcome, MR. " + name );

        }
        else if (gender == 'female')
        {
            alert("Welcome, MS. " + name);

        } else {
            alert("Welcome, " + name );
        }
*/
        if (window.confirm("Do you want to skip welcome message") == false) {
            if (gender == 'male')
            {
                alert("Welcome, MR. " + name );
    
            }
            else if (gender == 'female')
            {
                alert("Welcome, MS. " + name);
    
            } else {
                alert("Welcome, " + name );
            }
    
          } else {
            
          }
  





