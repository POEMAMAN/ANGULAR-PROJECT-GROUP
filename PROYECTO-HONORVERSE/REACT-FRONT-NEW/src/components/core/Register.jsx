import { registerUser } from '../redux/actions/auth.actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../core/Register.scss';

const Register = () => {
  //register va a guardar las proiedades en un objeto, la vamos ejecutando en cada imput, y usamos spread por el tema del objeto, e indicamos el nombre de la propiedad donde quiero guardarlo
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //encargada de ejectucar register user, y lo tengo que hacer con un dispatch porque esta en redux, es asimncronica porque regiter user es asincrona. Handle Summit recoge los datos de los input y sustituye a los eventos
  const registrar = async (formData) => {
    dispatch(registerUser(formData, navigate));
  };

  return (
    <div className="register-container-box">
      <h2 className="register-container-box-title">Acceso a la Web (Register)</h2>
      <form onSubmit={handleSubmit(registrar)}>
        <div className="register-container-box-userBox">
          <input className="register-container-box-userBox-input"
            type="email"
            placeholder="Introduce tu email"
            {...register('email')}
          />
          <label className="register-container-box-userBox-label">Email</label>
        </div>
        <div className="register-container-box-userBox">
          <input className="register-container-box-userBox-input"
            type="password"
            placeholder="Introduce tu password"
            {...register('password')}
          />
          <label className="register-container-box-userBox-label">Password</label>
        </div>
        <div className="register-container-box-userBox">
          <input className="register-container-box-userBox-input" type="text" {...register('name')} />
          <label className="register-container-box-userBox-label">Nombre</label>
        </div>
      <input className="register-container-box-button" type="submit" value="registrate" />
      </form>
    </div>
  );
};

export default Register;
