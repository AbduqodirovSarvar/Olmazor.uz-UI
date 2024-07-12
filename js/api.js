let OlmaTechData = dataJsonList();

async function fetchAllData() {
    // try {
    //     const response = await fetch(`http://127.0.0.1:5500/resource/mockData.json`).then((response) => {
    //         console.log(response.json());
    //     });
    //     var data = response.json();
    //     console.log("DATA", data);
    //     return response.json();
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    //     throw error;
    // }
}
function dataJsonList(){
    return {
        "about": {
            "photo": "images/about.jpg",
            "subheading": "Welcome to digilab",
            "title": "We Are Digital Agency",
            "description": "Even the all-powerful Pointing has no control about the blind texts. It is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            "yearsOfExperience": 5
        },
        "projects": [
            {
                "title": "Project 1",
                "category": "Web Design",
                "photo": "images/project-1.jpg"
            },
            {
                "title": "Project 2",
                "category": "Web Development",
                "photo": "images/project-2.jpg"
            },
            {
                "title": "Project 3",
                "category": "App Development",
                "photo": "images/project-3.jpg"
            },
            {
                "title": "Project 4",
                "category": "Digital Marketing",
                "photo": "images/project-4.jpg"
            },
            {
                "title": "Project 5",
                "category": "E-commerce",
                "photo": "images/project-5.jpg"
            },
            {
                "title": "Project 6",
                "category": "SEO Optimization",
                "photo": "images/project-6.jpg"
            }
        ],
        "services": [
            {
                "title": "Business Strategy",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur.",
                "details": "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
                "icon": "flaticon-ideas",
                "link": "#"
            },
            {
                "title": "Research",
                "description": "Comprehensive research services tailored to your business needs.",
                "details": "We provide deep insights and analyses to help guide your decisions.",
                "icon": "flaticon-flasks",
                "link": "#"
            },
            {
                "title": "Data Analysis",
                "description": "Transforming data into actionable insights.",
                "details": "Our team specializes in interpreting data to inform strategic decisions.",
                "icon": "flaticon-analysis",
                "link": "#"
            },
            {
                "title": "UI Design",
                "description": "Creating user-friendly interfaces for seamless experiences.",
                "details": "Our designs prioritize user experience and accessibility.",
                "icon": "flaticon-web-design",
                "link": "#"
            },
            {
                "title": "UX Design",
                "description": "Enhancing user satisfaction through improved usability.",
                "details": "We focus on understanding user needs to create intuitive designs.",
                "icon": "flaticon-ux-design",
                "link": "#"
            },
            {
                "title": "Technology",
                "description": "Integrating the latest technologies into your business.",
                "details": "Stay ahead with our cutting-edge technological solutions.",
                "icon": "flaticon-innovation",
                "link": "#"
            },
            {
                "title": "Creative Solutions",
                "description": "Innovative approaches to complex challenges.",
                "details": "Our creative team thinks outside the box to provide unique solutions.",
                "icon": "flaticon-idea",
                "link": "#"
            }
        ],
        "team": {
            "subheading": "About Us",
            "heading": "Our Staff",
            "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            "staff": [
                { "name": "Lloyd Wilson", "position": "CEO, Founder", "photo": "images/staff-1.jpg" },
                { "name": "Rachel Parker", "position": "Web Designer", "photo": "images/staff-2.jpg" },
                { "name": "Ian Smith", "position": "Web Developer", "photo": "images/staff-3.jpg" },
                { "name": "Alicia Henderson", "position": "Graphic Designer", "photo": "images/staff-4.jpg" },
                { "name": "James Brown", "position": "Marketing Manager", "photo": "images/staff-4.jpg" },
                { "name": "Emily Johnson", "position": "SEO Specialist", "photo": "images/staff-4.jpg" }
            ]
        },
        "home": [
        {
            "subtitle": "Small Details Make A Big Impression",
            "title": "We are a team of talented tech industry.",
            "description": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
            "photo": "images/bg_1.jpg"
        },
        {
            "subtitle": "Small Details Make A Big Impression",
            "title": "Strategic Design And Technology Agency",
            "description": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
            "photo": "images/bg_2.jpg"
        },
        {
            "subtitle": "Small Details Make A Big Impression",
            "title": "Test small river",
            "description": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
            "photo": "images/bg_1.jpg"
        }
        ],
        "client": {
            "heading": 'Happy Clients',
            "people": [
                {
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    name: 'John Fox',
                    position: 'Businessman',
                    image: 'images/person_1.jpg'
                },
                {
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    name: 'John Fox',
                    position: 'Businessman',
                    image: 'images/person_2.jpg'
                },
                {
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    name: 'John Fox',
                    position: 'Businessman',
                    image: 'images/person_3.jpg'
                },
                {
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    name: 'John Fox',
                    position: 'Businessman',
                    image: 'images/person_4.jpg'
                },
                {
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    name: 'John Fox',
                    position: 'Businessman',
                    image: 'images/person_4.jpg'
                },
                {
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    name: 'John Fox',
                    position: 'Businessman',
                    image: 'images/person_4.jpg'
                },
                {
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    name: 'John Fox',
                    position: 'Businessman',
                    image: 'images/person_4.jpg'
                }
            ]
        }
    }
}
