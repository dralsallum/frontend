import styled from "styled-components";

export const ReWr = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const QuestionChapterProgressContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  width: 30%;
  background-color: rgb(218, 225, 234);
`;

export const QuestionChapterProgress = styled.div`
  position: relative;
  height: 0.75rem;
  background-color: #4c47e9;
  transition: width 0.3s ease 0s;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  animation: 2s ease 0s 1 normal none running fAHHxO;
`;
export const QuestionChapterProgressSpan = styled.span`
  font-size: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  right: calc(100% - 1.188rem);
  border-radius: 1.25rem;
  background-color: #4c47e9;
  color: rgb(255, 255, 255);
  padding: 0px 0.5rem;
  min-width: 30px;
  position: sticky;
  margin-bottom: 0rem;
`;
