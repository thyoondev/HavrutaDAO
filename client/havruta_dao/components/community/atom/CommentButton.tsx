import { MessageOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

function CommentButton({ comment_count }: CommentButton) {
  return (
    <Button type="link" icon={<MessageOutlined />} size="small">
      {' '}
      {comment_count}
    </Button>
  );
}

export default CommentButton;
