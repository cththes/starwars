const API_URL = "https://swapi.dev/api/people";

export const getPeople = async () => {
  const firstResponse = await fetch(API_URL);
  const firstPage = await firstResponse.json();
  const total = firstPage.count;
  const perPage = 10;
  const pagesCount = Math.ceil(total / perPage);

  const allPagesRequests = [];
  for (let i = 2; i <= pagesCount; i += 1) {
    allPagesRequests.push(
      fetch(`${API_URL}?page=${i}`).then((req) => req.json())
    );
  }
  return Promise.all(allPagesRequests).then((allPagesResponses) => {
    const data = [firstPage.results];
    allPagesResponses.forEach((res) => {
      data.push(res.results);
    });

    return data.flat();
  });
};
