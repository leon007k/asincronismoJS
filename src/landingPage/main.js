const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCsQOkbo_av-VcC-hbrM5R1Q&part=snippet%2Cid&order=date&maxResults=10';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1d53f2fa51msh26fe7423b7cba48p123b50jsnef9253b843c2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const content = null || document.getElementById('content');

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

// * Funcion que se invocara asi misma
(async () => {
  try {
    const videos = await fetchData(url);
    let view = `
        ${videos.items.map(video => `
            <div class="group relative">
              <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
              </a>
            </div>
        `).slice(0, 4).join('')}
      `;
    content.innerHTML = view;
  } catch {

  }
})();