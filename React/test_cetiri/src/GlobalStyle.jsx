import styled from 'styled-components'

const GlobalStyle = styled.div`
.launches{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
        margin: 1rem;
        padding: 1rem;
        border: #4b455c 2px solid;
        background-color: #8a99a78b;
    }
    .active{
        background-color: blue;
        padding: 1em;
    }
}
   
`

export default GlobalStyle