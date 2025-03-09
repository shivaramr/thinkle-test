import React from 'react';

// eslint-disable-next-line no-unused-vars
const withContentBody = (Component) => {
  return (props) => (
    <div className="content-body">
      <Component {...props} />
    </div>
  );
};

export default withContentBody;
