import { loginUser } from '../redux/actions/auth.actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../core/Login.scss';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logear = async (formData) => {
    dispatch(loginUser(formData, navigate));
  };

  return (
    <div className="login-container-box">
      <h2 className="login-container-box-title">Acceso a la Web (Login)</h2>
      <form onSubmit={handleSubmit(logear)}>
        <div className="login-container-box-userBox">
          <input className="login-container-box-userBox-input"
            type="email"
            placeholder="Introduce tu email"
            {...register('email')}
          />
          <label className="login-container-box-userBox-label" >Email</label>
        </div>
        <div className="login-container-box-userBox">
          <input className="login-container-box-userBox-input"
            type="password"
            placeholder="Introduce tu password"
            {...register('password')}
          />
          <label className="login-container-box-userBox-label">Password</label>
        </div>      
        <input className="login-container-box-button" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Login;
