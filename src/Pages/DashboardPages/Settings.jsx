
import { logout } from '../../service/AuthService';

const Settings = () => {

  const handlerLongout = () => {
    logout();
  }

  return (
    <div>
      Settings page
      <button className='btn-logout' onClick={handlerLongout}>Cerrar sesión</button>
    </div>
  )
}

export default Settings
