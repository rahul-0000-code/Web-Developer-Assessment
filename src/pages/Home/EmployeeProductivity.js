import React from 'react';
import { Container } from 'react-bootstrap';
import './EmployeeProductivity.css';

const EmployeeProductivity = ({ progressData }) => {
  return (
    <Container className="mb-0">
      <div className="card p-4 text-center text-white mt-4 card-title">
        <h5 className="mb-1">Employee Productivity Dashboard</h5>
      </div>
      <div className="card p-4 text-center text-success card-weekly">
        <h5 className="mb-4">Weekly Productivity</h5>
        {progressData.map((day, index) => (
          <div key={index} className="mb-3 d-flex justify-content-between align-items-center card-common">
            <div className="col-md-6">
              <div className="mb-2 text-white">Productivity on {day.day}</div>
              <div className="progress" style={{ background: '#333' }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{
                    width: `${day.progress}%`,
                    borderRadius: day.progress === 100 ? '0 8px 8px 0' : '8px',
                  }}
                  aria-valuenow={day.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div className="col-md-6 text-md-right">{day.progress}%</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default EmployeeProductivity;
