const functionToBecalled = () => {
     console.log("This is the function to be finally called!");
 }
 
 const callingFunction = (functionToBeCalled) => {
     functionToBeCalled();
 }
 