import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import './styles.css';

import heroesimg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

import api from '../../services/api';

const Logon: React.FC = () => {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no Login');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1> Faça seu logon</h1>

          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Sua ID"
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FeatherIcon icon="log-in" color="#E02041" />
            Não tenho Cadastro
          </Link>
        </form>
      </section>

      <img src={heroesimg} alt="Heores" />
    </div>
  );
};

export default Logon;
