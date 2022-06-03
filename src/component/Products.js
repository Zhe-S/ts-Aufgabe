import React, { useState, useEffect } from "react";

const Products = ({productItems, handleAddProduct}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://tlv-events-app.herokuapp.com/events/uk/london"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };
  const ShowProducts = () => {
    return (
      <>
        {filter.map((productItems) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center " key={productItems.id}>
                  <h6 class="card-title m-2">
                    {productItems.title.substring(0, 12)}...
                  </h6>
                  <img
                    src={productItems.flyerFront}
                    class="card-img-top"
                    alt={productItems.title}
                    height="300px"
                    object-fit="cover"
                  />
                  <div class="card-body text-start">
                    <p class="card-text">| <span class="fw-bold">Starts: </span> {productItems.startTime}</p>
                    <p class="card-text">| <span class="fw-bold">Ends: </span>{productItems.endTime}</p>
                    <h6 class="card-title ">
                      <a
                        class="text-decoration-none text-start d-flex align-items-center"
                        href={productItems.venue.direction}
                        alt={productItems.venue.name}
                      >
                        <i class="fa fa-map-marker fa-2x me-3" aria-hidden="true"></i>
                        {productItems.venue.name}
                      </a>
                    </h6>

                    <a href="/" class="btn btn-outline-dark fw-bold text-right" onClick={()=>handleAddProduct(productItems)}>
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5 mt-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Public Events</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
