import React,{useEffect} from 'react'


const useDarkmode = () => {
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.add('dark');
    }, []);
}

export default useDarkmode
