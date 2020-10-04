import { useEffect, useState } from "react";

function Route({path,children}) {
    const[currentPath, setCurrentPath]=useState(window.location.pathname)
    useEffect(()=>{
        const onLocationChange=()=>{
            console.log('Location Change')
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)

        return ()=>{
            window.removeEventListener('popstate', onLocationChange)
        }
    },[])

    return currentPath===path? children : null;
    
}

export default Route;
