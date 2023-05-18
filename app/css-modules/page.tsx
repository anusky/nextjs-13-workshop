import styles from "./styles.module.css";

const CssModulesPage = () => {
  return (
    <div className={styles.cssModulesPageContainer}>
      <h1>CssModulesPage</h1>
      <h2>Some h2</h2>
      <button className={styles.button}>I am a button</button>
    </div>
  );
};

export default CssModulesPage;
