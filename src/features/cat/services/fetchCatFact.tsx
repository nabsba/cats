import { fetchData, FetchResult } from 'features/api';
import { API_ENDPOINTS } from 'features/api/datas/constants';
import { CatFactData } from 'features/api/types/fetchData';
import { logErrorAsyncMessage } from 'features/common';

export const handleFetchCat = async (
  value: number,
  setFetchResult: React.Dispatch<
    React.SetStateAction<FetchResult<CatFactData | object>>
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const result: FetchResult<CatFactData> = await fetchData<CatFactData>(
      `${API_ENDPOINTS.cat.main}${API_ENDPOINTS.cat.fact.endPoint}`,
      `${API_ENDPOINTS.cat.fact.params.maxLength}=${value + 20}`,
    );
    setFetchResult(result);
    setLoading(false);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error && error.message ? error.message : 'SERVER_ERROR';

    setFetchResult((prev) => ({
      ...prev,
      error: true,
      messageCode: errorMessage,
    }));
    logErrorAsyncMessage('cat/services/fetchCatFact.tsx', 'handleFetchCat');
  }
};
