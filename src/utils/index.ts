
const throttle = (cb:(...args: any) => void, delay: number) => {

  let waitingArgs: any;
  let shouldWait:boolean = false;

  const timeOutFunc = () =>{
    if(waitingArgs == null){
        shouldWait =false;
    }
    else{
      cb(...waitingArgs);
      waitingArgs  = null;
      setTimeout(timeOutFunc,delay)
    }
  }

  return (...args:any) =>{

      if(shouldWait) {
          waitingArgs = args
          return
      }
      cb(...args);
      shouldWait =true;
      setTimeout(timeOutFunc,delay)
  }
}

export {throttle}

