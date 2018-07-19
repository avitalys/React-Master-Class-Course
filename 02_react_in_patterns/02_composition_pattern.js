/* eslint-disable */

// ************************************************************************
// 1. Passing component as child
function App() {
  return (
    <Header>
      <Navigation />
    </Header>
  );
}
export default function Header({ children }) {
  return <header>{children}</header>;
}

// ************************************************************************
// 2. Passing component as props
function App() {
  return <Header title={<Title />} />;
}
const Header = function({ title }) {
  return <header>{title}</header>;
};

// ************************************************************************
// 3. Higher Order Component
// (similar to decorator pattern - allow you to quickly enhance your components)
// Also, note that Higher order components should be wrapped before render() () 
var enhanceComponent = Component =>
  class Enhance extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  };

var OriginalTitle = () => <h1>Hello world</h1>;
var EnhancedTitle = enhanceComponent(OriginalTitle);

class App extends React.Component {
  render() {
    return <EnhancedTitle />;
  }
}

// ************************************************************************
