import React from "react";
import styled from '@emotion/styled'
import StudentDashboard from "../StudentDashboard";
import HeaderComponent from "../../Components/Header";

const Wrapper=styled("div")`
padding:0px 70px 0px 70px`

const Header=styled("div")`
height:100px;
width:100%;

`

const BodyContainer=styled("div")`
`

const Home =()=>{

                return(
                                <Wrapper>
                                    <Header>
                                      <HeaderComponent/>
                                    </Header>
                                    <BodyContainer>
                                          <StudentDashboard/>
                                    </BodyContainer>
                                </Wrapper>
                )
}
export default Home