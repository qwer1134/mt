function throttleNow(Fn,delay){
  let proTime=Date.now()
  return function() {
    let args=[...arguments]
    let nowTime=Data.now()
    if(nowTime-proTime>=delay) {
      Fn.apply(this,args)
      proTime=Date.now()
    }
  }
}

function throttleTimer(Fn,delay){
  let timer=null
  return function() {
     let args=[...arguments]
     if(!timer){
     timer = setTimeout(()=>{
       Fn.apply(this,args)
       timer=null
      },delay)
     }
  }
}
export default {throttleNow,throttleTimer}