import { ComponentWithLogicDataFetching, FetchResult } from 'features/api';
import { CatFactData } from 'features/api/types/fetchData';
import React, { useState } from 'react';
import { handleFetchCat } from '../services/fetchCatFact';
import CatInformation from './elements/CatInformation';
import MyFormCat from './elements/Form';

const Cat: React.FC = () => {
  const [fetchResult, setFetchResult] = useState<
    FetchResult<CatFactData | object>
  >({
    error: false,
    messageCode: '',
    data: null,
    statusCode: 0,
  });

  const [loading, setLoading] = useState<boolean>(false); // Set initial loading state to false

  const Cat = ComponentWithLogicDataFetching(CatInformation);
  return (
    <>
      <MyFormCat
        handleSubmit={(value: number) =>
          handleFetchCat(value, setFetchResult, setLoading)
        }
      />
      <Cat fetchResult={fetchResult} loading={loading} />
    </>
  );
};

export default Cat;
