import styles from './logged-in.module.scss';

import Graphs from '../graphs/graphs';
import Form from '../form/form';

/* eslint-disable-next-line */
export interface LoggedInProps {}

export function LoggedIn(props: LoggedInProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LoggedIn!</h1>
      <div>
        <Graphs />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default LoggedIn;
