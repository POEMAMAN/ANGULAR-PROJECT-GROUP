import { logoutUser } from '../../redux/actions/auth.actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  //register va a guardar las proiedades en un objeto, la vamos ejecutando en cada imput, y usamos spread por el tema del objeto, e indicamos el nombre de la propiedad donde quiero guardarlo
  const { handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutAction = async (formData) => {
    dispatch(logoutUser(formData, navigate));
  };

  return (
    <div className="logOut-Container">
      <button className="logOut-button" onClick={handleSubmit(logOutAction)}>Cerrar Sesion</button>
    </div>
  );
};

export default LogOut;
