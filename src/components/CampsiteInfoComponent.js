import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component{

  renderCampsite(campsite){
    return( 
      <div className="col-md-5 and m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }

  renderComments(comments){
    if(comments){
      return(
        <div className="col-md-5 m-1">
          <h4>comments</h4>
          { comments.map(comment =>
            <span key ={comment.id}> {comment.text} <br/> 
            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}<br/>
            </span> )
          }
        </div>
      )
    }
    return <div/>
  }
    
  render(){
    const {campsite} = this.props; //this.prop replaced with newly defined Variable
    if(campsite){
      return(
        <div className="row"> 
          {this.renderCampsite(campsite)} 
          {this.renderComments(campsite.comments)}  
        </div>
      );
    }
    return <div/>;
  }
}

export default CampsiteInfo;