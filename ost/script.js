// Define an array of news articles
const newsArticles = [
    {
      title: "Article 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis nulla libero, ac eleifend justo accumsan sed. Vivamus ullamcorper sapien eget sagittis tincidunt. Ut maximus tellus eu elit mattis faucibus. Duis egestas, justo ut mattis volutpat, augue nulla blandit orci, ut iaculis felis dui nec neque. Aenean vehicula libero eget justo sagittis mollis. Pellentesque rhoncus venenatis est, rutrum facilisis nisi mattis et. Nullam sagittis mauris iaculis purus commodo, non elementum odio condimentum.      ",
      date: "June 14, 2023"
    },
    {
      title: "Article 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis nulla libero, ac eleifend justo accumsan sed. Vivamus ullamcorper sapien eget sagittis tincidunt. Ut maximus tellus eu elit mattis faucibus. Duis egestas, justo ut mattis volutpat, augue nulla blandit orci, ut iaculis felis dui nec neque. Aenean vehicula libero eget justo sagittis mollis. Pellentesque rhoncus venenatis est, rutrum facilisis nisi mattis et. Nullam sagittis mauris iaculis purus commodo, non elementum odio condimentum.      ",
      date: "June 15, 2023"
    },
    {
      title: "Article 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis nulla libero, ac eleifend justo accumsan sed. Vivamus ullamcorper sapien eget sagittis tincidunt. Ut maximus tellus eu elit mattis faucibus. Duis egestas, justo ut mattis volutpat, augue nulla blandit orci, ut iaculis felis dui nec neque. Aenean vehicula libero eget justo sagittis mollis. Pellentesque rhoncus venenatis est, rutrum facilisis nisi mattis et. Nullam sagittis mauris iaculis purus commodo, non elementum odio condimentum.      ",
      date: "June 16, 2023"
    }
    // Add more news articles as needed
  ];
  
  // Function to dynamically generate the news feed
  function generateNewsFeed() {
    const newsList = document.getElementById("news-list");
  
    // Clear the existing content
    newsList.innerHTML = "";
  
    // Iterate through the news articles array
    for (let i = 0; i < newsArticles.length; i++) {
      const article = newsArticles[i];
  
      // Create list item for each news article
      const listItem = document.createElement("li");
  
      // Create article details
      const titleElement = document.createElement("h3");
      titleElement.textContent = article.title;
  
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = article.description;
  
      const dateElement = document.createElement("p");
      dateElement.textContent = article.date;
  
      // Append article details to the list item
      listItem.appendChild(titleElement);
      listItem.appendChild(descriptionElement);
      listItem.appendChild(dateElement);
  
      // Append the list item to the news list
      newsList.appendChild(listItem);
    }
  }
  
  // Call the function to generate the news feed
  generateNewsFeed();
  
  // Filter job listings based on location
function filterListings() {
    const locationFilter = document.getElementById('filter-location');
    const jobListings = document.getElementsByClassName('job-listing');
  
    const selectedLocation = locationFilter.value;
  
    for (let i = 0; i < jobListings.length; i++) {
      const listing = jobListings[i];
      const listingLocation = listing.getAttribute('data-location');
  
      if (selectedLocation === '' || selectedLocation === listingLocation) {
        listing.style.display = 'block';
      } else {
        listing.style.display = 'none';
      }
    }
  }
  
  // Search job listings based on input text
  function searchListings() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const jobListings = document.getElementsByClassName('job-listing');
  
    for (let i = 0; i < jobListings.length; i++) {
      const listing = jobListings[i];
      const jobTitle = listing.querySelector('h2').textContent.toLowerCase();
      const companyName = listing.querySelector('p:nth-child(2)').textContent.toLowerCase();
  
      if (jobTitle.includes(searchTerm) || companyName.includes(searchTerm)) {
        listing.style.display = 'block';
      } else {
        listing.style.display = 'none';
      }
    }
  }
  
  // Event listeners
  document.getElementById('filter-location').addEventListener('change', filterListings);
  document.getElementById('search-input').addEventListener('input', searchListings);
  