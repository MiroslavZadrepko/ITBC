import styled from 'styled-components'

const StyledCard = styled.div`
    transition: transform 0.9s;
    height: 150px;
    margin: 2rem;
    padding: 2rem;
    background-color: #d2691e;
    width: 150px;
    &.change{
        transform: rotateY(180deg);
    }
`

export default StyledCard