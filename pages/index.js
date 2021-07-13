import MainGrid from './src/components/MainGrid';
import Box from './src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from './src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations';


// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `




function ProfileSidebar(property) {
  return (
  <Box>
    <img src={`https://github.com/${property.githubUser}.png`} alt="profile photo" style={{borderRadius: '1rem' }}/>
  </Box>
  );
}


export default function Home() {

  const username = 'diogozdev';
  const pessoasFavoritas = ['kevin-powell', 'omariosouto', 'andressadesign', 'sergiogenealogia'];


  return (
    <>
    <AlurakutMenu />
  <MainGrid>
    <div className="profileArea" style={{gridArea:'profileArea'}} >
      <ProfileSidebar githubUser={username} />
    </div>
    

    <div className="welcomeArea" style={{gridArea:'welcomeArea'}} >
      <Box>
        <h1 className="title">
          Bem vindo!
        </h1>
        <OrkutNostalgicIconSet />

      </Box>
    </div>
    
    <div className="relationArea" style={{gridArea:'relationArea'}} >
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2>
        <ul>
          {pessoasFavoritas.map((item) => {

            return(
              <li>
                <a href={`/users/${item}`} key={item}>
                  <img src={`https://github.com/${item}.png`}/>
                  <span>{item}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <Box>
        Comunidades
      </Box>
    </div>
    

  </MainGrid>
  </>
  )
}
