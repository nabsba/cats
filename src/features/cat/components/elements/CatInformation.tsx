import styles from '../../styles/CatInformation.module.css'; // Import the CSS module

interface CatFactData {
  fact: string;
}

const CatInformation: React.FC<{ data: CatFactData | object }> = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Random Cat Fact</h3>
      {'fact' in data && data.fact ? (
        <span className={styles.fact}>&quot; {data.fact} &quot;</span>
      ) : (
        <span className={styles.noFact}>No message available</span>
      )}
    </div>
  );
};

export default CatInformation;
