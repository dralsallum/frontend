import React, { useState, useEffect } from "react";
import {
  ItBut,
  ItButCon,
  ItButIc,
  ItLink,
  ItLinkCon,
  ItemCon,
  ItemConOn,
  ItemConTw,
  ItemLi,
  ItemSk,
  ItemSuWr,
  ItemWr,
  Loc,
  LocCon,
  LocSpan,
  LocWr,
  RecCon,
  RecFle,
  RecHe,
  RecSuCon,
  RecWr,
  Sug,
  SugBut,
  SugCon,
  SugConUl,
  SugLi,
  SugSubWr,
  SugUl,
  SugWr,
} from "./Recommendation.elements";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Recommendation = () => {
  return (
    <RecWr>
      <RecCon>
        <RecSuCon>
          <RecFle>
            <RecHe>View your Recent Jobs</RecHe>
            <Sug>
              <SugWr>
                <SugSubWr>
                  <SugUl>
                    <SugLi></SugLi>
                    <SugLi></SugLi>
                    <SugLi></SugLi>
                  </SugUl>
                  <SugBut></SugBut>
                  <SugCon>
                    <SugConUl>
                      <ItemLi>
                        <ItemWr>
                          <ItemSuWr>
                            <ItemConOn>Travel</ItemConOn>
                            <ItemConTw>Exclusive</ItemConTw>
                            <ItButCon>
                              <ItBut>
                                <ItButIc>
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{
                                      display: "block",
                                      color: "blue",
                                      height: "20px",
                                      width: "20px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </ItButIc>
                              </ItBut>
                            </ItButCon>
                          </ItemSuWr>
                          <ItemSk>Skilled</ItemSk>
                          <ItLinkCon>
                            <ItLink href="">
                              Physical Therapist - Skilled
                            </ItLink>
                          </ItLinkCon>
                          <Loc>
                            <LocWr>
                              <i></i>
                              Hammonton, NJ
                            </LocWr>
                            <LocCon>
                              <LocSpan>$1,649-$1,900</LocSpan>
                            </LocCon>
                          </Loc>
                        </ItemWr>
                      </ItemLi>
                      <ItemLi>
                        <ItemWr>
                          <ItemSuWr>
                            <ItemConOn>Travel</ItemConOn>
                            <ItemConTw>Exclusive</ItemConTw>
                            <ItButCon>
                              <ItBut>
                                <ItButIc>
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{
                                      display: "block",
                                      color: "blue",
                                      height: "20px",
                                      width: "20px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </ItButIc>
                              </ItBut>
                            </ItButCon>
                          </ItemSuWr>
                          <ItemSk>Skilled</ItemSk>
                          <ItLinkCon>
                            <ItLink href="">
                              Physical Therapist - Skilled
                            </ItLink>
                          </ItLinkCon>
                          <Loc>
                            <LocWr>
                              <i></i>
                              Hammonton, NJ
                            </LocWr>
                            <LocCon>
                              <LocSpan>$1,649-$1,900</LocSpan>
                            </LocCon>
                          </Loc>
                        </ItemWr>
                      </ItemLi>
                    </SugConUl>
                  </SugCon>
                  <SugBut></SugBut>
                </SugSubWr>
              </SugWr>
            </Sug>
          </RecFle>
        </RecSuCon>
      </RecCon>
    </RecWr>
  );
};

export default Recommendation;
