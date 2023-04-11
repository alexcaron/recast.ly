var Search = ({ searchFunction, videoSetter, videoDataSetter }) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={ (event) => searchFunction(document.getElementsByClassName('form-control')[0].value, videoDataSetter) }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
