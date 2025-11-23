       'use strict';

        const tvForm = document.querySelector('#tv-form');
        const resultsDiv = document.querySelector('#results');

        tvForm.addEventListener("submit", async function(evt) {
            evt.preventDefault();

            resultsDiv.innerHTML = '<h2>Searching...</h2>';
            const keyword = document.querySelector('input[name=q]').value.trim();

            if (!keyword) {
                resultsDiv.innerHTML = '<p>Please enter a search keyword.</p>';
                return;
            }

            try {
                const response = await fetch(
                    `https://api.tvmaze.com/search/shows?q=${keyword}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonData = await response.json();

                resultsDiv.innerHTML = '';

                if (jsonData.length === 0) {
                    resultsDiv.innerHTML = `<p>No results found for "${keyword}".</p>`;
                    return;
                }
                jsonData.forEach(item => {
                    const tvShow = item.show;
                    const article = document.createElement('article');
                    const h2 = document.createElement('h2');
                    h2.textContent = tvShow.name || 'Title Not Available';

                    const link = document.createElement('a');
                    link.href = tvShow.url || '#';
                    link.textContent = 'Link to Details';
                    link.target = "_blank"; 
                    const img = document.createElement('img');
                    img.src = tvShow.image
                        ? tvShow.image.medium
                        : 'https://placehold.co/210x295?text=Not%20Found';

                    img.alt = tvShow.name || 'Image not available';
                    const summaryDiv = document.createElement('div');
                    summaryDiv.innerHTML = tvShow.summary || 'Summary not available.';
                    article.appendChild(img);
                    article.appendChild(h2);
                    article.appendChild(link);
                    article.appendChild(summaryDiv);
                    resultsDiv.appendChild(article);
                });
            } catch (error) {
                resultsDiv.innerHTML = `<p style="color: red;">Error fetching data: ${error.message}</p>`;
                console.error('API Error:', error);
            }
        });
