const ComponentParentExample = () => {
  const handleOnClick = () => {};
  return (
    <div>
      <ComponentExample onClick={handleOnClick} />
    </div>
  );
};

const ComponentExample = ({ onClick }: { onClick: () => void }) => {
  const handleOnClick = (event: MouseEvent) => {
    console.log("event", event.currentTarget.textContent);
  };
  return <div onClick={handleOnClick}>ComponentExample</div>;
};

export default ComponentExample;
