type getApiDataProps = {
  type: string;
  queries: {
    name: string;
    data: string;
  }[];
};

export async function getApiData({ type, queries }: getApiDataProps) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.NEXT_PUBLIC_API_CLIENT || "",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    cache: "no-store" as RequestCache,
  };
  try {
    const allQueries = queries.reduce((acc, query) => {
        return acc + `&${query.name}=${query.data}`;
        }, "")
    const res = await fetch(
      `https://api.twitch.tv/helix/${type}?${allQueries}`,
      options,
    );
    const twitch = await res.json();

    return twitch?.data;
  } catch (error: any) {
    console.log(error.message);
  }
}