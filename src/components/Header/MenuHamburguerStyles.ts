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
  }

  .botao {
    width: 30px;
    height: 25px;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  .en {
    margin-right: 5px;
  }

  .botao img {
    width: 100%;
    height: 4vh;
  }

  .box-img {
    width: 150px;
    height: 150x;
    display: flex;
    align-items: center;
    justify-content: center;
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
      padding-left: 0px;
      width: 50%;
      height: 100vh;
      background-color: #fff;
      z-index:9999;
      justify-content: top;
      align-items: center;
      padding: 30px 10px;
    }

    .links-navbar {
      color: black;
      position: relative;
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
    padding: 25px
  }
`