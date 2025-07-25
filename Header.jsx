import React, { useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch.jsx"

const Header = ({onDataReceived}) => {
    const [query, setQuery] = useState("")
    const {data, get} = useFetch()

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const onSubmit = (e) => {
        if (e.key === "Enter") {
            get(query)
        }
    }

    useEffect(() => {
    if (data) {
      onDataReceived(data);
    }
  }, [data, onDataReceived]);

    return(
        <>
        <div className="flex justify-between items-center p-4">
                <p className="text-xl font-bold text-orange-300">FOOD</p>
                <div className="w-[60%]">
            <input value={query} onChange={onChange} onKeyDown={onSubmit} type="text" placeholder="What are we cooking today?" className="bg-white shadow-lg w-[100%] h-10 rounded-full px-4 outline-orange-300 border border-black/[0.2]"/>
                </div>
                <p className="text-xl font-bold text-orange-300">RECIPE</p>
              </div>
        </>
    )
}

export default Header