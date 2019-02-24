module.exports = function check(str, bracketsConfig) {
 
var str1='';
var str2='';
var str_s='';

    for (var i = 0; i < str.length; i++) {     
        for (var j = 0; j < bracketsConfig.length; j++) {  
            if (str.charAt(i)==bracketsConfig[j][0] && str.charAt(i+1)==bracketsConfig[j][1]) {             
                    str1=str.substr(0,i);
                    str2=str.substr(i+2,str.length);
                str=str1+str2;
                i=i-2;
                }
            }
        }
    if(str==''){
        return true;
    }
    else{
        return false;
    }
}
