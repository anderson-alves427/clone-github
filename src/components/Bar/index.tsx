import { Container, List } from './styles';


export const Bar = () => {
    return(
        <Container>
            <List>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Repositories</a></li>
                <li><a href="#">Packages</a></li>
                <li><a href="#">Projects</a></li>
            </List>
        </Container>
    );
}
