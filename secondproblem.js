function matchFinder(string1, string2){
    if (typeof string1 !== "string" || typeof string2 !== "string"){
       return  "Error: Please provide valid string inputs.";
    }
    else if( string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}
const firstString = matchFinder("John Doe", "ohn")
const secondString = matchFinder("JavaScript", "Code")
const thirdString = matchFinder("Peter Parker", "Pen")
const fourthString = matchFinder("Peter Parker", "pet")
