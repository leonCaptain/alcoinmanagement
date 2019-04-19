export function fetchGet(url){
	  fetch(url,{
		  method:'get',
		  mode:'cors',
		  headers: new Headers({
			  'Accept':'application/json',
			  "Content-Type":"application/x-www-from-urlencoded;charset=utf-8",
			  ...header
		  })
	  })
	
	
}