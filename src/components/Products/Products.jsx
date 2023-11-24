import React, { useEffect, useState } from "react";
import {
  ItLi,
  ItPara,
  ItSu,
  ItSub,
  ItUl,
  ItemBut,
  ItemButIc,
  ItemCon,
  ItemConFiv,
  ItemConFour,
  ItemConOne,
  Button,
  ItemConSix,
  ItemConThr,
  ItemConThrLi,
  ItemConThrUl,
  ItemConTwo,
  ItemSa,
  ItemSat,
  ItemSubCon,
  PigCon,
  ProCon,
  ProFilBut,
  ProFilCon,
  ProFilNum,
  ProFilSpan,
  ProHeCon,
  ProInp,
  ProInpBut,
  ProInpCon,
  ProMa,
  ProMaHe,
  ProMaSpan,
  ProSuCon,
  ProSubCon,
  ProWra,
  SkCon,
  SkTm,
  SkTmIc,
  SkTw,
  SkTwPa,
  SkTwPara,
  SkiAt,
} from "./Products.elements";
import {
  faSearch,
  faFilter,
  faMapMarkerAlt,
  faHeart,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  Loading,
  LoadingBar,
  LoadingBarContainer,
  StyledSpinner,
} from "../Item/Item.elements";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `https://agency-saudi-688c7ddad04b.herokuapp.com/api/products?page=${currentPage}`;
        // ... additional parameters if needed

        const response = await axios.get(url);
        const fetchedProducts = response.data.products;
        const sortedProducts = fetchedProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setProducts(sortedProducts); // set sorted products to state
        setTotalPages(response.data.totalPages);
        // ... other response handling
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [cat, currentPage]);

  const renderPagination = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      return (
        <Button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          isActive={currentPage === pageNumber}
        >
          {pageNumber}
        </Button>
      );
    });
  };

  if (products.length === 0) {
    return (
      <Loading>
        <LoadingBarContainer>
          <LoadingBar />
        </LoadingBarContainer>
      </Loading>
    );
  }

  return (
    <>
      <ProWra>
        <ProCon>
          <ProInpCon>
            <ProInp type="text" placeholder="ابحث عن وظيفة" />
            <ProInpBut>
              <i>
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{
                    display: "block",
                    color: "005bbb",
                    height: "24px",
                    width: "24px",
                  }}
                />
              </i>
            </ProInpBut>
          </ProInpCon>
          <ProFilCon>
            <ProFilBut>
              <i>
                <FontAwesomeIcon
                  icon={faFilter}
                  style={{
                    display: "block",
                    color: "005bbb",
                    height: "24px",
                    width: "24px",
                  }}
                />
              </i>
              <ProFilNum>1</ProFilNum>
              <ProFilSpan>Filters</ProFilSpan>
            </ProFilBut>
          </ProFilCon>
        </ProCon>
      </ProWra>
      <ProHeCon>
        <ProSubCon>
          <ProSuCon>
            <div></div>
            <ProMa>
              <ProMaHe>
                Found <span></span> <ProMaSpan>3458</ProMaSpan> <span></span>
                jobs
              </ProMaHe>
            </ProMa>
          </ProSuCon>
        </ProSubCon>
      </ProHeCon>
      {products.map((product) => (
        <ItemCon key={product._id}>
          <ItemSubCon>
            <ItemSa>
              <ItemSat>
                <ItemConOne>
                  <ItSub>
                    <ItPara>الوظيفة</ItPara>
                    <ItUl>
                      <ItLi>الخبرة</ItLi>
                    </ItUl>
                  </ItSub>
                  <ItSu>{product.titleEng}</ItSu>
                </ItemConOne>
                <ItemConTwo>
                  <SkiAt to={`/product/${cat}/${product._id}`}>
                    {product.title}
                  </SkiAt>
                </ItemConTwo>
                <ItemConThr>
                  <ItemConThrUl>
                    <ItemConThrLi>{product.listOne}</ItemConThrLi>
                    <ItemConThrLi>{product.listTwo} </ItemConThrLi>
                  </ItemConThrUl>
                </ItemConThr>
                <ItemConFour></ItemConFour>
                <ItemConFiv>
                  <SkCon>
                    <SkTm>
                      <SkTmIc>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          style={{
                            color: "707070",
                            fill: "#707070",
                            stroke: "#707070",
                            marginRight: "8px",
                          }}
                        />
                      </SkTmIc>
                      {product.country}, {product.city}
                    </SkTm>
                    <SkTw>
                      <SkTwPara>
                        {product.minPrice}ريال <span>-</span>
                        {product.maxPrice}ريال
                      </SkTwPara>
                      <SkTwPa>/{product.duration} *</SkTwPa>
                    </SkTw>
                  </SkCon>
                </ItemConFiv>
                <ItemBut onClick={() => toggleFavorite(product._id)}>
                  <ItemButIc>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{
                        display: "block",
                        color: favorites[product._id] ? "green" : "blue",
                        height: "20px",
                        width: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </ItemButIc>
                </ItemBut>

                <ItemConSix></ItemConSix>
              </ItemSat>
            </ItemSa>
          </ItemSubCon>
        </ItemCon>
      ))}

      <PigCon>{renderPagination()}</PigCon>
    </>
  );
};

export default Products;
