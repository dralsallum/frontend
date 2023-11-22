import styled from "styled-components";

export const ArWrapper = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10%;
  direction: rtl;
  padding: 0.2rem 1.4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ArContainerF = styled.div`
  order: 2;
  flex: 1;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    order: 1;
  }
`;
export const ArSubContainerF = styled.div`
  color: #252b2f;
`;
export const ArContainerFCon = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #666e7e;
  font-weight: 800;
  margin-bottom: 1rem;
`;
export const ArContainerFHe = styled.h3`
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #166b9b;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.625rem;
  }
`;
export const ArContainerFPara = styled.p`
  margin-bottom: 1.5rem;
`;
export const ArContainerS = styled.div`
  order: 1;
  flex: 1;

  @media screen and (max-width: 768px) {
    max-width: 350px;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    order: 2;
  }
`;
export const ArContainerSImg = styled.img`
  max-width: 100%;
  border-style: none;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #166b9b;
  white-space: nowrap;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: #003c69;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
