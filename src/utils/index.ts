const throttle = (cb:any, delay: number) => {
  let flag = true;

  if(flag){
    return cb;
    flag = false;
    setTimeout(() => flag = true, delay);
  }
}

export {throttle}
