import styled from "styled-components";

export const RecWr = styled.div`
  display: block;
`;
export const RecCon = styled.div`
  width: 100%;
  padding-top: 24px;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 90%;
  }
`;
export const RecSuCon = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const RecFle = styled.div`
  padding: 0;
  margin-left: -20px;
  margin-right: -20px;
  @media screen and (max-width: 768px) {
  }
`;
export const RecHe = styled.h3`
  font-size: 32px;
  letter-spacing: -0.8px;
  line-height: 36px;
  padding-bottom: 20px;
  text-align: center;
  color: rgba(0, 111, 185);
  font-family: Raleway;
  @media screen and (max-width: 768px) {
  }
`;
export const Sug = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const SugWr = styled.div`
  outline: none;
  @media screen and (max-width: 768px) {
  }
`;
export const SugSubWr = styled.div`
  margin: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 32px;
  --n: 1;
  --i: 0;
  --neg: -100%;
  @media screen and (max-width: 768px) {
  }
`;
export const SugUl = styled.ul`
  bottom: 0;
  margin: 10px 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  text-align: center;
  width: 100%;
  list-style: none;
  z-index: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const SugLi = styled.li`
  opacity: 1;
  background-color: #005bbb;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  display: inline-block;
  filter: alpha(opacity=30);
  margin: 0 8px;
  box-sizing: border-box;
  transition: opacity 0.25s ease-in;
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 16px;
  line-height: 24px;
  @media screen and (max-width: 768px) {
  }
`;
export const SugBut = styled.button`
  left: 0;
  cursor: inherit;
  display: none;
  filter: alpha(opacity=0);
  opacity: 0;
  background: none;
  border: 0;
  filter: alpha(opacity=40);
  position: absolute;
  -o-transition: all 0.25s ease-in;
  transition: all 0.25s ease-in;
  z-index: 2;
  @media screen and (max-width: 768px) {
  }
`;
export const SugCon = styled.div`
  margin: auto;
  overflow: hidden;
  -o-transition: height 0.15s ease-in;
  transition: height 0.15s ease-in;
  width: 100%;
  padding-bottom: 30px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
  }
`;
export const SugConUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  transition: all 0.35s ease-in-out;
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 350ms;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
    width: 100%;
  }
`;
export const ItemLi = styled.li`
  min-width: 50%;
  border-left: 0 solid rgba(0, 0, 0, 0.2);
  margin: 0;
  position: relative;
  text-align: center;
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 16px;
  line-height: 24px;
  @media screen and (max-width: 768px) {
  }
`;
export const ItemWr = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  border-right: 0 solid rgba(0, 0, 0, 0.2);
  text-align: left;
  @media screen and (max-width: 768px) {
  }
`;
export const ItemSuWr = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
  }
`;
export const ItemConOn = styled.div`
  box-sizing: border-box;
  background-color: rgba(0, 60, 105);
  border-radius: 5px;
  color: #fff;
  font-family: Helvetica Now Text Regular;
  font-size: 11px;
  line-height: 19px;
  padding: 5px 10px 3px;
  @media screen and (max-width: 768px) {
  }
`;
export const ItemConTw = styled.div`
  flex-grow: 1;
  color: #5cb047;
  font-family: Helvetica Now Display Medium;
  font-size: 12px;
  line-height: 19px;
  margin-left: 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItButCon = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const ItBut = styled.button`
  border-radius: 100%;
  height: 36px;
  width: 36px;
  background-color: #fff;
  border-color: #0977a9;
  cursor: pointer;
  border: none;
  @media screen and (max-width: 768px) {
  }
`;
export const ItButIc = styled.i`
  font-family: Font Awesome\6 Pro;
  font-style: normal;
  @media screen and (max-width: 768px) {
  }
`;
export const ItLinkCon = styled.div`
  color: rgba(0, 111, 185);
  font-family: Helvetica Now Display Bold;
  font-size: 18px;
  letter-spacing: -0.27px;
  line-height: 22px;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
  }
`;
export const ItLink = styled.a`
  color: inherit;
  text-decoration: inherit;
  background-color: transparent;

  @media screen and (max-width: 768px) {
  }
`;
export const Loc = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;
export const LocWr = styled.div`
  color: #333;
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;

  @media screen and (max-width: 768px) {
  }
`;
export const LocCon = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #444;
  font-family: Helvetica Now Display Medium;
  font-size: 12px;
  @media screen and (max-width: 768px) {
  }
`;
export const LocSpan = styled.span`
  color: #5caf47;
  font-family: Helvetica Now Display Bold;
  font-size: 22px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
  }
`;
export const ItemSk = styled.div`
  color: #333;
  font-family: Helvetica Now Display Medium;
  font-size: 12px;
  letter-spacing: -0.24px;
  margin-top: 4px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
  }
`;
