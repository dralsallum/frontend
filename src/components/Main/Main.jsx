import React, { useState } from "react";
import {
  MaBut,
  MaConImg,
  MaConOne,
  MaConTwo,
  MaHe,
  MaInput,
  MaInputCon,
  MaInputSub,
  MaSubTwo,
  MaWrapper,
} from "./Main.elements";
import Medical from "../../assets/medical.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // New function to handle the search form submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm); // To check what's being sent
    try {
      const response = await axios.get(
        `https://agency-saudi-688c7ddad04b.herokuapp.com/api/products?search=${searchTerm}`
      );
      console.log("API Response:", response.data); // To check what's being received
      setSearchResults(response.data.products); // Assuming the response has a 'products' field
      navigate(`/products/search?query=${searchTerm}`);
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
    <>
      <MaWrapper>
        <MaConOne>
          <MaConImg src={Medical} alt="" />
        </MaConOne>
        <MaConTwo>
          <MaSubTwo>
            <MaHe>اصنع وظيفتك اصنع حياتك</MaHe>
            <div>
              <div>
                <div>
                  <div>
                    <form onSubmit={handleSearchSubmit}>
                      <MaInputCon>
                        <MaInputSub>
                          <MaBut type="submit">
                            <i>
                              <FontAwesomeIcon
                                icon={faSearch}
                                style={{
                                  display: "block",
                                  color: "2790cd",
                                  height: "24px",
                                  width: "24px",
                                }}
                              />
                            </i>
                          </MaBut>
                          <label htmlFor=""></label>
                          <MaInput
                            type="text"
                            placeholder="ابحث عن وظيفة بالقطاع الصحي"
                            value={searchTerm} // Controlled component
                            onChange={handleSearchChange} // New event handler
                          />
                        </MaInputSub>
                      </MaInputCon>
                    </form>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </MaSubTwo>
        </MaConTwo>
      </MaWrapper>
    </>
  );
};

export default Main;
