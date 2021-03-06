import React from 'react'

const Firstleft = (props) => {
    return (
        <>
        <div class={props.isleft?"md:flex my-10 bg-white mx-6 dark:bg-gray-500 rounded-3xl flex-row-reverse":"md:flex my-10 bg-white mx-6 dark:bg-gray-500 rounded-3xl "}>
            <div class="w-full h-64 md:w-1/2 md:h-auto">
                <div class="w-full h-full bg-cover" style={{"background-image": `url("https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80")`}}>
                    <div class="w-full h-full bg-black opacity-25"></div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full px-6 py-8 md:h-128 md:w-1/2">
                <div class="max-w-xl">
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">{props.data.Name?.split('-')[0]}<span class="text-indigo-600 dark:text-indigo-300">{props.data.Name?.split('-')[1]}</span></h2>
                        
                    <p class="mt-2 text-sm text-gray-500 dark:text-white md:text-base">{props.data.Description}.</p>

                    <div class="flex mt-6">
                        <button onClick={()=>window.open(props.data.Link)} class="block px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Goto-Project</button>
                        <a href="#" class="block px-3 py-2 mx-4 text-xs font-semibold text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Firstleft
