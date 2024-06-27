import { FC, useState } from "react";
import "./ProductDescriptionsReviews.scss";

const ProductDescriptionsReviews:FC = () => {
    const [isDesc, setIsDesc] = useState(true);
    const switchTab = (value:boolean) => setIsDesc(value);
    return( 
        <div className="product-descriptions-reviews-container">
            <div className="title">
                <div onClick={()=>switchTab(true)} className={isDesc?'active':''}>Description</div>
                <div onClick={()=>switchTab(false)} className={isDesc?'':'active'}>Reviews (8)</div>
            </div>
            {isDesc?
                <div className="description">
                    <div className="specification">
                        <h3>Specifications</h3>
                        <div className="specifications-details">
                            <div>
                                <p className="label">Category</p>
                                <p className="value">Shoes</p>
                            </div>
                            <div>
                                <p className="label">Manufacturer</p>
                                <p className="value">Nike</p>
                            </div>
                            <div>
                                <p className="label">Serial Number</p>
                                <p className="value">358607726380311</p>
                            </div>
                            <div>
                                <p className="label">Ships from</p>
                                <p className="value">United States</p>
                            </div>
                        </div>
                        <h3>Product details</h3>
                        <div className="product-details">
                            <p>The foam sockliner feels soft and comfortable</p>
                            <p>Pull tab</p>
                            <p>Not intended for use as Personal Protective Equipment</p>
                            <p>Colour Shown: White/Black/Oxygen Purple/Action Grape</p>
                            <p>Style: 921826-109</p>
                            <p>Country/Region of Origin: China</p>
                        </div>
                        <h3>Benefits</h3>
                        <div className="benefits">
                            <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.</p>
                            <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushioning underfoot.</p>
                            <p>The foam midsole feels springy and soft.</p>
                            <p>The rubber outsole adds traction and durability.</p>
                        </div>
                        <h3>Delivery and returns</h3>
                        <div className="delivery-returns">
                            <p>Your order of $200 or more gets free standard delivery.</p>
                            <div>
                                <p>Standard delivered 4-5 Business Days</p>
                                <p>Express delivered 2-4 Business Days</p>
                            </div>
                            <p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                        </div>
                    </div>
                </div> 
            :
                <div className="review">
                </div>
            }
        </div>
    )
}

export default ProductDescriptionsReviews