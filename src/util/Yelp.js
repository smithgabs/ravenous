const apiKey = 'cj8qZD8zYcdd_-jrDo8VRyRwEkOp8MaKWmx40NuZ0t0Cbd66ENJO8lvn7THwNyvNC_XsSJ4ZZgsEVUDrLuJbFO5uf6Ey0CKlIqtESGGhOWq-mr6wtN6FwclJ_f_QX3Yx';

const Yelp = {
searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;