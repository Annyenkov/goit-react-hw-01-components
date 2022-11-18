import styled from "@emotion/styled";

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 302px;
margin-bottom: 50px;
background-color: #e2e2e2;
`

export const Avatar = styled.img`
width: 150px;
heigth: 150px;
margin: 30px 0;
border: 1px solid #000;
border-radius: 50%;
`

export const AvatarData = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const CardStat = styled.ul`
margin: 0;
padding: 0;
width: 100%;
list-style: none;
display: flex;
`

export const CardStatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: calc(100% / 3);
height: 50px;
border: 1px solid #919090;
background-color: #c5c1e1;
`

export const UserName = styled.p`
font-size: 25px;
font-weight: 800;
`

export const UserInfo = styled.p`
color: #292d35;
`