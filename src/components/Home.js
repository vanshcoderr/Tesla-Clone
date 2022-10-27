import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        title = "MODEL 3"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY!!"
        backgroundImg = "model3.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        />
        <Section 
        title = "MODEL Y"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY!!"
        backgroundImg = "modely.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        />
        <Section 
        title = "MODEL S"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY!!"
        backgroundImg = "models.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        />
        <Section 
        title = "MODEL X"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY!!"
        backgroundImg = "model x.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        />
        <Section 
        title = "SOLAR PANELS"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY!!"
        backgroundImg = "solar panels.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        />
        <Section 
        title = "SOLAR ROOF"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY!!"
        backgroundImg = "solar roos.jpg"
        leftBtnText = "CUSTOM ORDER"
        rightBtnText = "EXISTING INVENTORY"
        />
        <Section 
        title = "ACCESSORIES"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY!!"
        backgroundImg = "accessories.jpg"
        leftBtnText = "SHOP NOW"
        />

    </Container>
  )
}

export default Home 

const Container = styled.div`

`