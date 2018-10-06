import React from "react";
import styled from "styled-components";
import { MdArrowBack } from "react-icons/md";

const Modal = styled.div`
  position: fixed;
  top: 3em;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 99;
`;
const ArticleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.div`
  right: 0;
  height: 20%;
`;
const ArticleContent = styled.div`
  padding: 1.5em 1em;
  min-height: 70%;
`;
const ArticleTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.5em;
`;
const ArticleBody = styled.div``;
const ArticleFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 18px;
    font-weight: bold;
    padding: 7px 12px;
    border-radius: 5px;
    background: #e31713;
    color: white;
  }
`;
const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 20px;
  top: 5px;
  width: 30px;
  height: 30px;
  background: #e31713;
  * {
    font-size: 24px;
    color: white;
    font-weight: bold;
  }
`;

const ArticleView = ({ article, closeView }) => (
  <Modal>
    <ArticleContainer>
      <BackButton onClick={closeView}>
        <MdArrowBack />
      </BackButton>
      <ImgContainer>
        <img src={article.imageUrl} alt={article.title} />
      </ImgContainer>
      <ArticleContent>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleBody>{article.description}</ArticleBody>
      </ArticleContent>
    </ArticleContainer>
    <ArticleFooter>
      <span>Com arribar-hi</span>
    </ArticleFooter>
  </Modal>
);

export default ArticleView;
