let OlmaTechData = dataJsonList();

async function fetchAllData() {
    try {
        const response = await fetch('http://192.168.60.45:8080/api/Common');
        const data = await response.json();
        console.log("DATA", data);
        OlmaTechData.about = data.about;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function initialize() {
    document.getElementById('loader').style.display = 'block';

    const data = await fetchAllData();

    document.getElementById('loader').style.display = 'none';

    console.log('Fetched data:', data);
    window.OlmaTechData = data;
}

window.onload = initialize;


function dataJsonList(){
    return {
        "about": {
            "id": "f5530229-095b-447b-a3b3-6a075ab1e2b0",
            "address": {
            "en": "Republic of Uzbekistan, g. Tashkent, Almazar district, Oltinsay MFY, massif Kora-kamish 1/1, house 20/1",
            "uz": "Oʻzbekiston Respublikasi, g. Toshkent sh., Olmazor tumani, Oltinsoy MFY, Qora-qamish massivi 1/1, uy 20/1",
            "ru": "Республика Узбекистан, г. Ташкент, Алмазарский район, Олтинсай МФЙ, массив Кора-камиш 1/1, дом 20/1",
            "uzru": "Узбекистон Республики, г. Ташкент ш., Олмазор Тумани, Олтинсой МФУ, Гора-Камыш массив 1/1, уй 20/1"
            },
            "title": {
            "en": "000 engineering company \"OLMATECH\" in a new high-quality format",
            "uz": "000 \"OLMATECH\" injiniring kompaniyasi yangi sifat formatida",
            "ru": "000 инжиниринговая компания «OLMATECH» в новом качественном формате",
            "uzru": "000 \"OLMATECH\" инжиниринг компанияси янги форматда"
            },
            "description": {
            "en": "We work to help businesses and government agencies create and implement personal IT solutions aimed at development, increasing efficiency and optimizing time and costs. Providing high quality professional service that meets the business needs of customers. We take responsibility to the client and fulfill our obligations. IT Service improves the efficiency of clients’ business, helps and implements advanced solutions, strives to be a key partner and your friend.",
            "uz": "Biz biznes va davlat idoralariga rivojlanish, samaradorlikni oshirish va vaqt va xarajatlarni optimallashtirishga qaratilgan shaxsiy IT-yechimlarni yaratish va amalga oshirishda yordam berish uchun ishlaymiz. Mijozlarning biznes ehtiyojlariga javob beradigan yuqori sifatli professional xizmatni taqdim etish. Biz mijoz oldida javobgarlikni o'z zimmamizga olamiz va o'z majburiyatlarimizni bajaramiz. IT xizmati mijozlar biznesining samaradorligini oshiradi, ilg'or yechimlarga yordam beradi va amalga oshiradi, sizning asosiy hamkoringiz va do'stingiz bo'lishga intiladi.",
            "ru": "Мы работаем, чтобы помогать бизнесу и государственным структурам создавать и внедрять персональные IT-решения, направленные на развитие, повышение эффективности и оптимизацию времени и затрат. Оказание профессионального сервиса высокого качества, который соответствует потребностям бизнеса заказчиков. Мы берём на себя ответственность перед клиентом и исполняем взятые на себя обязательства. ІТ-Сервис повышает эффективность бизнеса клиентов, помогает и внедряет передовые решения, стремится быть ключевым партнером и вашим другом.",
            "uzru": "Биз бизнес ва давлат идораларига ривожланиш, самарадорликни ошириш ва вақт ва харажатларни оптималлаштиришга қаратилган шахсий ИТ-ечимларни яратиш ва амалга оширишда ёрдам бериш учун ишлаймиз. Мижозларнинг бизнес эҳтиёжларига жавоб берадиган юқори сифатли профессионал хизматни тақдим этиш. Биз мижоз олдида жавобгарликни ўз зиммамизга оламиз ва ўз мажбуриятларимизни бажарамиз. ИТ хизмати мижозлар бизнесининг самарадорлигини оширади, илғор ечимларга ёрдам беради ва амалга оширади, сизнинг асосий ҳамкорингиз ва дўстингиз бўлишга интилади."
            },
            "descriptionFooter": {
            "en": "Our competence: selection, design, comprehensive supply and integration of uninterruptible power supply systems, assembly and installation of server equipment and ensuring its uninterrupted operation, organizing the stable functioning of your IT infrastructure, office equipment and video surveillance systems.",
            "uz": "Bizning vakolatlarimiz: uzluksiz elektr ta'minoti tizimlarini tanlash, loyihalash, kompleks ta'minlash va integratsiyalash, server uskunalarini yig'ish va o'rnatish va uning uzluksiz ishlashini ta'minlash, IT infratuzilmangiz, orgtexnika va videokuzatuv tizimlarining barqaror ishlashini tashkil etish.",
            "ru": "Наша компетенция: подбор, проектирование, комплексная поставка и интеграция систем бесперебойного питания, сборка и монтаж серверного оборудования и обеспечение его бесперебойной работы, организация в комплексе стабильного функционирования Вашей ІТ-инфраструктуры, оргтехники и системы видеонаблюдений.",
            "uzru": "Бизнинг ваколатларимиз: узлуксиз электр таъминоти тизимларини танлаш, лойиҳалаш, комплекс таъминлаш ва интеграциялаш, сервер ускуналарини йиғиш ва ўрнатиш ва унинг узлуксиз ишлашини таъминлаш, ИТ инфратузилмангиз, оргтехника ва видеокузатув тизимларининг барқарор ишлашини ташкил этиш."
            },
            "experience": 5,
            "photo": "../images/about.jpg",
            "createdBy": "6dacf475-b2a9-4568-adcc-03781a50b9ad",
            "createdAt": "2024-07-18T11:37:43.754216Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
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
