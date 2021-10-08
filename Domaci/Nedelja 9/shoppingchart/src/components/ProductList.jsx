import Product  from "./Product";

const ProductList = ({ products }) => {
    return (
        <>
            <div>
                <ul>

                    {products.map(product => <Product key={product.id} product={product} />)}

                </ul>
            </div>

        </>
    );
}
export default ProductList;