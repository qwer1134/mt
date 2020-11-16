import clone from './cloneDeep.js'
let obj={name:'tom',age:[1,5,6,{name:[5,6,8]}]}
let obj2=clone(obj)
console.log(obj2)