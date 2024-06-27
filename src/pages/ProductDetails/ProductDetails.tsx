import { FC } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { RxExternalLink } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

import Button from "../../components/Button/Button";
import ProductDetailsCard from "../../components/ProducDetailsCard/ProductDetailsCard";
import { ProductDetailsCardData } from "./ProductDetailsData";
import ProductDescriptionsReviews from "../../components/ProductDescriptionsReviews/ProductDescriptionsReviews";

import "./ProductDetails.scss";

import P1 from "../../assets/images/product-details/product-1.png";
import P1Min from "../../assets/images/product-details/product-1-min.png";
import P2Min from "../../assets/images/product-details/product-2-min.png";
import P3Min from "../../assets/images/product-details/product-3-min.png";
import P4Min from "../../assets/images/product-details/product-4-min.png";
import P5Min from "../../assets/images/product-details/product-5-min.png";
const ProductDetails:FC = () => {

    const StarsComponent = (nb:number) =>{
        const component = [];
        for(let i=1; i<=nb; i++){
            component.push(<FaStar/>)
        }
        if(nb%1 !== 0)component.push(<FaStarHalfAlt/>);
        return component
    }
    return (
        <div className="product-details-container">
            <div className="product-details-inner"> 
                <div className="product-details-header">
                    <span><IoIosArrowBack/> Back</span>
                    <div className="right-head">
                        <span><RxExternalLink/></span>
                        <span><MdModeEdit/></span>
                        <Button>Published <IoIosArrowDown/></Button>
                    </div>
                </div>

                <div className="details">
                    <div className="left-details">
                        <div className="view">
                            <img src={P1}/>
                            <div className="image-switcher">
                                <IoIosArrowBack/>
                                <span>1/8</span>
                                <IoIosArrowForward/>
                            </div>
                        </div>
                        <div className="miniature">
                            <div><img src={P1Min}/></div>
                            <div><img src={P2Min}/></div>
                            <div><img src={P3Min}/></div>
                            <div><img src={P4Min}/></div>
                            <div><img src={P5Min}/></div>
                        </div>
                    </div>
                    <div className="right-details">
                        <div className="state"><span>NEW</span></div>
                        <p className="stock-state">LOW STOCK</p>
                        <h3>Mountain Trekking Boots</h3>
                        <div className="review">
                            <div>
                                {
                                    StarsComponent(4.5)
                                }
                            </div>
                            <span>(6.98k reviews)</span>
                        </div>
                        <div className="price">
                            <p>$68.71</p>
                        </div>
                        <p className="description">Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.</p>
                        <div className="separator"></div>
                        <div className="other-details">
                            <div className="color-row">
                                <p>Color</p>
                                <div>
                                    <IoCheckmark/>
                                    <div className="color" style={{background: 'rgba(0, 171, 85, 1)'}}></div>
                                </div>
                            </div>
                            <div className="size-row">
                                <p>Size</p>
                                <div>
                                    <span>9</span>
                                    <IoIosArrowDown/>
                                </div>  
                            </div>
                            <p className="size-chart">Size chart</p>
                            <div className="quantity-row">
                                <p>Quantiy</p>
                                <div>
                                    <AiOutlineMinus/>
                                    <span> {1} </span>
                                    <AiOutlinePlus/>
                                </div>
                            </div>
                            <p className="available">Available: {10}</p>
                        </div>
                        <div className="separator"></div>
                        <div className="btn-container">
                            <Button color="disabled"><BiSolidCartAdd/> Add to cart</Button>
                            <Button color="disabled">Buy now</Button>
                        </div>
                        <div className="sub-btn-container">
                            <p><AiOutlinePlus/> <span>Compare</span></p>
                            <p><FaHeart/><span>Favorite</span></p>
                            <p><FaShareAlt/><span>Share</span></p>
                        </div>
                    </div>
                </div>

                <div className="details-card">
                    {ProductDetailsCardData.map((elem, index)=>{
                        return(
                            <ProductDetailsCard key={index} icon={elem.icon} title={elem.title} text={elem.text}/>
                        )
                    })}
                </div>

                <ProductDescriptionsReviews/>
            </div>
        </div>
    )
}

export default ProductDetails;