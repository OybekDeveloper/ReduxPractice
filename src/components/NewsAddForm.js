
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addFetched, addFetching, addFetchingError, filteredNewsData} from "../redux/action";

export default function  NewsAddForm(){
    const initialState = {
        name:'',
        description:'',
        category:"",
        img:""
    }
    const dispatch=useDispatch();
    const [formData, setFormData]= useState(initialState)



    const handleSubmit=async ()=> {
     if( !Object.entries(formData).every(([_,val])=>val)){
         return alert("All fields required!")
     }
        try{
            dispatch(addFetching())
            setTimeout(()=> {
                dispatch(addFetched(formData))
                dispatch(filteredNewsData("all"))
            },1000)

        }
        catch (err){
           dispatch(addFetchingError(err.message))
        }
        finally {
            setFormData(initialState)
        }

    }



    const handleChange= (e)=> {
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    }

return(
        <form className="border p-5 shodow-lg rounded  bg-info-subtle">
            <div className='mb-3'>
                <label htmlFor="name" className='form-label fs-4 '>Name for new New's</label>
                <input
                    type='text'
                    required
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                    placeholder="What is the name of your news?"
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="name" className='form-label fs-4'>Description</label>
                <textarea
                    typeof="text"
                    required
                    name="description"
                    className="form-control"
                    id="text"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="What is your news about? "
                    style={{"height":"120px"}}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="name" className='form-label fs-4 '>Enter image url</label>
                <input
                    type='text'
                    required
                    name="img"
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    value={formData.img}
                    placeholder="Enter image address"
                />
            </div>

            <div className='mb-3'>
                <label htmlFor="name" className='form-label fs-4 '>Choose category of news?</label>
                <select
                    required
                    className="form-select"
                    id="category"
                    onChange={handleChange}
                    value={formData.category}
                    name="category">
                    <option>Select category</option>
                    <option value="hot">Hot New's</option>
                    <option value="sport">Sport New's</option>
                    <option value="world">World New's</option>
                    <option value="global">Global New's</option>
                </select>
            </div>
            <button   type="button" onClick={handleSubmit} className="btn btn-secondary text-light w-100 shadow-lg">Create New's</button>
        </form>
    )
}