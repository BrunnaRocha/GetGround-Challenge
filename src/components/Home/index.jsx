import React, { Component } from "react";
import styled from "styled-components";
import BooksTable from "../BooksTable";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchBooks } from './actions';
import { useParams, withRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 75px;
  color: #1C444E;
  font-size: 50px;
`;

const Description = styled.h3`
  color: #E26227;
  margin-top: 100px;
  flex-wrap: wrap;
  text-align: center;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    const { params } = this.props.match;

    this.state = {
      page: params.page,
      itemsPerPage: 5
    };

    this.setItemsPerPage = this.setItemsPerPage.bind(this);
    this.getBooksFromApi = this.getBooksFromApi.bind(this);
  }

  setItemsPerPage(itemsPerPage) {
    this.setState({ itemsPerPage });
  }

  getBooksFromApi() {
    this.props.dispatch(fetchBooks(this.props.match.params.page, this.state.itemsPerPage))
  }

  componentDidMount() {
    this.getBooksFromApi()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemsPerPage !== this.state.itemsPerPage || prevProps.match.params.page !== this.props.match.params.page)
      this.getBooksFromApi()
  }
  
  render() {
    const { page, itemsPerPage } = this.state

    return (
      <Container>
        <Title>GetGround Library</Title>
        <Description>
          Search for a registered book from our API:
        </Description>
        <BooksTable
          currentPage={page - 1}
          onChangeRowsPerPage={this.setItemsPerPage}
          rowsPerPage={itemsPerPage}
        />
      </Container>
    );
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    dispatch
  }
}

export default compose(
  withRouter,
  connect(mapDispatchtoProps)
)(Home);
