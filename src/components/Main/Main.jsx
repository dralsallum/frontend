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
  Button,
} from "./Main.elements";
import Medical from "../../assets/medical.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
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
                    <Link
                      to="/upload"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <Button>قدم الان</Button>
                    </Link>
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
