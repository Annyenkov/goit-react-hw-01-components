import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
`
export const Item = styled.li`
border: 1px solid #000;
display: flex;
flex-direction: row;
margin-bottom: 10px;
align-items: center;
width: 150px;
background-color: #fff;
`
export const Indicator = styled.span`
width: 15px;
height: 15px;
margin-right: 10px;
margin-left: 5px;
background-color: ${props => {
  switch (props.bg) {
    case true:
      return "#008000";
    case false:
      return "#ff0000";
    default:
      return '#000';
  }
}};
border-radius: 50%
`
export const Avatar = styled.img`
margin-right: 10px;
`