import styled from "styled-components";

export const Wrap = styled.div`
    min-height: 100vh;
    // width는 div가 블록요소이기 때문에 기본적으로 부모 전체(100%)가 이미 적용됨
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f6fa;
    padding: 15px;
`;

export const Card = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 40px;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    gap: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 24px;
    text-align: center;
`;