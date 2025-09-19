import "./Product.css";

function Product({title, price, features}){
    let isDiscount = price > 10000;
    let styles = {backgroundColor: isDiscount ? "pink" : ""};
    return (
        <div className="Product" style={styles}>
        <h3>{title}</h3>
        <h5>Price: {price-1}</h5>
        { isDiscount && <p>Discount : 5%</p>}
        <ul>
            {features.map((feature) => (
                <li key={feature}>{feature}</li>
                ))}
                </ul>
        </div>
    );
}

export default Product;