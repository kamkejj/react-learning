# What is JSX

Looks like HTML, biut is not HTML. We use a plugin called Babbel to convert JSX to JavaScript that browsers can understand. Check out [babeljs.io](https://babeljs.io/) to see how JSX is converted to JavaScript.

## Example JSX code

```
const App = () => {
  return <div>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>
   </div>
};
```

See how the above JSX is converted to JS with Bable [Try it out](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAggBwTAvDAFASlQPhgbwCgYYAnAUygFdSwYAeAEwEsA3HYkhqgGw6670ezHMyjkAtjACM9APTD-AhorGSYAJnmLOJebyUM5LdoQC-AbiA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=true&targets=&version=7.13.8&externalPlugins=)

## Converting HTML to JSX

HTML

```
<div>
  <label class="label" for="name">Name:</label>
  <input id="name" type="text" />
  <button style="color: blue;">Submit</button>
</div>
```

JSX

```
<div>
  <label className="label" htmlFor="name">Name:</label>
  <input id="name" type="text" />
  <button style={{ color: 'blue' }}>Submit</button>
</div>
```

Inline styles `style="color: blue;"` will cause an error if used as is and must be converted to JSX like `style={{ color: 'blue' }}`. The `{ color: 'blue' }` is really a JS object inside {} to use variables in JSX.

HTML class to JSX

class="label" becomes className="label", but looks like current versions are not allowing `class` instead of converting to `className`.

### Reference JS variables in JSX

```
const buttonText = 'Click Me!';

<button style={{ color: 'blue' }}>{buttonText}</button>
```

Where we use the brackets {} to insert a JS variable.
