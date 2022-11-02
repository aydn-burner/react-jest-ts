import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { setupI18n, setUserLanguage } from './helpers';
import App from './App';

export interface IAppSettings {
  language: string;
}
export function run(appSettings: IAppSettings) {
  setupI18n(setUserLanguage(settings.language));
  ReactDOM.render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

const settings: IAppSettings = {
  language: 'en',
};
run(settings);
