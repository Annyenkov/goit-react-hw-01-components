import styled from "@emotion/styled";

export const Item = styled.td`
text-align: center;
width: 300px;
height: 50px;
color: #grey;
`
export const Title = styled.th`
height: 50px;
background-color: #00ffff;
color: #000;
`

export const Container = styled.table`
background-color: #000;
`

export const Line = styled.tr`
background-color: #fff;
&:nth-of-type(2n) {
  background-color: #919090;
  color: #fff;
}
`