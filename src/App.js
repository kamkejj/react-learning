import faker from 'faker';

function App() {
 // const buttonText = 'Click Me!';

  /*return <div>
    <label className="label" htmlFor="name">Name:</label>
    <input id="name" type="text" />
    <button className="ui button">{buttonText}</button>
  </div>*/

  return <div>
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar"><img alt="avatar" src={faker.image.animals()}></img></a>
        <div className="content">
          <a href="/" className="author">Bob</a>
          <div className="metadata">
            <span className="date">Today at 8:00PM</span>
          </div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar"><img alt="avatar" src={faker.image.animals()}></img></a>
        <div className="content">
          <a href="/" className="author">Joe</a>
          <div className="metadata">
            <span className="date">Today at 3:00PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default App;
