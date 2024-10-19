/* eslint-disable react/prop-types */
export default function Card({ imgUrl, onClick}) {
    return (
        <>
            <img 
                src={imgUrl} 
                alt="Memory Card" 
                onClick={onClick} 
                style={{ width: '200px', height: '200px' }} 
            />
        </>
    )
}