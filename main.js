
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${choice}.json`
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('.name').textContent = `${data.title} ${data.subtitle}`;
      document.querySelector('.published').textContent = `Published: ${data.publish_date}`;
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}