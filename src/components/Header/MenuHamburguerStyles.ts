import styled from 'styled-components';

interface MenuProps {
  isOpen: boolean
}

export const Container = styled.nav<MenuProps>`
  background-image: url('assets/fundosemlogo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  z-index:999;
  position: fixed;
  width:100%;
  top:-10px;
  height: 30vh;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
    gap: 2rem;
    padding-left: 0px;
    padding-right: 20px;
    align-items: center;
    justify-content: right;
  }

 
  .links-navbar {
    color: #F5F5DC;
    font-weight: 700;
    text-decoration: none;
    align-items: center;
  }

  .botoes {
    padding-left: 10px;
    display: flex;
  }

  .botao {
    width: 25px;
    height: 20px;
    border: 0;
    padding: 0;
    cursor: pointer;
    display: flex;
  }

  .en {
    margin-right: 5px;
  }

  .botao img {
    width: 100%;
    height: 100%;
  }

  .box-img {
    width: 150px;
    height: 150x;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  }

  .box-img .logo {
    width: 100%;
    height: 100%;
  }


  @media(max-width: 5000px) {
    height: 3vh;
    display: flex;
  }

  @media(max-width: 5000px) {
    justify-content: space-between;
    border-radius: 0;
    flex-direction: row-reverse;

    nav {
      flex-direction: column;
      position: absolute;
      top: 0px;
      right: 0px;
      width: 35%;
      height: 105vh;
      background: linear-gradient(90deg, #00213A 0%, #003D4A 35%, #011B34 100%);
      z-index:9999;
      justify-content: top;
      align-items: center;
      text-align: center;
      padding: 40px 10px;
    }

    .links-navbar {
      color: #fff;
      position: relative;
      font-size: 15px;
    }

    .links-navbar::after {
      content: "";
      position: absolute;
      background-color: black;
      left: 0;
      bottom: -10px;
      height: 3px;
      width: 0;
      transition: .6s;
    }

    .links-navbar:hover::after {
      width: 100%;
    }

    .marge {
      margin-top: 30px;
    }

    .botao_nav {
      z-index:99999;
    }

  }

`

export const ContentMobile = styled.div`
  display: none;

  @media(max-width: 5000px) {
    display: flex;
    padding: 25px;
  }
`