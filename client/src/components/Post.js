import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

const Post = (props) => (
  <div>
    <Card>
      <CardTitle>Title: {props.title}</CardTitle>
      <CardSubtitle>To: {props.to}, From: {props.from}</CardSubtitle>
      <CardText>{props.message}</CardText>
    </Card>
  </div>
);

export default Post;
