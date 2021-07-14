import React from 'react';
import MainGrid from './src/components/MainGrid';
import Box from './src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from './src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations';

function ProfileSidebar(property) {
  return (
  <Box as="aside">
    <img src={`https://github.com/${property.githubUser}.png`} alt="profile photo" style={{borderRadius: '1rem' }}/>
    <hr/>
    <p>
        <a className="boxLink" href={`https:/github.com/${property.githubUser}.png`}>
          @{property.githubUser}
        </a>
    </p>
    <hr/>
    <AlurakutProfileSidebarMenuDefault></AlurakutProfileSidebarMenuDefault>
  </Box>
  );
}

export default function Home() {
  
  const username = 'diogozdev';
  const [comunidades, setComunidades] = React.useState([{
    id:'231654987',
    title:'Acordar cedo é zoado',
    image:'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }]);

  /*/const comunidades = [
    'Alurakut',
    'Pinguins',
    'Hamsters',
    'Paçoca',
    'Rock',
    'Pipoca',
  ];*/
  const pessoasFavoritas = [
    'kevin-powell', 
    'omariosouto', 
    'andressadesign', 
    'sergiogenealogia',
    'peas'
  ];



  return (
    <>
    <AlurakutMenu githubUser={username} />
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
      <Box>
        <h2 className="subtitle">O que você deseja fazer?</h2>
        <form onSubmit={function handleCreateComunity(e) {
          e.preventDefault();
          console.log(e);

          const dadosForm = new FormData(e.target);

          console.log('Campo: ', dadosForm.get('title'));
          console.log('Campo: ', dadosForm.get('image'));


          const newComunity = {
            id: new Date().toISOString,
            titulo: dadosForm.get('title'),
            imagem: dadosForm.get('image'),
          }
            
          //comunidades.push(`Alura Stars`);
          const comunidadesAtualizadas = [...comunidades, newComunity];
          setComunidades(comunidadesAtualizadas);

        }}>
          <div>
            <input 
            placeholder="Qual o nome da sua comunidade?" 
            name="title" 
            aria-lable="Qual o nome da sua comunidade?"  
            />
          </div>
          <div>
          <input 
            placeholder="Insira a URL da capa" 
            name="image" 
            aria-lable="Insira a URL da capa" 
            />
          </div>
          <button>
            Criar comunidade
          </button>
        </form>
      </Box>

    </div>
    
    <div className="relationArea" style={{gridArea:'relationArea'}} >
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2>
        <ul>
          {pessoasFavoritas.map((item) => {

            return(
              <li  key={item}>
                <a href={`/users/${item}`}>
                  <img src={`https://github.com/${item}.png`}/>
                  <span>{item}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
        <ul>
          {comunidades.map((item) => {

            return(
              <li key={item.id}>
                <a href={`/users/${item.title}`}>
                  <img src={item.image}/>
                  <span>{item.title}</span>
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
