import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <a href="#">LOGO</a>
      <span>4 de Noviembre, 2021</span>
      <a href="#">
        <i className="far fa-user"></i>
      </a>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 20px;
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 1em;
  font-weight: 600;
  line-height: 20px;

  i {
    color: #ffffff;
    font-size: 1.7em;
  }
`;

export default Header;
