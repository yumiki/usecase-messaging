import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MessageInput } from './components/MessageInput';
import { MessageList } from './features/messaging/MessageList';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bluenove Messaging</h1>
      </header>
      <section className="App-container" id="App-container">
        <aside className="App-sidebar"><LanguageSwitcher></LanguageSwitcher></aside>
        <main className="App-maincontent"><MessageList></MessageList></main>
      </section>
      <footer className="App-footer"><MessageInput></MessageInput></footer>
    </div>
  );
}

export default App;
