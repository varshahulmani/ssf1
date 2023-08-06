const providers = {
    artwork: [
        { name: "Origami studio",rating:"⭐⭐⭐⭐⭐"},
        { name: "Embroirdery", rating: "⭐⭐⭐⭐" },
        { name: "Pottery Center", rating: "⭐⭐" },
        {name:"Macrame designs",rating:"⭐"
        }
    ],
    daycare: [
        { name: "Kids Haven Daycare", rating: "⭐⭐⭐⭐⭐" },
        { name: "Little Explorers", rating: "⭐⭐⭐" },
        { name: "Sunshine Kids Care", rating: "⭐⭐" }
    ],
    catering: [
        { name: "Delicious Delights Catering", rating: "⭐⭐⭐⭐⭐" },
        { name: "Taste Buds Caterers", rating: "⭐⭐⭐" },
        { name: "Elegant Events Catering", rating: "⭐⭐" }
    ],
    househelp: [
        { name: "Home Helpers", rating: "⭐⭐⭐⭐⭐" },
        { name: "Domestic Assistance Services", rating: "⭐⭐⭐⭐" },
        { name: "House Care Professionals", rating: "⭐⭐" }
    ]
};

const provider = {
    Bibvewadi: [
        { name: "Origami studio",rating:"⭐⭐⭐⭐⭐"},
    ],
    Kothrud: [
        { name: "Kids Haven Daycare", rating: "⭐⭐⭐⭐⭐" },
    ],
    Balewadi: [
        { name: "Delicious Delights Catering", rating: "⭐⭐⭐⭐⭐" },
    ],
    Baner: [
        { name: "Home Helpers", rating: "⭐⭐⭐⭐⭐" },
    ]
};


function showServiceProviders(service) {
    const providersList = document.getElementById("providersList");
    const selectedProviders = providers[service];

    const providersHTML = selectedProviders.map(provider => {
        return `<div class="provider">
                    <h3>${provider.name}</h3>
                    <p>Rating: ${provider.rating}</p>
                </div>`;
    }).join("");
    
    function showcity(location)
    {
        const providerList = document.getElementById("providerList");
    const selectedProviders = providers[location];

    const providersHTML = selectedProviders.map(provider => {
        return `<div class="provider">
                    <h3>${provider.name}</h3>
                    <p>Rating: ${provider.rating}</p>
                </div>`;
    }).join("");
    }

    providersList.innerHTML = `<h2>Best Rated ${service} Service Providers</h2>` + providersHTML;
    providerList.innerHTML = `<h2>Best Rated ${location} location Providers</h2>` + providerHTML;
    
}
