import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Button from 'react-bootstrap/Button'; 
import InputGroup from 'react-bootstrap/InputGroup'; 
import FormControl from 'react-bootstrap/FormControl'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import React ,{Component} from 'react'
import './App.css'

class App extends Component  { 
  
  constructor(props) { 
    super(props); 
  
    this.state = { 
      userInput : '', 
      list:[{text :'first task' ,
            id :'0' ,
            isComplete : false    },
            {text :'second task' ,
            id :'1' ,
            isComplete :false
            },
            {text :'third task' ,
            id :'2' ,
            isComplete :true
            } 
         ] 
    } 
     
  } 

  handleComplete = (index) => {
    this.setState ({list : this.state.list.map(el =>
     {return el.id === index ? {...el , isComplete :!el.isComplete} : el } )})
     
    }
    
    deleteTodo = (index) => { this.setState ({list : this.state.list.filter( el => el.id !== index

    )})
   }

   addTodo = () => {
    
     const newTodo ={
      text :this.state.userInput ,
      id : Math.random (),
      isComplete : true
     }
    
    this.setState ({ list : [...this.state.list,newTodo]})
   }
  
  render()
  { 
    return(<Container> 
  
          <Row style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  fontSize: '3rem', 
                  fontWeight: 'bolder', 
                }} 
                >TODO LIST 
            </Row> 
  
           <hr/> 
          <Row> 
          <Col md={{ span: 5, offset: 4 }}> 
  
          <InputGroup className="mb-3"> 
          <FormControl 
            placeholder="add item . . . "
            size="lg"
            value = {this.state.userInput} 
            onChange = {(e)=> this.setState({userInput : e.target.value})}
            aria-label="add something"
            aria-describedby="basic-addon2"
          /> 
          <InputGroup.Append> 
            <Button 
              variant="dark"
              size="lg"
              onClick = {(e)=> e.preventDefault() , ()=> this.addTodo() } 
              > 
              ADD 
            </Button> 
          </InputGroup.Append> 
        </InputGroup> 
  
     </Col> 
   </Row> 
   {this.state.list.map(item => {return( 
  
   <Row className="row-fluid"> 
     <Col md={{ span: 4 ,offset :4 }}> 
        <ListGroup  className={item.isComplete ? '' : 'through'}
                   style={{fontSize: '2rem', 
                  fontWeight: 'bolder'}}> 
             {item.text} 
                 
        </ListGroup> 
     </Col> 
     <Col md={{ span: 1 }}>
     <Button 
              variant="dark"
              size="lg"
              onClick = {()=>this.deleteTodo(item.id)}
              > 
              DELETE 
            </Button> 
     </Col>
     <Col md={{ span: 1}}>
     <Button  
              className="ml-4 mb-4"
              variant="dark"
              size="lg"
              onClick = {()=>this.handleComplete(item.id)} 
              > {item.isComplete ? "COMPLETE" : "UNDO"}
       </Button> 
     </Col>
   </Row> )})} 
     </Container> 
    ); 
  } 
} 

  
export default App

