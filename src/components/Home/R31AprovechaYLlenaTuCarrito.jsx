
import { useState } from "react";
import { products } from "../../data/R31-query-llena-tu-carrito.js";

const R31AprovechaYLlenaTuCarrito = ({ props = [] }) => {
  console.log("props", props);

  const [currentIndex, setCurrentIndex] = useState(0);

  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  const next = () => {
    setCurrentIndex((prev) =>
      prev + ITEMS_PER_PAGE >= products.length
        ? 0
        : prev + ITEMS_PER_PAGE
    );
  };

  const previous = () => {
    setCurrentIndex((prev) =>
      prev - ITEMS_PER_PAGE < 0
        ? Math.max(0, (totalPages - 1) * ITEMS_PER_PAGE)
        : prev - ITEMS_PER_PAGE
    );
  };

  return (
    <div className="container my-4">

      {/* Carousel header */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <h4 className="mb-0">Productos destacados</h4>

        <div className="d-flex gap-2">

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={previous}
            disabled={products.length <= ITEMS_PER_PAGE}
          >
            &#10094;
          </button>

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={next}
            disabled={products.length <= ITEMS_PER_PAGE}
          >
            &#10095;
          </button>

        </div>
      </div>

      {/* Carousel content */}
      <div className="row row-cols-5 g-2">

        {visibleProducts.map((product) => (

          <div className="col" key={product.id}>

            <div className="card h-100">

              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{
                  height: "150px",
                  objectFit: "contain"
                }}
              />

              <div className="card-body d-flex flex-column">

                <h6 className="card-title">
                  {product.name}
                </h6>

                <p className="card-text text-primary fw-bold mt-auto">
                  S/ {product.price}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Pagination indicator */}
      <div className="text-center mt-3">

        <small className="text-muted">
          Página {Math.floor(currentIndex / ITEMS_PER_PAGE) + 1}
          {" / "}
          {totalPages}
        </small>

      </div>

    </div>
  );
};

export default R31AprovechaYLlenaTuCarrito;
