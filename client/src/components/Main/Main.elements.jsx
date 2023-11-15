import styled from "styled-components";

export const MaWrapper = styled.div`
  direction: rtl;
  background: transparent linear-gradient(109deg, #0970b7, #4fbaeb) 0 0
    no-repeat padding-box;
  position: relative;
  box-sizing: border-box;
  height: 550px;

  @media screen and (max-width: 768px) {
    height: 550px;
  }
`;

export const MaConOne = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 0;
  justify-content: center;

  @media screen and (max-width: 768px) {
  }
`;
export const MaConImg = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  max-width: 100%;
  display: block;
  vertical-align: middle;

  @media screen and (max-width: 768px) {
  }
`;
export const MaConTwo = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  padding: 55px 60px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 45px 50px;
  }
`;
export const MaSubTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const MaHe = styled.h1`
  opacity: 1;
  color: #ffffff;
  font-family: Raleway Medium;
  font-size: 52px;
  line-height: 73px;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  @media screen and (max-width: 768px) {
    font-size: 45px;
    line-height: 73px;
  }
`;
export const MaInputCon = styled.div`
  width: 100%;
  padding: 8px;
  background: #fff 0 0 no-repeat padding-box;
  border-radius: 10px;
  margin: 0;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const MaInputSub = styled.div`
  display: flex;
  margin: auto;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const MaInput = styled.input`
  border-radius: 10px;
  color: #666 !important;
  font: normal normal 500 16px/18px Helvetica Now Text Regular;
  letter-spacing: 0.16px;
  opacity: 1;
  padding: 13px 20px 13px 45px;
  text-align: right;
  width: 100%;
  overflow: visible;
  margin: 0;
  border: none;
  outline: none;

  @media screen and (max-width: 768px) {
    text-align: right;
  }
`;
export const MaBut = styled.button`
  color: inherit;
  line-height: inherit;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  border: none;

  @media screen and (max-width: 768px) {
  }
`;
