import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
  border-radius: 10px 0 0 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  max-width: 100%;
  padding: 0 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #d6d6d6;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  height: 35px;
  background-color: #fff;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  border: 0;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-top: 1px solid #d6d6d6;
  max-height: 700px;
  overflow: auto;
`;
