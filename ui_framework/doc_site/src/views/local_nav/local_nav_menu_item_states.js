import React from 'react';

import {
  KuiLocalNav,
  KuiLocalNavRow,
  KuiLocalNavRowSection,
} from '../../../../components';

export function LocalNavWithMenuItemStates() {
  return (
    <KuiLocalNav>
      <KuiLocalNavRow>
        <KuiLocalNavRowSection>
          <div className="kuiLocalBreadcrumbs">
            <h1 tabIndex="0" id="kui_local_breadcrumb" className="kuiLocalBreadcrumb">
              <a className="kuiLocalBreadcrumb__link" href="#">
                Discover
              </a>
            </h1>
            <h1 tabIndex="0" id="kui_local_breadcrumb" className="kuiLocalBreadcrumb">
              <span className="kuiLocalBreadcrumb__emphasis">0</span> hits
            </h1>
          </div>
        </KuiLocalNavRowSection>
        <KuiLocalNavRowSection>
          <div className="kuiLocalMenu">
            <div className="kuiLocalMenuItem kuiLocalMenuItem-isSelected">New</div>
            <button className="kuiLocalMenuItem">Save</button>
            <div className="kuiLocalMenuItem kuiLocalMenuItem-isDisabled">Open</div>
            <button className="kuiLocalMenuItem">
              <div className="kuiLocalMenuItem__icon kuiIcon fa-clock-o" />
              Last 5 minutes
            </button>
          </div>
        </KuiLocalNavRowSection>
      </KuiLocalNavRow>
      <KuiLocalNavRow isSecondary>
        <div className="kuiLocalSearch">
          <input
            className="kuiLocalSearchInput"
            type="text"
            placeholder="Filter..."
            autoComplete="off"
          />
          <button className="kuiLocalSearchButton">
            <span className="kuiIcon fa-search" />
          </button>
        </div>
      </KuiLocalNavRow>
    </KuiLocalNav>
  );
}
