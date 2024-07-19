const OlmaTechData = dataJsonList();

async function fetchAllData() {
    // try {
    //     const response = await fetch('http://192.168.60.45:8080/api/Common');
    //     const data = await response.json();
    //     console.log("DATA", data);
    //     return data;
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    //     throw error;
    // }
}

async function initialize() {
    document.getElementById('loader').style.display = 'block';

    const data = await fetchAllData();

    document.getElementById('loader').style.display = 'none';
    
    //window.OlmaTechData = data;
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
            "name": {
                "en": "Project 1",
                "uz": "Loyiha 1",
                "ru": "Проект 1",
                "uzru": "Loyiha 1"
            },
            "description": {
                "en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed egestas, ante non commodo elementum, justo lacus lobortis lectus, a vulputate ex velit non ex. In hac habitasse platea dictumst.",
                "uz": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed egestas, ante non commodo elementum, justo lacus lobortis lectus, a vulputate ex velit non ex. In hac habitasse platea dictumst.",
                "ru": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed egestas, ante non commodo elementum, justo lacus lobortis lectus, a vulputate ex velit non ex.",
                "uzru": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed egestas, ante non commodo elementum, justo lacus lobortis lectus, a vulputate ex velit non ex."
            },
            "photo": "images/project-1.jpg"
            
        }
        ],
        "services": [
            {
            "name": {
                "en": "Business Strategy",
                "uz": "Biznes strategiyasi",
                "ru": "Бизнес-стратегия",
                "uzru": "Biznes strategiyasi"
            },
            "description": {
                "en": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur.",
                "uz": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur.",
                "ru": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur.",
                "uzru": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur."
            },
            "icon": "flaticon-ideas"
            },
            {
            "name": {
                "en": "Research",
                "uz": "Tadqiqot",
                "ru": "Исследование",
                "uzru": "Tadqiqot"
            },
            "description": {
                "en": "Comprehensive research services tailored to your business needs.",
                "uz": "Biznes ehtiyojlaringizga moslashtirilgan keng qamrovli tadqiqot xizmatlari.",
                "ru": "Комплексные исследовательские услуги, адаптированные к вашим бизнес-потребностям.",
                "uzru": "Biznes ehtiyojlaringizga moslashtirilgan keng qamrovli tadqiqot xizmatlari."
            },
            "icon": "flaticon-flasks"
            },
            {
            "name": {
                "en": "Data Analysis",
                "uz": "Ma'lumotlarni tahlil qilish",
                "ru": "Анализ данных",
                "uzru": "Ma'lumotlarni tahlil qilish"
            },
            "description": {
                "en": "Transforming data into actionable insights.",
                "uz": "Ma'lumotlarni amaliy tavsiyalarga aylantirish.",
                "ru": "Преобразование данных в действенные инсайты.",
                "uzru": "Ma'lumotlarni amaliy tavsiyalarga aylantirish."
            },
            "icon": "flaticon-analysis"
            },
            {
            "name": {
                "en": "UI Design",
                "uz": "UI Dizayn",
                "ru": "Дизайн интерфейса",
                "uzru": "UI Dizayn"
            },
            "description": {
                "en": "Creating user-friendly interfaces for seamless experiences.",
                "uz": "Foydalanuvchilarga qulay interfeyslarni yaratish.",
                "ru": "Создание удобных интерфейсов для бесшовного взаимодействия.",
                "uzru": "Foydalanuvchilarga qulay interfeyslarni yaratish."
            },
            "icon": "flaticon-web-design"
            },
            {
            "name": {
                "en": "UX Design",
                "uz": "UX Dizayn",
                "ru": "Дизайн пользовательского опыта",
                "uzru": "UX Dizayn"
            },
            "description": {
                "en": "Enhancing user satisfaction through improved usability.",
                "uz": "Yaxshilangan foydalanish qulayligi orqali foydalanuvchi qoniqishini oshirish.",
                "ru": "Повышение удовлетворенности пользователей за счет улучшенной удобства использования.",
                "uzru": "Yaxshilangan foydalanish qulayligi orqali foydalanuvchi qoniqishini oshirish."
            },
            "icon": "flaticon-ux-design"
            },
            {
            "name": {
                "en": "Technology",
                "uz": "Texnologiya",
                "ru": "Технологии",
                "uzru": "Texnologiya"
            },
            "description": {
                "en": "Integrating the latest technologies into your business.",
                "uz": "Eng so'nggi texnologiyalarni biznesingizga integratsiya qilish.",
                "ru": "Интеграция последних технологий в ваш бизнес.",
                "uzru": "Eng so'nggi texnologiyalarni biznesingizga integratsiya qilish."
            },
            "icon": "flaticon-innovation"
            },
            {
            "name": {
                "en": "Creative Solutions",
                "uz": "Ijodiy yechimlar",
                "ru": "Креативные решения",
                "uzru": "Ijodiy yechimlar"
            },
            "description": {
                "en": "Innovative approaches to complex challenges.",
                "uz": "Murakkab muammolarga innovatsion yondashuvlar.",
                "ru": "Инновационные подходы к сложным задачам.",
                "uzru": "Murakkab muammolarga innovatsion yondashuvlar."
            },
            "icon": "flaticon-idea"
            }
        ],
            "team": {
                "subheading": "About Us",
                "heading": "Our Staff",
                "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
                "staff": [
                    { "name": "Abdurahmon Djuraev", "position": "Manager", "photo": "images/Abdurahmon.JPG" },
                    { "name": "Abduqodirov Sarvar", "position": "Software Engineer", "photo": "images/Sarvar.jpg" },
                ]
            },
            "home": [
                {
                "title": {
                    "en": "Leading IT Solutions for Modern Businesses",
                    "uz": "Zamonaviy Bizneslar Uchun Yetakchi IT Yechimlari",
                    "ru": "Ведущие IT-решения для современных бизнесов",
                    "uzru": "Zamonaviy Bizneslar Uchun Yetakchi IT Yechimlari"
                },
                "subtitle": {
                    "en": "Empowering Your Digital Presence",
                    "uz": "Sizning Raqamli Taqdimotingizni Kuchaytirish",
                    "ru": "Укрепление вашего цифрового присутствия",
                    "uzru": "Sizning Raqamli Taqdimotingizni Kuchaytirish"
                },
                "description": {
                    "en": "Our company specializes in providing cutting-edge IT services including server management, website development, and reliable network connections to enhance your digital infrastructure.",
                    "uz": "Bizning kompaniyamiz server boshqaruvi, veb-sayt ishlab chiqish va ishonchli tarmoq ulanishlari kabi ilg'or IT xizmatlarini taqdim etishga ixtisoslashgan.",
                    "ru": "Наша компания специализируется на предоставлении передовых IT-услуг, включая управление серверами, разработку веб-сайтов и надежные сетевые соединения для улучшения вашей цифровой инфраструктуры.",
                    "uzru": "Bizning kompaniyamiz server boshqaruvi, veb-sayt ishlab chiqish va ishonchli tarmoq ulanishlari kabi ilg'or IT xizmatlarini taqdim etishga ixtisoslashgan."
                },
                "photo": "images/bg_1.jpg"
                },
                {
                "title": {
                    "en": "Comprehensive IT Solutions",
                    "uz": "Keng Qamrovli IT Yechimlari",
                    "ru": "Комплексные IT-решения",
                    "uzru": "Keng Qamrovli IT Yechimlari"
                },
                "subtitle": {
                    "en": "Optimizing Technology for Your Success",
                    "uz": "Muvaffaqiyatingiz Uchun Texnologiyani Optimallashtirish",
                    "ru": "Оптимизация технологий для вашего успеха",
                    "uzru": "Muvaffaqiyatingiz Uchun Texnologiyani Optimallashtirish"
                },
                "description": {
                    "en": "We provide expert solutions in server management, website creation, and network connectivity to ensure your technology works seamlessly and supports your business goals.",
                    "uz": "Biz server boshqaruvi, veb-sayt yaratish va tarmoq ulanishlari bo'yicha mutaxassis yechimlarini taqdim etamiz, bu texnologiyalaringiz muammosiz ishlashini va biznes maqsadlaringizni qo'llab-quvvatlashini ta'minlaydi.",
                    "ru": "Мы предоставляем экспертные решения в управлении серверами, создании веб-сайтов и сетевой подключаемости, чтобы обеспечить бесшовную работу вашей технологии и поддержку ваших бизнес-целей.",
                    "uzru": "Biz server boshqaruvi, veb-sayt yaratish va tarmoq ulanishlari bo'yicha mutaxassis yechimlarini taqdim etamiz, bu texnologiyalaringiz muammosiz ishlashini va biznes maqsadlaringizni qo'llab-quvvatlashini ta'minlaydi."
                },
                "photo": "images/bg_2.jpg"
                },
                {
                "title": {
                    "en": "Innovative IT Services",
                    "uz": "Innovatsion IT Xizmatlari",
                    "ru": "Инновационные IT-услуги",
                    "uzru": "Innovatsion IT Xizmatlari"
                },
                "subtitle": {
                    "en": "Transforming Your Digital Landscape",
                    "uz": "Sizning Raqamli Manzilingizni O'zgartirish",
                    "ru": "Преобразование вашего цифрового ландшафта",
                    "uzru": "Sizning Raqamli Manzilingizni O'zgartirish"
                },
                "description": {
                    "en": "From robust server solutions to dynamic websites and secure network connections, our services are designed to enhance your digital capabilities and drive business success.",
                    "uz": "Mustahkam server yechimlaridan dinamik veb-saytlar va xavfsiz tarmoq ulanishlarigacha, xizmatlarimiz raqamli imkoniyatlaringizni oshirish va biznes muvaffaqiyatini ta'minlash uchun mo'ljallangan.",
                    "ru": "От надежных серверных решений до динамичных веб-сайтов и безопасных сетевых соединений, наши услуги предназначены для улучшения ваших цифровых возможностей и достижения бизнес-успеха.",
                    "uzru": "Mustahkam server yechimlaridan dinamik veb-saytlar va xavfsiz tarmoq ulanishlarigacha, xizmatlarimiz raqamli imkoniyatlaringizni oshirish va biznes muvaffaqiyatini ta'minlash uchun mo'ljallangan."
                },
                "photo": "images/bg_3.jpg"
                }
            ],
            "blogs": [
                {
                    date: { day: '18', month: '07', year: '2024' },
                    image: 'images/image_1.jpg',
                    title: {
                        en: 'Company Launch: New Office Opening and Start of Operations',
                        ru: 'Открытие Компании: Новый Офис и Начало Работы',
                        uz: 'Kompaniya Ishga Tushishi: Yangi Ofisni Ochildi va Ishlar Boshlanishi',
                        uzru: 'Kompaniya Ishga Tushishi: Yangi Ofisni Ochildi va Ishlar Boshlanishi'
                    },
                    description: {
                        en: 'We are excited to announce the launch of our new office and the beginning of our operations. Join us as we embark on this new journey.',
                        ru: 'Мы рады объявить об открытии нашего нового офиса и начале нашей работы. Присоединяйтесь к нам в этом новом путешествии.',
                        uz: 'Yangi ofisimiz ochilishi va ishlarimiz boshlanishi haqida e’lon qilishdan xursandmiz. Biz bilan bu yangi sayohatga qo‘shiling.',
                        uzru: 'Yangi ofisimiz ochilishi va ishlarimiz boshlanishi haqida e’lon qilishdan xursandmiz. Biz bilan bu yangi sayohatga qo‘shiling.'
                    },
                    link: 'single.html',
                    author: 'Admin',
                    comments: 5
                },
                {
                    date: { day: '20', month: '07', year: '2024' },
                    image: 'images/image_2.jpg',
                    title: {
                        en: 'Celebrating Our New Office Opening',
                        ru: 'Празднование Открытия Нашего Нового Офиса',
                        uz: 'Yangi Ofisimizni Ochilishini Nishonlash',
                        uzru: 'Yangi Ofisimizni Ochilishini Nishonlash'
                    },
                    description: {
                        en: 'Our new office is now officially open! Discover the state-of-the-art facilities and meet our dedicated team.',
                        ru: 'Наш новый офис теперь официально открыт! Откройте для себя современные удобства и познакомьтесь с нашей преданной командой.',
                        uz: 'Yangi ofisimiz endi rasmiy ravishda ochildi! Zamonaviy uskunalar va bag‘ishlangan jamoamiz bilan tanishing.',
                        uzru: 'Yangi ofisimiz endi rasmiy ravishda ochildi! Zamonaviy uskunalar va bag‘ishlangan jamoamiz bilan tanishing.'
                    },
                    link: 'single.html',
                    author: 'Admin',
                    comments: 2
                },
                {
                    date: { day: '20', month: '07', year: '2024' },
                    image: 'images/image_3.jpg',
                    title: {
                        en: 'Getting Started: Our New Office Journey Begins',
                        ru: 'Начало Работы: Наш Новый Офис Приступает к Работе',
                        uz: 'Ishlar Boshlanishi: Yangi Ofisimizdagi Yangi Safarimiz',
                        uzru: 'Ishlar Boshlanishi: Yangi Ofisimizdagi Yangi Safarimiz'
                    },
                    description: {
                        en: 'We are thrilled to start our operations from our new office. Here’s a glimpse into what’s to come as we begin this exciting chapter.',
                        ru: 'Мы рады начать работу из нашего нового офиса. Вот краткий обзор того, что нас ждет, когда мы начинаем эту захватывающую главу.',
                        uz: 'Yangi ofisimizdan ish boshlashdan juda xursandmiz. Bu qiziqarli bobni qanday boshlashimizni ko‘ring.',
                        uzru: 'Yangi ofisimizdan ish boshlashdan juda xursandmiz. Bu qiziqarli bobni qanday boshlashimizni ko‘ring.'
                    },
                    link: 'single.html',
                    author: 'Admin',
                    comments: 4
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
