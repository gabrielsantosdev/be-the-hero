import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import logo from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero " />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude a encontrarem os
            casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FeatherIcon icon="arrow-left" color="#E02041" />
            Não tenho Cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            value={name}
            placeholder="Nome da ONG"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUF(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
