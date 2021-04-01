import React from 'react'
import STLViewer from 'stl-viewer'

const StlCards = () => {
    return (
<STLViewer
	url='/img/stl/Handgun_stl.stl'
	width={400}
	height={400}
	modelColor='#B92C2C'
	backgroundColor='#EAEAEA'
	rotate={true}
	orbitControls={true}
/>   
    )
}

export default StlCards
