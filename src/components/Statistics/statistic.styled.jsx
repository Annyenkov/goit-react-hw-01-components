import styled from "@emotion/styled";


export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: fit-content;
margin-bottom: 20px;
border: 1px solid #000;
background-color: #fff;
`

export const List = styled.ul`
padding: 0;
list-style: none;
display: flex;
margin-bottom: 0;
`
export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 80px;
height: 80px;
color: #fff;
background-color: ${props => {
  switch (props.bg) {
    case ".docx":
      return "#0000ff";
    case ".pdf":
      return "#800080";
    case ".mp3":
      return "#ff6347";
    case ".psd":
      return "#00ffff";
    default:
      return "#000"
  }
}}
`
export const Percentage = styled.span`
font-size: 25px;
`