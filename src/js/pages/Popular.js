var React = require('react');
var propTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Haskell', 'Java', 'C', 'Python'];

  return (
    <div>
      <ul className='languages'>
        {languages.map(function (currentLang) {
          return (
            <li onClick={props.onSelect.bind(null, currentLang)} key={currentLang} style={currentLang === props.selectedLanguage ? {color: 'red'}:null}>
              {currentLang}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

// class SelectLanguage extends React.Component {
//   render() {
//     var languages = ['All', 'JavaScript', 'Haskell', 'Java', 'C', 'Python'];
//
//     return (
//       <div>
//         <ul className='languages'>
//           {languages.map(function (currentLang) {
//             return (
//               <li onClick={this.props.onSelect.bind(null, currentLang)} key={currentLang} style={currentLang === this.props.selectedLanguage ? {color: 'red'}:null}>
//                 {currentLang}
//               </li>
//             )
//           }, this)}
//         </ul>
//       </div>
//     );
//   }
// }

SelectLanguage.propTypes = {
  selectedLanguage: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state =
    {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(currentLang) {
    this.setState(function() {
      return {
        selectedLanguage: currentLang,
        repos: null
      }
    });

    api.fetchPopularRepos(currentLang)
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos
          }
        })
      }.bind(this))
  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage = {this.state.selectedLanguage} onSelect = {this.updateLanguage}/>
        {JSON.stringify(this.state.repos, null, 2)}
    </div>
    )
  }
}
module.exports = Popular;




// render() {
//   var languages = ['python', 'java', 'haskell', 'c++'];
//   return (
//     <div>
//         <ul className="languages">
//           {languages.map(function (currentLang) {
//             return(
//               <li>
//                 {currentLang}
//               </li>
//             )
//           })}
//         </ul>
//     </div>
//   );4
// }
// }
