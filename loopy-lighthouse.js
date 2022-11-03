for(x = 100; x<=200; x++){
  console.log(x);
  if(x % 3 == 0){
    console.log("Loopy");
  } if(x % 4 == 0){
    console.log("Lighthouse");
  } if(x % 3 == 0 && x % 4 == 0){
    console.log("Loopylighthouse");
  }
}