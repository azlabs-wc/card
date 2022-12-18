import { css } from 'lit';

export const componentStyles = css`
  /* Card styles */
  .card {
    position: relative;
    display: block;
    background-color: var(--card-bg-color, #fff);
    box-shadow: 0.15px 0.015px 0px 0px var(--card-box-shadow-color, #f3f3f3);
    border-radius: var(--card-border-radius, 0.156rem);
    border-width: var(--card-border-width, 0.05rem);
    border-color: var(--card-border-color, #dedede);
    width: 100%;
    border-style: solid;
    transition: transform 200ms ease-in-out;
    touch-action: manipulation;
  }

  /* Card Header */
  .card-header {
    font-size: 0.8rem;
    color: var(--card-title-color, #666);
    font-weight: var(--card-title-font-weight, 400);
    border-bottom-width: var(--card-border-width, 0.05rem);
    border-bottom-color: var(--card-border-color, #dedede);
    letter-spacing: normal;
    border-bottom-style: solid;
  }

  /* Card block */
  .card-block:last-child {
    border-bottom: none;
  }

  /* Card footer */
  .card-footer {
    border-top-style: solid;
    border-top-width: var(--card-border-width, 0.05rem);
    border-top-color: var(--card-border-color, #dedede);
  }

  /* Common styles */
  .card-header,
  .card-block,
  .card-footer {
    padding: var(--card-header-padding, 1.1rem 1.2rem);
  }

  /* Tranformation styles */
  .card.clickable:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.15rem 0 0
      var(--card-clickble-box-shadow-color, hsl(198deg, 100%, 32%));
    border-width: var(--card-clickble-border-width, 0.05rem);
    border-color: var(--card-clickble-border-color, hsl(198deg, 100%, 32%));
    cursor: pointer;
  }
`;
