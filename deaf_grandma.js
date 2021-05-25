function deafGrandma() {
  console.log("HEY KID!");
  var goodbye=0;
  prompt.start();
  while(goodbye<2){
    prompt.get(['input'], function(err, result) {
      const input = result.input;
      if(input!=input.toUpperCase()){
        console.log("SPEAK UP, KID!")
      }
      else if(input==""){
        console.log("WHAT?!")
      }
      else if(input=="GOODBYE!"){
        if(goodbye){
          goodbye++;
          console.log("LATER, SKATER!")
        }
        console.log("LEAVING SO SOON?")
        goodbye++;
      }
      else{
        console.log("NO, NOT SINCE 1946!")
      }
    })
  }
}

deafGrandma();
