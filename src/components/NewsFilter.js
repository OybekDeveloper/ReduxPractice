import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useHttp from "../hook/useHttp";
import {
    filteredNewsData,
    filtersFetched,
    filtersFetching,
    filtersFetchingError,
} from "../redux/action";
import Spinner from "./Spinner";


export default function NewsFilter(){

    const {filters} = useSelector(state=>state)
    const dispatch = useDispatch();
    const [activeBtn, setActiveBtn] = useState("all")
    const {request}=useHttp();
    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:4000/filter")
            .then(data=>{
                setTimeout(()=>dispatch(filtersFetched(data)), 1000)
            })
            .catch(()=>dispatch(filtersFetchingError()))

    }, []);



    const buttons = [
        {
            bg:"btn-outline-dark",
        },
        {
            bg:"btn-outline-warning",
        },
        {
            bg:"btn-outline-info",
        },
        {
            bg:"btn-outline-success",
        },
        {
            bg:"btn-outline-danger",
        },
    ].map((item,i)=>({
        ...item,
        category:filters.length ? filters[i] :""
    }))

    function handleActiveBtn(cat){
        setActiveBtn(cat)
        dispatch(filteredNewsData(cat))
    }
    return(
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Filter by category</p>
                <div className='btn-group'>
                    {
                       filters.length > 0 ?  buttons.map(item=>(
                            <button
                                className={`btn text-capitalize ${item.bg} ${activeBtn===item.category ? " active":""}`}
                                onClick={()=>handleActiveBtn(item.category)}
                            >{item.category}</button>
                        )):<Spinner/>
                    }
                </div>
            </div>
        </div>
    )
}

