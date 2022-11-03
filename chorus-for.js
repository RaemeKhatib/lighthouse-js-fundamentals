const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");
for(x = 100; x<=200; x++){
  console.log(x);
}



for(let x = 100; x <= 200; x++) {
  console.log(x);
  if(x % 3 === 0){
    console.log("Loopy");
  } else if(x % 4 === 0){
    console.log("Lighthouse");
  } else if(x % 3 === 0 && x % 4 === 0){
    console.log("Loopylighthouse");
  }
}