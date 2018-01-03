//======================================================================================
// React
import React, { Component } from "react";
// API
import API from "../../utils/API";
// Components
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
//======================================================================================

class Books extends Component {

  state = {

    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {

    this.loadBooks();
  }

  handleInputChange = event => {

    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  };

  deleteBook = id => {

    API.deleteBook(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  };

  loadBooks = () => {

    API.getBooks()
      .then(res => this.setState({ books: res.data, title: "", synopsis: "", author: "" }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {

    event.preventDefault();

    if(this.state.title && this.state.author) { 

      API.saveBook({
        title: this.state.title, 
        author: this.state.author, 
        synopsis: this.state.synopsis
      }).then(res => this.loadBooks()).catch(err => console.log(err));
    }  
  }

  render() {

    return (

      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>

            <form>
              <Input 
                name="title" 
                onChange={this.handleInputChange} 
                value={this.state.title} 
                placeholder="Title (required)" 
              />
              <Input 
                name="author"
                onChange={this.handleInputChange} 
                value={this.state.author} 
                placeholder="Author (required)" 
              />
              <TextArea 
                name="synopsis" 
                onChange={this.handleInputChange}
                value={this.state.synopsis} 
                placeholder="Synopsis (Optional)" 
              />
              <FormBtn 
                onClick={this.handleFormSubmit}
                disabled={!(this.state.author && this.state.title)}
              >
              Submit Book
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>

            {this.state.books.length 

              ? ( <List books={this.state.books} deleteBook={this.deleteBook} /> ) 
              : (<h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Books;
