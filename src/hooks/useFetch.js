import { useEffect, useState } from 'react';
// import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';
const API_KEY = 'wKnfpIg01SdQrkk5x2M2DbkcsLqIFaT9';
export const useFetch = () => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const searchGiphy = async (search, offset, limit) => {
		setIsLoading(true);
		try {
			const results = await axios(`http://api.giphy.com/v1/gifs/search`, {
				params: {
					api_key: API_KEY,
					q: search,
					limit: limit,
					offset: offset,
				},
			});

			setResponse(results.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			setIsLoading(false);
		}
	};

	return [response, isLoading, error, searchGiphy];
};
