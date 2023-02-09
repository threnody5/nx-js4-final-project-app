import styles from './insulin-weekly-smoothed-line.module.scss';

/* eslint-disable-next-line */
export interface InsulinWeeklySmoothedLineProps {}

export function InsulinWeeklySmoothedLine(
  props: InsulinWeeklySmoothedLineProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InsulinWeeklySmoothedLine!</h1>
    </div>
  );
}

export default InsulinWeeklySmoothedLine;
