import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className='App'>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className='iconfont'>&#xe62b;</i>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
