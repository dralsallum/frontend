import React from "react";
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

const Main = () => {
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
                    <MaInputCon>
                      <MaInputSub>
                        <MaBut>
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
