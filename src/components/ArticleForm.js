import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const isValid = wordCount >= 10;

  const handleSubmit = () => {
    console.log('Article Submitted:', { title, abstract, text, tags });
    alert('Article submitted!');
  };

  return (
    <div style={{ fontFamily: 'monospace' }}>
      <div style={{ borderTop: '4px solid lightgray', padding: '10px 0' }}>
        <b>What do you share</b>
      </div>
      <p style={{ color: '#333', marginTop: 0 }}>
        Share your article by submitting this form.{' '}
      </p>

      <Form style={{ fontFamily: 'monospace' }}>
        <label style={{ fontWeight: 'bold' }}>Title</label>
        <Form.Input
          placeholder="Enter a descriptive title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label style={{ fontWeight: 'bold' }}>Abstract</label>
        <Form.TextArea
          placeholder="Enter a 1-paragraph abstract"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
          rows={2}
        />

        <label style={{ fontWeight: 'bold' }}>Article text</label>
        <Form.TextArea
          placeholder="Enter the article text min. 10 words"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
        />

        <label style={{ fontWeight: 'bold' }}>Tags</label>
        <Form.Input
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="post-button-container">
         <Button color='blue' disabled={!isValid} onClick={handleSubmit}>
          Post
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default ArticleForm;
