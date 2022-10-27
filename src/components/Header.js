import React, {useState} from 'react'
import styled from 'styled-components'
import { IoClose } from 'react-icons/io5';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
        <Logo>
            <h2 className='Logo'>TESLA</h2>
        </Logo>
            <Menu>
                <li><a href="">MODEL S</a></li>
                <li><a href="">MODEL 3</a></li>
                <li><a href="">MODEL X</a></li>
                <li><a href="">MODEL Y</a></li>
                <li><a href="">SOLAR PANELS</a></li>
                <li><a href="">SOLAR ROOFS</a></li>
        </Menu>
        <Menu1>
            <li onClick={() => setBurgerStatus(true)}>MENU</li>
        </Menu1>
        <BurgerNav show={burgerStatus}>
            <IoClose className='Close' onClick={() => setBurgerStatus(false)}/>
            <li><a href="">MODEL 3</a></li>
            <li><a href="">MODEL S</a></li>
            <li><a href="">MODEL X</a></li>
            <li><a href="">MODEL Y</a></li>
            <li><a href="">ROADSTEAR</a></li>
            <li><a href="">SOLAR ROOFS</a></li>
            <li><a href="">SOLAR PANELS</a></li>
            <li><a href="">ACCESSORIES</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header
const Container = styled.div`
    min-height: 60px;
    // width:100%;
    margin:20px 20px;
    position:fixed;
    display:flex;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
    z-index:1;
`

const Logo = styled.div`
    display:block;
`

const Menu = styled.div`
    display:flex;
    list-style:none;
    @media(max-width: 1069px){
        display:none;
    }
    
`
const Menu1 = styled.div`
    display:flex;
    list-style:none;
    cursor:pointer;
    
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background:white;
    width:300px;
    z-index:1;
    list-style:none;
    padding:20px;
    transform: ${props => props.show ? 'translateX(0%)': 'translateX(100%)'};
    li{
        padding:15px;
        margin-top:20px;
        border-bottom:1px solid black;
    }
`