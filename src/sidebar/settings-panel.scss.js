import { css } from '../deps/styles';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .settings-drawer {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: 'Inter', sans-serif;
    > .settings-panel {
      position: fixed;
      text-align: center;
      &.disabled {
        display: none;
      }
    }
  }
`;
