import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoutesList() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://transport-tracker-production.up.railway.app/api/routes')
      .then(response => {
        setRoutes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching routes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <p>Loading routes...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#1a73e8' }}>Hyderabad Bus Routes</h2>
        <span style={{ color: '#666' }}>{routes.length} routes found</span>
      </div>
      {routes.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <p>No routes found!</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Route No</th>
              <th>Route Name</th>
              <th>Start Stop</th>
              <th>End Stop</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {routes.map(route => (
              <tr key={route.id}>
                <td><strong>{route.routeNumber}</strong></td>
                <td>{route.routeName}</td>
                <td>{route.startStop}</td>
                <td>{route.endStop}</td>
                <td>{route.frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RoutesList;