const form = document.querySelector("form");
const list = document.querySelector(".list");
const button = document.querySelector(".more");

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

let pageToFetch = 0;
let keyword = "";

function fetchEvent(page, keyword) {
  const params = new URLSearchParams({
    apikey: API,
    page,
    keyword,
    size: 50,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}

function getEvents(page, keyword) {
  fetchEvent(page, keyword).then((data) => {
    console.log(data.page.totalElements);

    if (data.page.totalElements === 0) {
      button.classList.add("invisible");
      alert(`There are no events by keyword ${keyword}`);
    }

    const events = data?._embedded?.events;
    if (events) {
      renderEvents(events);
    }

    if (pageToFetch === data.page.totalPages - 1) {
      button.classList.add("invisible");
      alert("Finish");
      return;
    }
    pageToFetch += 1;
    if (data.page.totalPages > 1) {
      button.classList.remove("invisible");
    }
  });
}

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `<li>
    <img src='${images[0].url}' alt='${name}' width='200'>
    <p>${name}</p>
    </li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = event.target.elements.query.value;
  keyword = query;
  pageToFetch = 0;
  list.innerHTML = "";
  if (!query) {
    return;
  }
  getEvents(pageToFetch, query);
});

button.addEventListener("click", () => {
  getEvents(pageToFetch, keyword);
});
