import React from 'react'

const NoDataFound = ({image, text}) => {
    return (
        <div>
            <p className="text-center gap-4 flex flex-col text-xs justify-center items-center">
                <img src={image} alt="" className="w-36 h-36" /> {text}
            </p>
        </div>
    )
}

export default NoDataFound