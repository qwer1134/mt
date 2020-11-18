function debounce(func, delay, immediate){ // 防抖
  let timer = null;
  return function(){
      let context = this
      let args = arguments
      if(timer) {
          clearTimeout(timer)
      }

      if(immediate){
          let doNow = !timer;
          timer = setTimeout(function(){
              timer = null;
          },delay);
          if(doNow){
              func.apply(context,args);
          }
      }else{
          timer = setTimeout(function(){
              func.apply(context,args);
          },delay);
      }
  }
}
export default debounce