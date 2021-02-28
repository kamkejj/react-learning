function App() {
  const buttonText = 'Click Me!';

  return <div>
    <label className="label" htmlFor="name">Name:</label>
    <input id="name" type="text" />
    <button style={{ color: 'blue' }}>{buttonText}</button>
  </div>
};

export default App;
