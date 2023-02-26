
function  Beep(inputValues)
{ 
  for (let index = 0; index < inputValues.length; index++) {

    const element = inputValues[index];    
    
    //console.log(element)

    if(isNaN(element) == false && element > 0)
    {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, element);
    }
  } 
}

var args = process.argv.slice(2);

Beep(args);
