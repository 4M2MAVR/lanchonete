import { useState } from 'react'
import './App.css'
import imgCombo1 from './assets/combo.avif'
import imgCombo2 from './assets/casal.webp'
import CardProduto from './components/CardProduto'

function App() {
  const [tipoCombo, setTipoCombo] = useState('casal');



  const dadosCombo = {
    casal: {
      imagem: imgCombo2,
      titulo: 'Combo para duas pessoas',
      preco: 'R$ 65,00',
      descricao: 'Dois hambugueres, duas porções de batata e dois refrigerantes'
    },
    familia: {
      imagem: imgCombo1,
      titulo: 'Combo para duas pessoas',
      preco: 'R$ 120,00',
      descricao: 'Quatro hambúrgueres, quatro porções de batata e quatro refigerantes'
    }
  }
  const alterarCombo = () => {
    setTipoCombo(tipoCombo === 'casal' ? 'familia' : 'casal');
  }

  const dados = dadosCombo[tipoCombo]
  return (
    <>
      <div className='container'>
        <h1>Escolha o seu combo</h1>
        <button onClick={alterarCombo}>Mudar Combo</button>

        <CardProduto
          imagem={dados.imagem}
          titulo={dados.titulo}
          preco={dados.preco}
          descricao={dados.descricao}
        />
      </div>
    </>
  )
}

export default App
