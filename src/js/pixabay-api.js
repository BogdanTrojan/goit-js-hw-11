export function fetchPhotos(input) {
  const params = new URLSearchParams({
    key: '44872956-45ef79406a920b03fc2627c03',
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${params}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Error:', error));
}