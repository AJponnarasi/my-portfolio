//Select Form
var form=document.getElementById('form');
//Listen Form Submit And Write Function
        
form.addEventListener("submit",function(event)
     {   
            //Prevent Default Behaviour
            event.preventDefault();
            CalculateResults();
            
     });
 function CalculateResults(){
            //Get Form Values
var LoanPrincipal=document.getElementById("loanamount").value;
var LoanInterest=document.getElementById('Interest').value;
var LoanPayments=document.getElementById('Period').value;
var monthlyInterestRatio = (LoanInterest/100)/12;
var monthlyInterest = (monthlyInterestRatio*LoanPrincipal);
var top = Math.pow((1+monthlyInterestRatio),LoanPayments);
var bottom = top -1;
var sp = top / bottom;
var emi = ((LoanPrincipal * monthlyInterestRatio) * sp);
var result = emi.toFixed(2);
var totalAmount = emi*LoanPayments;
var yearlyInteret = totalAmount-LoanPrincipal;
var downPayment = LoanPrincipal*(20/100);
var output=document.getElementById('result');
output.innerHTML="";
console.log(emi);
console.log(result);
 showoutput("EMI",result,output); 
 showoutput("Interest",yearlyInteret,output);
 showoutput("downPayment",downPayment,output);
 showoutput("totalAmount",totalAmount,output);
}
                
function showoutput(attribute,value,result){
        element=document.createElement('h3');
        text=document.createTextNode(attribute+" =  "+value);
        element.appendChild(text);
        result.appendChild(element);
}
