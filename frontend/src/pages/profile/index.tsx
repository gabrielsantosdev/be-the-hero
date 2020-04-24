import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

const Profile: React.FC = () => {
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((res) => {
        setIncidents(res.data);
      });
  }, [ongId]);

  async function handleDelete(id: any) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident: any) => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar o caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, {ongName} </span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FeatherIcon size={18} icon="power" color="#E02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident: any) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p> {incident.title} </p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>
            <button onClick={() => handleDelete(incident.id)} type="button">
              <FeatherIcon icon="trash-2" size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
