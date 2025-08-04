import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');

  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  const isValid = wordCount >= 10;

  const handleSubmit = () => {
    console.log('Question Submitted:', { title, body, tags });
    alert('Question submitted!');
  };

  return (
    <div className="post-form">
      <div className="section-header">What do you want to ask</div>
      <p className="section-description">
        Complete the form below to post up a question to the forum.{' '}
      </p>

      <Form>
        <label>Title</label>
        <Form.Input
          placeholder="Start your question with how, what, why, etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Describe your problem</label>
        <Form.TextArea
          placeholder="Describe your problem"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={6}
        />

        <label>Tags</label>
        <Form.Input
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="post-button-container">
           <Button color='green' disabled={!isValid} onClick={handleSubmit}>
            Post
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default QuestionForm;
