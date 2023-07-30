
const initialState={
    newsLoadingStatus:'sam',
    filters:[],
    removeItem:[],
    filteredNews:[],
}
const reducer=(state=initialState, {type, payload})=>{
    switch (type){
        case "NEWS_FETCHING":
        case "FILTERS_FETCHING":
        case "ADD_FETCHING":
            return {
                ...state,
                newsLoadingStatus: "loading",
            }
        case "NEWS_FETCHED": {
            return {
                ...state,
                newsLoadingStatus: "sam",
                news :payload
            }
        }
        case "FILTERED_NEWS_FETCHED":
            return {
                ...state,
                newsLoadingStatus: "sam",
                filteredNews: payload === 'all' ? state.news : state.news.filter(item => item.category.toLowerCase() === payload)
            }
        case "DELETE_ITEM_FETCHED":
            return {
                ...state,
                newsLoadingStatus: "sam",
                news:  state.news.filter(item => item.id !== payload)
            }
        case "FILTERS_FETCHED":
            return{
                ...state,
                filters: payload
            }
        case "ADD_FETCHED":
            return{
                ...state,
                news: [...state.news,payload],
                newsLoadingStatus: "not"
            }
        case "NEWS_FETCHING_ERROR":
        case "FILTERS_FETCHING_ERROR":
        case "ADD_FETCHING_ERROR":
            return{
                ...state,
                newsLoadingStatus:"error",
            }
        case "ADD_NEW_ITEM":
            return{
                ...state,
                addNew: payload
            }
        default:
            return state;
    }
}
export default reducer;