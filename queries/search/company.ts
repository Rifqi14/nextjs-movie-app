import { paths } from '@/generated/schema';
import { fetcher } from '@/lib/fetcher';

export type CompanyQuery = paths['/3/search/company']['get']['parameters']['query'];

export type CompanyResponse = paths['/3/search/company']['get']['responses']['200']['content']['application/json'];

export const fetchCompany = async (query?: CompanyQuery) => {
	return await fetcher<CompanyResponse, CompanyQuery>({ path: '/search/company', query: query });
};
