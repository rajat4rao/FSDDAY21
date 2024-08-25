import React from "react";
import Rating from "./Rating";

// Product list as an array
const products = [
  {
    id: 1,
    name: "Choco Lava",
    price: "50.00",
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    isSale: false,
  },
  {
    id: 2,
    name: "Strawberry Magic",
    price: "40.00",
    image:
      "https://images.pexels.com/photos/265801/pexels-photo-265801.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    isSale: true,
  },
  {
    id: 3,
    name: "Fruit Blast",
    originalPrice: "35.00 ",
    price: "45.00",
    image:
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 3,
    isSale: true,
  },
  {
    id: 4,
    name: "Yellow Mellow Delight",
    price: "40.00",
    image:
      "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    isSale: false,
  },
  {
    id: 5,
    name: "Brown Delight",
    price: "30.00",
    image:
      "https://images.pexels.com/photos/960540/pexels-photo-960540.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4,
    isSale: false,
  },
  {
    id: 6,
    name: "Custom Wedding Cake",
    originalPrice: "100.00 ",
    price: "90.00",
    image:
      "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4,
    isSale: true,
  },
];

// Component to display the list of products
const List = ({ addToCart, removeFromCart, isInCart }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                {product.isSale && (
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                )}
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    <Rating rating={product.rating} />
                    {product.isSale ? (
                      <>
                        <span className="text-muted text-decoration-line-through">
                          ${product.originalPrice}
                        </span>
                        ${product.price}
                      </>
                    ) : (
                      <>${product.price}</>
                    )}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {isInCart(product) ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
