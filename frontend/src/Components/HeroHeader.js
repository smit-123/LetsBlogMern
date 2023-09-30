import React, { useState } from 'react'

function HeroHeader({ setSearchQuery }) {

    return (
        <div className='hero_header '>
            <div className='row w-100  layer' style={{ display: "grid", placeItems: "center" }}>
                <div className='col-4'>
                    <div className='row p-3' style={{ border: "1px solid #fff", borderRadius: "0px 0px 20px 20px" }}>
                        <div className='col-lg-8'>
                            <input type='text' className='form-control' placeholder='Search here...' onChange={(e) => { setSearchQuery(e.target.value) }} />
                        </div>
                        <div className='col-lg-4'>
                            <button className='btn  btn-primary submit__btn ml-3 border-1' >search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader
