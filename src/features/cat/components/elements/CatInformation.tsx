import { CatFactData } from 'features/api/types/fetchData';

/* eslint-disable */
const CatInformation: React.FC<{ data: CatFactData }> = ({ data }) => {
  return (
    <div>
      <h2>Random Cat Fact</h2>
      {data && data.fact ? <p>{data.fact}</p> : <p> No message available</p>}
    </div>
  );
};

export default CatInformation;
