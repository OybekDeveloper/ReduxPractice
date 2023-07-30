import React from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import NewsAddForm from "./components/NewsAddForm";
import NewsFilter from "./components/NewsFilter";

export  default  function App(){
    return(
        <div className="app " >
            <Navbar/>
            <div className="content ">
                <NewsList/>
                <div className="content__pages">
                    <NewsAddForm/>
                    <NewsFilter/>
                </div>
            </div>
        </div>
    )
}