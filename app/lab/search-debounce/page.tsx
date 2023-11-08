'use client';
import React, { useEffect, useState } from 'react';
import useDebounce from '@/app/lab/search-debounce/useDebounce';

export interface Notice {
  date_of_birth: string;
  nationalities: string[];
  entity_id: string;
  forename: string;
  name: string;
  _links: Links;
}

export interface Links {
  self: Images;
  images: Images;
  thumbnail: Images;
}

export interface Images {
  href: string;
}

// https://www.youtube.com/watch?v=PySFIsgXNZ0
const SearchDebounce = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [search, setSearch] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      console.log(search);
      setLoading(true);
      setNotices([]);
      const data = await fetch(
        `https://ws-public.interpol.int/notices/v1/red?forename=${debouncedSearch}&ageMax=120&ageMin=1&resultPerPage=200`,
      )
        .then((res) => res.json())
        .finally(() => setLoading(false));

      setNotices(data._embedded.notices);
      // setLoading(false);
    }
    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <div>
      <h1>Search Debounce</h1>
      {/*<form>*/}
      <input
        type='search'
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
      />
      {/*</form>*/}
      <hr />
      {loading && <p>Loading...</p>}
      {/*{JSON.stringify(notices[0])}*/}
      {notices.map((notice) => {
        return (
          <div key={notice.entity_id}>
            <p>{notice.forename}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchDebounce;
