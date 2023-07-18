import styles from './LoginButton.module.scss';

const LoginButton = ({ onClick, isClicked }) => {
  return (
    <button
      className={`${styles.btn} ${isClicked ? styles.close : styles.open}`}
      onClick={onClick}
    >
      {isClicked ? `Close \u00D7` : 'Log in \u2193'}
    </button>
  );
};

export default LoginButton;
