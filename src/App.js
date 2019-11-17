import React, { useState, useEffect, useMemo } from 'react';

/**
 * useState - Pertence a função, cria estados na função sem pertencer
 * ao formato de classes. P/ cada tipo de info. dentro do componente,
 * teremos um estado separado
 *
 */
function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  /**
   * copia todas as infos. do tech "...tech", pois o estado continua imutavel, por isso tem q copiar
   * e adc uma nova info no final, "newTech" para servir de input
   * setNewTech reseta valor do input assim que adiciona
   */
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
  /**
   * executa apenas uma vez com passagem do segundo parametro no array
   * de dependencia vazio, deixa salvo os dados
   */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  /**
   * substitui o didMount, o primeiro parametro receabe a funcao que será executado
   * e o segundo é apartir dele que será executado a primeira, ou seja,
   * qualquer açao que o segundo parametro fizer, execute a primeira
   */
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
