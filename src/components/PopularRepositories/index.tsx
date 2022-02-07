import { Container, ListRepositories, Content } from './styles';

interface IRepositories {
    name: string;
    description: string;
    language: string; 
}
interface PopularRepositoriesProps {
    repositories: IRepositories[]
}



export const PopularRepositories = ({ repositories }: any) => {
    return(
        <Container>
            <h1>Popular Repositories</h1>

            <ListRepositories>
                {repositories.map((repositorie: any, index: number) => (
                    <Content>
                        <div className="project-description">
                            <h2>{repositorie.name}</h2>
                            <p>{repositorie.description}</p>
                        </div>

                        <div className='types-languagens'>
                            <div className="circle"></div>
                            <span>{repositorie.language}</span>
                        </div>
                    </Content>
                ))}
                
            </ListRepositories>
        </Container>
    );
}