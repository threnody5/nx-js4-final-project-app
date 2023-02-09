import styles from './graphs.module.scss';

import InsulinMonthlySmoothedLine from '../insulin-monthly-smoothed-line/insulin-monthly-smoothed-line';
import InsulinWeeklySmoothedLine from '../insulin-weekly-smoothed-line/insulin-weekly-smoothed-line';
import SugarMonthlySmoothedLine from '../sugar-monthly-smoothed-line/sugar-monthly-smoothed-line';
import SugarWeeklySmoothedLine from '../sugar-weekly-smoothed-line/sugar-weekly-smoothed-line';

/* eslint-disable-next-line */
export interface GraphsProps {}

export function Graphs(props: GraphsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Graphs!</h1>
      <div>
        <InsulinWeeklySmoothedLine />
      </div>
      <div>
        <InsulinMonthlySmoothedLine />
      </div>
      <div>
        <SugarWeeklySmoothedLine />
      </div>
      <div>
        <SugarMonthlySmoothedLine />
      </div>
    </div>
  );
}

export default Graphs;
