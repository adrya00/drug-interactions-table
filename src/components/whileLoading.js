import React from 'react';

function whileLoading(Component) {
  return function whileLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '20px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default whileLoading;