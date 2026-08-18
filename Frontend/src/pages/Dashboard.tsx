const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div style={{ maxWidth: 600, margin: '80px auto' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}!</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default Dashboard;