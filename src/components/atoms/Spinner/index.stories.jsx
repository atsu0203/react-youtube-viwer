import React from 'react';
import Spinner from '.';

export default { title: 'atoms/Spinner' };

export const spinner = () => <Spinner />;

export const fullWidth = () => sizes.map((s) => (
  <div key={s} style={{ margin: '20px' }}>
    <Button {...props} size={s} fullWidth>ボタン</Button>
  </div>
));