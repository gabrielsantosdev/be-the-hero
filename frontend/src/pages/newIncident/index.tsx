import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

const NewIncident: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar o caso, tente novamente.');
    }
  }

  return (
    <div className="new-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero " />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FeatherIcon icon="arrow-left" color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
