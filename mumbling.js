
function accum(s) {
	let sArr  = [];
  for (let i =0; i < s.length; i++){
  sArr.push(format(s[i], i+1));
}
return sArr.join('-');
}
function format(str, num){
let letter = str.toUpperCase();
while(letter.length != num){
letter += str.toLowerCase();
}
return letter;
}

accum('abcd');
accum("RqaEzty");
accum("cwAt");