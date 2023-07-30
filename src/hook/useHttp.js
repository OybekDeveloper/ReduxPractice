import {useCallback} from "react";

export default function useHttp(){
    const request =useCallback(async (url,method="GET",body=null,headers  ={"Content-type":"aplication/json"})=>{
             return fetch(url,{method,body,headers})
                 .then(response=>{
                if(!response.ok){
                    throw new Error(`Could not fetch ${url} status ${( response).status}`)
                }
                return response.json()
            }).catch(err=>console.log(err))
    },[])
        return{request}
}
