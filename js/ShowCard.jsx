import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  poster: string
};

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;
class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  props: Show;
  render() {
    return (
      <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
        <Image
          alt={`${this.props.title} Show Poster`}
          src={`/public/img/posters/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;
