export const newsFetching=()=> {
    return {
        type: "NEWS_FETCHING"
    }
}
export const filtersFetching=()=> {
    return {
        type: "FILTERS_FETCHING"
    }
}
export const addFetching=()=> {
    return {
        type: "ADD_FETCHING"
    }
}
export const newsFetched=(payload)=>{
    return{
        type:"NEWS_FETCHED",
        payload,
    }
}
export const filtersFetched=(filters)=>{
    console.log(filters, "filters")
    return{
        type:"FILTERS_FETCHED",
        payload:filters,
    }
}
export const filteredNewsData=(category)=>{

    return{
        type:"FILTERED_NEWS_FETCHED",
        payload:category,
    }
}
export const deleteItem=(id)=>{
    return{
        type:"DELETE_ITEM_FETCHED",
        payload:id,
    }
}
export const addFetched=(addNew)=>{
    return{
        type:"ADD_FETCHED",
        payload:addNew,
    }
}
export const newsFetchingError=()=>{
    return{
        type:"NEWS_FETCHING_ERROR"
    }
}
export const filtersFetchingError=()=>{
    return{
        type:"FILTERS_FETCHING_ERROR"
    }
}
export const addFetchingError=()=> {
    return {
        type: ""
    }
}
