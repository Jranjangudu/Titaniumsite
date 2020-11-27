import React from 'react'
import Commingpro from './Commingpro'

function Commingproref() {
    let listofimage=[
        {img:"https://cdn.pixabay.com/photo/2017/08/05/00/12/people-2581913_960_720.jpg"},
        {img:"https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_960_720.jpg"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HXSkcHM8KrA23TLFG-EGOEkOGHcR1sU7cg&usqp=CAU"},
        {img:"https://cdn.pixabay.com/photo/2016/06/29/08/41/wedding-dresses-1486256_960_720.jpg"},
        {img:"https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_960_720.jpg"},
        {img:"https://cdn.pixabay.com/photo/2018/02/24/20/40/fashion-3179178_960_720.jpg"}
    ]
    return (
        <div>
            <Commingpro items={listofimage}/>
        </div>
    )
}

export default Commingproref
