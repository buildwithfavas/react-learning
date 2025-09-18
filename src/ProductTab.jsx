import Product from "./Product.jsx";

function ProductTab(){
    const arr = ["fast", "reliable", "portable"];
    //const obj = { a: "fast",b: "reliable"};

    return (
        <>
        <Product title="phone" price={10000} features={arr}/>
        <Product title="laptop" price={30000} features={arr}/>
        <Product title="pen" price={10} features={arr}/>
        </>
    );
}

export default ProductTab;