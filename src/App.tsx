import './styles/main.css'

import logoImg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';

function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        console.log('verificando o data', data);
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo nlw e-Sports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">

        <GameBanner bannerUrl='/game 1.png' title='League of Legends' adsCount={5} />
        <GameBanner bannerUrl='/game 2.png' title='Dota 2' adsCount={2} />
        <GameBanner bannerUrl='/game 3.png' title='CS Go' adsCount={7} />
        <GameBanner bannerUrl='/game 5.png' title='Apex Legends' adsCount={1} />
        <GameBanner bannerUrl='/game 6.png' title='Fortnite' adsCount={4} />
        <GameBanner bannerUrl='/game 7.png' title='World of warcraft' adsCount={12} />


      </div>

      <CreateAdBanner title='Não encontrou seu duo' subTitle='Publique um anúncio para encontrar novos players' />

    </div>
  );
}

export default App
