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
  const handleOnClick = (event: any) => {
    console.log("event", event.currentTarget.textContent);
  };
  return <div onClick={handleOnClick}>ComponentExample</div>;
};

export default ComponentExample;

/**
 * Explain Button as an HTML extension
 */
