var x = [[153,157,13],[99,55,15]]
var t = 0;
var r = 0;
function nemeh() {
    for(var i = 0; i<=x[0].length-1; i++){
      t+= x[0][i];
        
    }
    return t
}
nemeh()
    
function nemeh1() {
    for(var i = 0; i<=x[1].length-1; i++){
      r += x[1][i];
        
    }
    return r
}
nemeh1()
function jishih(nemeh,nemeh1){
    if(t<r){
        console.log(r)
    }else{
        console.log(t)
    }

}
jishih(nemeh,nemeh1)
    

  
 










