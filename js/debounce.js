function debounce(func, delay, immediate){
  var timer = null;
  return function(){
      var context = this;
      var args = arguments;
      if(timer) clearTimeout(timer);

      if(immediate){
          var doNow = !timer;
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