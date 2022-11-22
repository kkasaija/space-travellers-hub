const Missions = () => (
  <table className="mission-table">
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>{' '}</th>
      </tr>
    </thead>
    <tbody>
      <tr key={' '}>
        <td>data. missions</td>
        <td>data.description</td>
        <td>data.status</td>
        <td>join/leave</td>
      </tr>
    </tbody>
  </table>
);

export default Missions;
