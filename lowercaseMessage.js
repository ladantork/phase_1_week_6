const lowercaseMessage = (m)=>{
  return m.toLowerCase();
}

const transform =(m, transformEach)=>{
    return transformEach(m);

}

transform('WHY ARE YOU SHOUTING?', lowercaseMessage);