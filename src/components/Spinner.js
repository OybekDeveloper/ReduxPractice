export default function Spinner(){
    return(
        <button className="btn btn-light" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm text-dark" aria-hidden="true"></span>
            <span className="text-dark" role="status">Loading...</span>
        </button>
    )
}