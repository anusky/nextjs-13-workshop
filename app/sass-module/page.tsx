import variables from "./variables.module.scss";

const SassModulePage = () => {
  return (
    <div
      style={{ color: variables.primaryColor }}
      className={variables.sassBody}
    >
      SassModulePage
    </div>
  );
};

export default SassModulePage;
