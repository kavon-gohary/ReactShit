var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('./pages/Layout');
require('./index.css');
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route  = ReactRouter.Route;


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//           <p> HELLO FROM REACT </p>
//       </div>
//     );
//   }
// }

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
