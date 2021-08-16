// create your App component here
import React, { useState, useEffect } from "react"


function App() {
    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState("")

    useEffect(() => fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            setLoading(false)
            setImages(json.message)
        }),[]

    )

    if (loading){
    return (
        <p>Loading...</p>
    )
    }
    else{return (
        <img src={images} alt="A Random Dog"/>
        )
    }
}

export default App