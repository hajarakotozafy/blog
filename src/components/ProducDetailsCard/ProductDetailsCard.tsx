import "./ProductDetailsCard.scss";
import { ProductDetailsCardProps } from "./ProductDetailsCard.types";

const ProductDetailsCard = ({
    icon,
    title,
    text
}: ProductDetailsCardProps) => {
    return(
        <div className="p-card-container">
            <div className="icon">
                {icon}
            </div>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ProductDetailsCard;