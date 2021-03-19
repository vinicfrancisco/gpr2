import React, { useEffect /* useState */ } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container } from './styles';
import api from '~/services/api';

function RequestRide() {
  const { state } = useLocation();
  // const [rideData, setRideData] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    async function loadRides() {
      try {
        await api.get(`/carona/motorista/${state.ride.motorista}`);
      } catch (err) {
        console.log(err);
      }
    }
    loadRides();
  }, [state]);

  async function handleSubmit() {
    try {
      await api.post(`/carona/solicitar`, {
        idCarona: state.ride.id,
        idUser: localStorage.TOKEN_KEY,
      });
      push('/home');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <section>
        <div>
          <strong>Motorista:</strong>

          <span>{state?.ride.name || ''}</span>
        </div>

        <div>
          <strong>Origem:</strong>

          <span>{state?.ride.origem || ''}</span>
        </div>

        <div>
          <strong>Horário:</strong>

          <span>{state?.ride.horario || ''}</span>
        </div>

        <div>
          <strong>Vagas disponíveis:</strong>

          <span>{`${state?.ride.vagasDisponiveis || '0'} vagas`}</span>
        </div>

        <div>
          <strong>Dias disponíveis:</strong>

          <span>{state?.ride.diasDisponiveis}</span>
        </div>

        <button type="button" onClick={() => handleSubmit()}>
          SOLICITAR
        </button>
      </section>
    </Container>
  );
}

export default RequestRide;
