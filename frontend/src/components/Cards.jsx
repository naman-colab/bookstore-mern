import React from 'react'

const Cards = ({ item }) => {
    // Check if item is defined and has the expected properties
    if (!item) {
        return <div>Loading...</div>; // Or any placeholder UI you want to show while data is loading
    }



    return (
        <>
            <div className='mt-4'>
                <div className="card bg-base-100 w-92 h-[23rem] p-3 shadow-xl hover:scale-105 duration-200 cursor-pointer">
                    <figure>
                        <img className=''
                            src={item.image} // Use the image URL from the item prop
                            alt={item.name || 'Item image'} // Use the item name for the alt text, with a fallback
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name || 'Item Name'} {/* Display the item name with a fallback */}
                            <div className="badge badge-secondary">free</div>
                        </h2>
                        <p>{item.title || 'Item Title'}</p> {/* Display the item title with a fallback */}
                        <div className="card-actions justify">
                            <div className="badge badge-outline">${item.price }</div> {/* Display the item price with a fallback */}
                            <div className="badge bg-white cursor-pointer text-black badge-outline hover:bg-pink-500  hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
