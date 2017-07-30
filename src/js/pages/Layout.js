var React = require('react');
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route  = ReactRouter.Route;
// var PropTypes = require('prop-types');

var Home = require('./Home');
var Nav = require('./components/Layout/Nav');
var Popular = require('./Popular');

// import Topics from "./Topics";
// import Home from "./Home";
// import About from "./About";

class Layout extends React.Component{
  render() {
    return(
      <div className = "container">
          <Popular />
      </div>
    );
  }
}
module.exports = Layout;

// <Router>
//   <div className="container">
//       <Nav />
//   </div>
// </Router>
