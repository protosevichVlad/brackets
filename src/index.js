function open_bracket(symble, bracketsConfig){
  for(let i = 0; i < bracketsConfig.length; i++){
    if(symble === bracketsConfig[i][0]) return true;
  }
  return false;
}

function get_next_bracket(symble, bracketsConfig){
  for(let i = 0; i < bracketsConfig.length; i++){
    if(symble === bracketsConfig[i][0]) return bracketsConfig[i][1];
  }
}

module.exports = function check(str, bracketsConfig) {
  let next_bracket = [];
  
  for( let i = 0; i < str.length; i++){
    let next = next_bracket.pop();
    next_bracket.push(next);
    if((next_bracket.length > 0 && str[i] == next)){
      next_bracket.pop();
      continue;
    } 
    if(open_bracket(str[i], bracketsConfig)){
      next_bracket.push(get_next_bracket(str[i], bracketsConfig))
    }else{
      return false;
    }
  }
  return next_bracket.length == 1;
}
