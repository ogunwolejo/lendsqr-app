import React from 'react';
import "../styles/card/cardStyle.scss";

const CustomizeCard:React.FC<{backgroundColor:string; image:string; title:string; data:number}> = ({backgroundColor, image, title, data}) => {
    return (
        <div className="card-box card bg-white mx-md-1 mx-lg-1 mx-xl-0">
            <div className="card-body">
                <div className="d-flex flex-column justify-content-between align-items-start ps-0 ps-md-2 py-2 pe-md-2 ">
                    <div className="card-image-wrapper d-flex flex-row justify-content-center align-items-center" style={{backgroundColor}}>
                        <img src={image} alt="img" className='card-image-wrapper-image'/>
                    </div>
                    <div className="card-text mt-3">{title}</div>
                    <div className="card-title mt-2">{new Intl.NumberFormat().format(data)}</div>
                </div>
            </div>
        </div>
    );
}

export default CustomizeCard;