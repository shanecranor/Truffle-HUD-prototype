import { css } from '../deps/styles';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
  .c-toast {
    background: #ffffff;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    width: 320px;
    height: 56px;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.15);
    > .icon {
      margin: 8px;
      width: 40px;
      height: 40px;
    }
    > .text-container {
      margin: 0;
      width: 100%;
      font-family: sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 44px;
      > .header {
        font-size: 12px;
        color: rgba(14, 14, 14, 0.8);
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
      }
      > .message {
        font-size: 16px;
        color: #0e0e0e;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
      }
    }
    > .close-button {
      flex-shrink: 0;
      flex-grow: 0;
      padding: 0;
      margin: 0;
      background: rgba(0, 0, 0, 0.08);
      border-radius: 0;
      height: 100%;
      border: none;
      width: 43px;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        filter: invert(1);
      }
    }
  }
`;
