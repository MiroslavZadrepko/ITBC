import styled from "styled-components"

const StyledInput = styled.input`
    padding: 1em;
    border: 2px solid ${props => props.error ? "red" : "black"};
`;

export default StyledInput