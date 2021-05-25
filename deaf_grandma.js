function deafGrandma() {
  console.log("HEY KID!");
  var goodbye=false;
  while(true){
    var input=prompt("\n");
    if(input!=input.toUpperCase()){
      console.log("SPEAK UP, KID!")
    }
    else if(input==""){
      console.log("WHAT?!")
    }
    else if(input=="GOODBYE!"){
      if(goodbye){
        console.log("LATER, SKATER!")
        break;
      }
      console.log("LEAVING SO SOON?")
      goodbye=true;
    }
    else{
      console.log("NO, NOT SINCE 1946!")
    }
  }
}

deafGrandma();
