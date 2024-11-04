import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FavoriteButton from "./FavoriteButton"

const CardContainer = styled.section`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
`
export const Card = ({ poketmon }) => {
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${poketmon.id}`)}>
            <img src={poketmon.front} />
            <div>{poketmon.name} <FavoriteButton poketmonId={poketmon.id}/></div>
        </CardContainer>
    )
}