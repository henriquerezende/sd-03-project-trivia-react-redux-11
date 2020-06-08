import React from 'react';

function Settings() {
  return (
    <div className="container">
      <div className="row grey darken-3">
        <div className="center-align">
          <h3 data-testid="settings-title">Settings</h3>
          <div className="col s6 offset-s3">
            <h4>Category</h4>
            <div>
              <div className="input-field col s12">
                <select className="browser-default" id="difficult">
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <label htmlFor="difficult">Difficult</label>
            </div>
            <div>
              <div className="input-field col s12">
                <select className="browser-default" id="type">
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="trueOrFalse">True or False</option>
                </select>
              </div>
              <label htmlFor="type">Type</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
