import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Hello from React on AWS ECS</h1>
      <p>Deployed via GitHub Actions → ECR → ECS → ALB</p>
    </div>
  );
}

export default App;
