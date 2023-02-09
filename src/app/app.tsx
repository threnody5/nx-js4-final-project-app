// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Navigation from './navigation/navigation';

export function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>App renders</h1>
      </div>
    </>
  );
}

export default App;
