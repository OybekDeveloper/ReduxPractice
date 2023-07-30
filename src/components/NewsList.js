import useHttp from '../hook/useHttp';
import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {
    newsFetching,
    newsFetched,
    newsFetchingError,
    filteredNewsData
} from "../redux/action";
import Spinner from "./Spinner";
import ErrorList from "./ErrorList";
import NewsListItem from "./NewsListItem";

export default function NewsList(){
const {filteredNews ,newsLoadingStatus}=useSelector(state => state)
    const dispatch=useDispatch();
const {request}=useHttp();
    useEffect(() => {
        dispatch(newsFetching());
        request("http://localhost:4000/new")
            .then(data=>{
                setTimeout(()=>{
                    dispatch(newsFetched(data))
                    dispatch(filteredNewsData("all"))
                },2000)
            })
            .catch(()=>dispatch(newsFetchingError()))

    }, []);
    if(newsLoadingStatus==="loading"){
       return <Spinner />
    }else if(newsLoadingStatus==="error"){
       return <ErrorList />
    }

    const renderNewsList=(array)=>{
        if(array.length===0){
            return <h4  className="text-center mt-5"> New's doesn't exists</h4>
        }else{
            return array.map(item=>{
                return<NewsListItem key={item.id} {...item} />
            })
        }
    }
    const element =renderNewsList(filteredNews);
    console.log(element)

    return(
        <ul>{element}</ul>
    )
}