import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['reactJS', 'react Native']);
  const [newTech, setNewTech] = useState('');

  /**
   * copia todas as infos. do tech "...tech", pois o estado continua imutavel, por isso tem q copiar
   * e adc uma nova info no final, "newTech" para servir de input
   */
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
