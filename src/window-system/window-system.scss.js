import { css } from '../deps/styles';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
  .addon-window-container {
    position: fixed;
    top: 0;
  }
  .addon-window {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    outline: 0.25px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);

    border: 0.5px solid rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    background: #1f1f1f;

    min-width: 64px;
    min-height: 64px;
    overflow: hidden;
    user-select: none;
    &focused-window {
      user-select: auto;
    }
    > .title-bar {
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      align-items: center;
      box-sizing: border-box;
      background: #171717;
      padding: 10px;
      width: 100%;
      height: 32px;
      overflow: hidden;
      color: white;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      font-family: 'Inter', sans-serif;
      > .close-window-btn {
        all: unset;
        cursor: pointer;
        margin-left: auto;
        border: 0;
        border-radius: 0;
        background: none;
        color: white;
        font-size: 20px;
        font-family: 'Inter';
      }
    }
    > iframe {
      display: block;
      flex-grow: 1;
      box-sizing: border-box;
      margin: 0;
      border: none;
      padding: 0;
      width: 100%;
    }
  }
`;
