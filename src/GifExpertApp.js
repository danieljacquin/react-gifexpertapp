import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";


const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h1>Gifs</h1>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <div>
                {
                    categories.map((category,index) => {
                        return <GifGrid key={index} category={category}/>
                    })
                }
            </div>     
        </>
    )
}

export default GifExpertApp;