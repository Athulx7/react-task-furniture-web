import React from 'react'
import './image.css'

function Image() {
  return (
    <>
    <div className='container me-4 mt-5'>
        <div className='image1'>
            <div className='imagerounddiv '>
                <div className='rounddovtext'>
                    <h5>On Sale</h5>
                    <div className='roundLine'></div>
                    <h3 style={{marginLeft:'20px',marginTop:'30px'}}>₹88.00</h3>
                </div>
            </div>

            <div className="imageText">
                <div className='imagetext1'>
                    <h1 style={{fontSize:'50px',fontWeight:'bolder'}}>Discount 60%</h1>
                    <p style={{fontSize:'12px' ,color:'#919291'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sed cumque necessitatibus dolore reiciendis vel ipsam laudantium optio maiores? Ipsam consequatur, quaerat obcaecati corporis ea totam nemo consectetur sequi earum?</p>
                    <button className='image-button'>BUY NOW</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Image
