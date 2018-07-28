import React from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Landing = props => (
  <div className="landing">
    <h1>S-Video</h1>
    <input
      onChange={props.handleSearchTermChange}
      value={props.searchTerm}
      type="text"
      placeholder="Search"
    />
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

Landing.propTypes = {
  searchTerm: string.isRequired,
  handleSearchTermChange: func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
