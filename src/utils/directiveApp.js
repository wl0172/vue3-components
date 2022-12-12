import { formatPrice, formatPhoneOnkeyUp } from "@/utils/directive"

export const appDirective = (app) => {
  app.directive('money', (el,binding,vNode,prevNode)=>{
    el.innerHTML = formatPrice(el.innerHTML)
  })
  app.directive('phono', (el,binding,vNode,prevNode)=>{
    el.innerHTML = formatPhoneOnkeyUp(el.innerHTML)
  })
  app.directive('focus', (el,binding,vNode,prevNode)=>{
    el.focus()
  })

}