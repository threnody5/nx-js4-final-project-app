import styles from './sign-in.module.scss';

import LoggedIn from '../logged-in/logged-in';

/* eslint-disable-next-line */
export interface SignInProps {}

export function SignIn(props: SignInProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SignIn!</h1>
      <div>
        <LoggedIn />
      </div>
    </div>
  );
}

export default SignIn;
