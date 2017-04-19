import React              from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor         from 'redux-devtools-log-monitor';
import DockMonitor        from 'redux-devtools-dock-monitor';

const monitorState = {
  position: 'right',
  size: 200,
  isVisible: true
};

export default createDevTools(
  <DockMonitor toggleVisibilityKey="H" changePositionKey="W" monitorState={monitorState}>
    <LogMonitor />
  </DockMonitor>
);
