import React, { useState } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import PostTypeSelector from './components/PostTypeSelector';
import QuestionForm from './components/QuestionForm';
import ArticleForm from './components/ArticleForm';
import './styles.css';


function App() {
  const [postType, setPostType] = useState('question');

  return (
    <Container style={{ marginTop: '2em' }}>
      <Header as='h1' textAlign='center'>New Post</Header>
      <Segment>
        <PostTypeSelector postType={postType} setPostType={setPostType} />
        {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
      </Segment>
    </Container>
  );
}

export default App;
