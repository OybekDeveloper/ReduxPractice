import React from "react";
import {deleteItem, filteredNewsData} from "../redux/action";
import {useDispatch} from "react-redux";

function NewsListItem({id, name, description, category, img}) {
    let classNames;
    switch (category.toLowerCase()) {
        case "hot":
            classNames = "bg-warning bg-gradient";
            break;
        case "sport":
            classNames = "bg-info bg-gradient";
            break;
        case "world":
            classNames = "bg-success bg-gradient";
            break;
        case "global":
            classNames = "bg-danger bg-gradient";
            break;
        default:
            classNames = "bg-secondary bg-gradient";
            break;
    }

    const dispatch = useDispatch()
    const deleteHandler=(id)=>{
        dispatch(deleteItem(id))
        dispatch(filteredNewsData("all"))
    }

    return (
        <li className={`card flex-row shadow-lg text-white my-3 ${classNames}`}>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description.slice(0,120)}...</p>
            </div>
            <img
                src={img}
                alt={name}
                className="img-fluid w-25 d-inline"
                style={{"objectFit":"cover"}}
            />
            <span className="position-absolute top-0 end-70 translate-middle badge border rounded-pill bg-light">
                <button onClick={()=>deleteHandler(id)} className="btn-close" type="button" aria-label="Close"></button>
            </span>
        </li>
    );
}

export default NewsListItem;
