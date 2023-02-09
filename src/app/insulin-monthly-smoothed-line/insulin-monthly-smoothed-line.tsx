import styles from './insulin-monthly-smoothed-line.module.scss';

/* eslint-disable-next-line */
export interface InsulinMonthlySmoothedLineProps {}

export function InsulinMonthlySmoothedLine(
  props: InsulinMonthlySmoothedLineProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InsulinMonthlySmoothedLine!</h1>
    </div>
  );
}

export default InsulinMonthlySmoothedLine;
