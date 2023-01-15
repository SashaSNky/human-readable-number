module.exports = function toReadable (number) {

function digits(n){
    const digit=['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];  
    return digit[n];
}

function decads(n) {
    const des= ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return des[n];
}

function returnDecades(n){
    if (n%10===0) {
       return decads(Math.floor(n/10));
       }
        else {
            return decads(Math.floor(n/10)) +' '+ digits(n%10);
       }
}
function returnHundreds(n){
   let res='';
    if (n%100===0) {
        res=digits(Math.floor(n/100))+' '+ hundreds[0];
       }
        else {
            if (n%100<20){
                res=digits(n%100);
            }
            else {
                res=returnDecades(n%100);
            }
            res=digits(Math.floor(n/100))+' '+ hundreds[0] + ' '+ res;
        }
        return res;
}    
    const hundreds =['hundred', 'thousand'];    
    let res='';
    if (number<20) {res=digits(number);}
    else{
        let kolSymbol = String(number).length;
        let str=number.toString();
        switch (kolSymbol){
        case 2:
          res=returnDecades(number);
          break;
        case 3:
            res=returnHundreds(number);
            break;
        }
    }    
return res;
 // console.log(res);

}

