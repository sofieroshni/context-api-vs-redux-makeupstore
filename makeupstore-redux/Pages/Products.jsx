import Product from "../Components/Product";
function Products() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Our Products</h1>
            <div className="row">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}