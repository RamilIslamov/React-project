import { Link } from 'react-router-dom';
import styles from 'components/AuthModule.module.scss';

const AuthModule = ({ onClose }) => {
  return (
    <ul className={styles.list}>
      <li>
        <Link to={'/login'} onClick={onClose}>
          Have an account
        </Link>
      </li>
      <li>
        <Link to={'/signin'} onClick={onClose}>
          Create an account
        </Link>
      </li>
      <li>
        <Link to={'/terms'} onClick={onClose}>
          Terms of use
        </Link>
      </li>
    </ul>
  );
};

export default AuthModule;
