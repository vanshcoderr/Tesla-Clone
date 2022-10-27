import React from 'react'
import styled from 'styled-components'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Scroll className='container'>
    <Wrap className='section' bgImage={backgroundImg}>
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            {rightBtnText && 
                <RightButton>
                {rightBtnText}
                </RightButton>
            }
        </ButtonGroup>
        </Buttons>
    </Wrap>
    </Scroll>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url("/images/model3.jpg");
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
     
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width: 768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    opacity:0.85;
    margin:8px;
    cursor:pointer;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:rgb(23,26,32);
`
const Buttons = styled.div`
    text-align:center;
`
const Scroll = styled.div`
    scroll-snap-type: y mandatory;
`