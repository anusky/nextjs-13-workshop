import { MouseEvent, useRef } from "react";

/**
 * Explain event types depending on component
 * Explain parent component function types
 */
const ComponentParentExample = () => {
  const handleOnClick = () => {};
  return (
    <div>
      <ComponentExample onClick={handleOnClick} />
    </div>
  );
};

const ComponentExample = ({ onClick }: { onClick: () => void }) => {
  const elementRef = useRef<HTMLButtonElement>(null);
  const divref = useRef(null);
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("event", event.currentTarget.textContent);
    // console.log("event", event.currentTarget.textContent);
  };
  return (
    <div ref={divref}>
      <button ref={elementRef} onClick={handleOnClick} data-tag="valor">
        ComponentExample
      </button>
    </div>
  );
};

export default ComponentExample;

/**
 * Explain Button as an HTML extension
 */
