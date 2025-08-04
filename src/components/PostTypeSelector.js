import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

const PostTypeSelector = ({ postType, setPostType }) => {
  return (
    <Form>
      <Form.Field>
        <Radio
          label='Question'
          name='postType'
          value='question'
          checked={postType === 'question'}
          onChange={() => setPostType('question')}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Article'
          name='postType'
          value='article'
          checked={postType === 'article'}
          onChange={() => setPostType('article')}
        />
      </Form.Field>
    </Form>
  );
};

export default PostTypeSelector;
