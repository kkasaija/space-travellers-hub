/* eslint-disable no-undef */
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
        <td>{data.mission}</td>
        <td>{data.description}</td>
        <td>{data.status}</td>
        <td>{data.status}</td>
      </tr>
    </tbody>
  </table>
);

export default Missions;
