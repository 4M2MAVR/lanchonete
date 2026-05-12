import { useState } from 'react'
import './App.css'
import imgCombo1 from './assets/combo.avif'
import imgCombo1 from '.assets/casal.qebp'

function App() {
  const [tipoCombo, setTipoCombo] = useState('casal');

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === 'casal' ? 'familia' : 'casal');
  }

  const dadosCombo = {
    casal: {
      imagem: imgcombo2,
      titulo: 'Combo para duas pessoas',
      preco: 'R$ 65,00',
      descricao: 'Dois hambugueres, duas porções de batata e dois refrigerantes'
    },
    familia: {
      imagem: imgcombo1,
      titulo: 'Combo para duas pessoas',
      preco: 'R$ 120,00',
      descricao: 'Quatro hambúrgueres, quatro porções de batata e quatro refigerantes'
    }
  }
  return (
    <>
      <div className='container'>
      <h1>Escolha o seu combo</h1>
      <button>Mudar Combo</button>
      </div>
    </>
  )
}

export default App
