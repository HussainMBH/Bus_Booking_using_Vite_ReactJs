
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 1rem;
`

const HeaderTitle = styled.h1`
    font-size: 2rem;
    margin: 0;
`

export default function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderTitle>Bus Ticket Booking System</HeaderTitle>
            </HeaderContainer>
        </div>
    )
}
