import "./Product.css";

function Product({title, price, features}){
    return (
        <div className="Product">
        <h3>{title}</h3>
        <h5>Price: {price-1}</h5>
        <ul>
            {features.map((feature) => (
                <li key={feature}>{feature}</li>
                ))}
                </ul>
        </div>
    );
}

export default Product;