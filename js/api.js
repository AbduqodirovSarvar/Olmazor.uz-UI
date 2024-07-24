import * as home from "./home";
const baseApiUrl = 'http://45.130.148.137:8080/api';

const OlmaTechData = dataJsonList();

async function fetchAllData() {
    try {
        const response = await fetch(`${baseApiUrl}/Common`);
        const data = await response.json();
        console.log("DATA", data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function initialize() {
    document.getElementById('loader').style.display = 'block';

    const data = await fetchAllData();

    // home();
    // renderAboutSection();
    // renderBlogSection();
    // renderTestimonySection();
    // renderStaffSection();
    // renderServicesSection();
    // renderProjectsSection();


    document.getElementById('loader').style.display = 'none';
    
    //window.OlmaTechData = data;
}

window.onload = initialize;


function dataJsonList(){
    return {
        "homes": [
          {
            "id": "8e53ddde-7dfb-4b97-90f2-7fbf312ec500",
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
            "photo": "e6b1f937-05c8-4e45-a413-d12e913e536f.png",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T09:56:37.332246Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "7e46744d-d05e-4297-9340-0ccd8ac11159",
            "title": {
              "en": "Comprehensive IT Solutions",
              "uz": "Keng Qamrovli IT Yechimlari",
              "ru": "Комплексные IT-решения",
              "uzru": "Keng Qamrovli IT Yechimlari"
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
            "photo": "676b61b0-6d53-45c7-a4dc-8f5a4bd0d074.png",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T09:58:17.439162Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          }
        ],
        "about": {
          "id": "4f48503a-5f29-49fc-a9c9-826b333cfdf2",
          "address": {
            "en": "Republic of Uzbekistan, Tashkent city, Almazor district, Oltinsoy MFY, Kora-kamish massif 1/1, house 20/1.",
            "uz": "O‘zbekiston Respublikasi, Toshkent sh., Olmazor tumani, Oltinsoy MFY, Qo‘ra-qamish massivi 1/1, 20/1 uy.",
            "ru": "Республика Узбекистан, Ташкент, Алмазарский район, Олтинсай МФЙ, массив Кора-камиш 1/1, дом 20/1",
            "uzru": "O‘zbekiston Respublikasi, Toshkent sh., Olmazor tumani, Oltinsoy MFY, Qo‘ra-qamish massivi 1/1, 20/1 uy."
          },
          "title": {
            "en": "000 engineering company \"OLMATECH\" in a new quality format",
            "uz": "000 Injiniring kompaniyasi \"OLMATECH\" yangi sifat formatida",
            "ru": "000 инжиниринговая компания \"ОЛМАТEЧ\" в новом качественном формате",
            "uzru": "000 Инжиниринг компанияси \"ОЛМАТEЧ\" янги сифат форматида"
          },
          "description": {
            "en": "Olmatech is an engineering company in a new quality format. Our competencies: selection, design, comprehensive supply and integration of uninterruptible power supply systems, assembly and installation of server equipment and ensuring its uninterrupted operation, organizing the stable functioning of your IT infrastructure, office equipment and video surveillance systems.",
            "uz": "Olmatech - yangi sifat formatidagi muhandislik kompaniyasi. Bizning vakolatlarimiz: uzluksiz elektr ta'minoti tizimlarini tanlash, loyihalash, kompleks ta'minlash va integratsiyalash, server uskunalarini yig'ish va o'rnatish va uning uzluksiz ishlashini ta'minlash, IT infratuzilmangiz, orgtexnika va videokuzatuv tizimlarining barqaror ishlashini tashkil etish.",
            "ru": "Olmatech — инжиниринговая компания в новом формате качества. Наши компетенции: подбор, проектирование, комплексная поставка и интеграция систем бесперебойного питания, сборка и монтаж серверного оборудования и обеспечение его бесперебойной работы, организация в комплексе стабильного функционирования вашей ИТ-инфраструктуры, оргтехники и системы видеонаблюдения.",
            "uzru": "Олматеч - янги сифат форматидаги муҳандислик компанияси. Бизнинг ваколатларимиз: узлуксиз электр таъминоти тизимларини танлаш, лойиҳалаш, комплекс таъминлаш ва интеграциялаш, сервер ускуналарини йиғиш ва ўрнатиш ва унинг узлуксиз ишлашини таъминлаш, ИТ инфратузилмангиз, оргтехника ва видеокузатув тизимларининг барқарор ишлашини ташкил этиш."
          },
          "descriptionFooter": {
            "en": "We work to help businesses and government agencies create and implement personal IT solutions aimed at development, increasing efficiency and optimizing time and costs.",
            "uz": "Biz biznes va davlat idoralariga rivojlanish, samaradorlikni oshirish va vaqt va xarajatlarni optimallashtirishga qaratilgan shaxsiy IT-yechimlarni yaratish va amalga oshirishda yordam berish uchun ishlaymiz.",
            "ru": "Мы работаем, чтобы помогать бизнесу и государственным структурам создавать и внедрять персональные IT-решения, направленные на развитие, повышение эффективности и оптимизацию времени и затрат.",
            "uzru": "Биз бизнес ва давлат идораларига ривожланиш, самарадорликни ошириш ва вақт ва харажатларни оптималлаштиришга қаратилган шахсий ИТ-ечимларни яратиш ва амалга оширишда ёрдам бериш учун ишлаймиз."
          },
          "experience": 2,
          "photo": "e4090da2-efa5-4cf8-8202-9105d89d47f4.png",
          "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
          "createdAt": "2024-07-19T17:01:48.912706Z",
          "updatedBy": "00000000-0000-0000-0000-000000000000",
          "updatedAt": "0001-01-01T00:00:00"
        },
        "services": [
          {
            "id": "4eaf9ea0-b80c-4fed-ad72-1ce02ad63eb3",
            "name": {
              "en": "IT outsourcing services",
              "uz": "IT-autsorsing xizmatlari",
              "ru": "Услуги ИТ-аутсорсинга",
              "uzru": "ИТ-ауцорсинг хизматлари"
            },
            "description": {
              "en": "Constantly maintaining all systems in working order. Ensuring information protection and data safety. Prevention of device breakdowns. Repair of electronic components of computers of any complexity. Reliable anti-virus protection. Timely OS and software updates.",
              "uz": "Doimiy ravishda barcha tizimlarni ish tartibida saqlash. Axborot himoyasi va ma'lumotlar xavfsizligini ta'minlash. Qurilmaning buzilishining oldini olish. Har qanday murakkablikdagi kompyuterlarning elektron qismlarini ta'mirlash. Ishonchli antivirus himoyasi. OS va dasturiy ta'minotni o'z vaqtida yangilash.",
              "ru": "Постоянное поддержание всех систем в работоспособном состоянии. Обеспечение защиты информации и сохранности данных. Предупреждение поломок устройств. Ремонт электронных компонентов компьютеров любой сложности. Надежная антивирусная защита. Своевременное обновление ОС и ПО.",
              "uzru": "Доимий равишда барча тизимларни иш тартибида сақлаш. Ахборот ҳимояси ва маълумотлар хавфсизлигини таъминлаш. Қурилманинг бузилишининг олдини олиш. Ҳар қандай мураккабликдаги компютерларнинг электрон қисмларини таъмирлаш. Ишончли антивирус ҳимояси. ОС ва дастурий таъминотни ўз вақтида янгилаш."
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:20:45.909826Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "e3a50616-a266-49f6-a54c-b3f47ae01f92",
            "name": {
              "en": "Server maintenance",
              "uz": "Serverga texnik xizmat ko'rsatish",
              "ru": "Обслуживание серверов",
              "uzru": "Серверга техник хизмат кўрсатиш"
            },
            "description": {
              "en": "Assembly and installation of servers, racks, ventilation modules, power distribution, communicator, patch panels. Installation and configuration of virtualization, OP, services, port subnets, firewalls, NAT, VLAN. Providing power supply, cleaning, microclimate. Software and server OS updates, backup.",
              "uz": "Serverlar, tokchalar, ventilyatsiya modullari, quvvat taqsimlash, kommunikator, patch panellarni yig'ish va o'rnatish. Virtualizatsiya, OP, xizmatlar, port quyi tarmoqlari, xavfsizlik devorlari, NAT, VLANni o'rnatish va sozlash. Elektr ta'minoti, tozalash, mikroiqlimni ta'minlash. Dasturiy ta'minot va server OS yangilanishlari, zaxira.",
              "ru": "Сборка и установка серверов, стоек, вентиляционных модулей, распределение питания, коммуникатора, патч-панелей. Установка и настройка виртуализации, ОП, сервисов, подсети портов, файерволов, NAT, VLAN. Обеспечение электропитания, чистка, микроклимат. Обновление ПО и серверных ОС, резервное копирование.",
              "uzru": "Серверлар, токчалар, вентиляция модуллари, қувват тақсимлаш, коммуникатор, патч панелларни йиғиш ва ўрнатиш. Виртуализация, ОП, хизматлар, порт қуйи тармоқлари, хавфсизлик деворлари, НАТ, ВЛАНни ўрнатиш ва созлаш. Электр таъминоти, тозалаш, микроиқлимни таъминлаш. Дастурий таъминот ва сервер ОС янгиланишлари, захира."
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:23:27.063882Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "732a386d-d978-4f75-b441-19e6f0a144be",
            "name": {
              "en": "Uninterrupted network operation",
              "uz": "Tarmoqning uzluksiz ishlashi",
              "ru": "Бесперебойная работа сетей",
              "uzru": "Тармоқнинг узлуксиз ишлаши"
            },
            "description": {
              "en": "Configuration, administration, diagnostics of routers and communicators. Administration of Internet access channels. Replacement of failed devices. Software update. VLAN configuration.",
              "uz": "Routerlar va kommunikatorlarni sozlash, boshqarish, diagnostika qilish Internetga kirish kanallarini boshqarish. Muvaffaqiyatsiz qurilmalarni almashtirish. Dasturiy ta'minotni yangilash. VLAN konfiguratsiyasi.",
              "ru": "Настройка, администрирование, диагностика маршрутизаторов и коммуникаторов.Администрирование каналов доступа в интернет. Замена вышедших из строя устройств. Обновление программного обеспечения. Настройка VLAN.",
              "uzru": "Роутерлар ва коммуникаторларни созлаш, бошқариш, диагностика қилиш Интернетга кириш каналларини бошқариш. Муваффақиятсиз қурилмаларни алмаштириш. Дастурий таъминотни янгилаш. ВЛАН конфигурацияси."
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:26:53.588577Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "7811308f-fefd-42cf-a3b9-d10cf895a3b8",
            "name": {
              "en": "Video surveillance systems",
              "uz": "Video kuzatuv tizimlari",
              "ru": "Системы видеонаблюдения",
              "uzru": "Видео кузатув тизимлари"
            },
            "description": {
              "en": "Installation and configuration of video surveillance systems. Providing access to video stream via the Internet. Regular inspection and maintenance of equipment. Training users to use the system. Technical support and solving possible problems with the system.",
              "uz": "Video kuzatuv tizimlarini o'rnatish va sozlash. Internet orqali video oqimga kirishni ta'minlash. Uskunalarni muntazam tekshirish va texnik xizmat ko'rsatish. Foydalanuvchilarni tizimdan foydalanishga o'rgatish. Texnik yordam va tizim bilan yuzaga kelishi mumkin bo'lgan muammolarni hal qilish.",
              "ru": "Установка и настройка систем видеонаблюдения. Обеспечение доступа к видеопотоку через интернет. Регулярная проверка и обслуживание оборудования. Обучение пользователей работе с системой. Техническая поддержка и решение возможных проблем с системой.",
              "uzru": "Видео кузатув тизимларини ўрнатиш ва созлаш. Интернет орқали видео оқимга киришни таъминлаш. Ускуналарни мунтазам текшириш ва техник хизмат кўрсатиш. Фойдаланувчиларни тизимдан фойдаланишга ўргатиш. Техник ёрдам ва тизим билан юзага келиши мумкин бўлган муаммоларни ҳал қилиш."
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:29:00.139834Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          }
        ],
        "projects": [
          {
            "id": "6945b558-fba2-4722-af74-51efb91959aa",
            "name": {
              "en": "Project1",
              "uz": "Project1",
              "ru": "project1",
              "uzru": "project1"
            },
            "description": {
              "en": "absdfbglb",
              "uz": "sndkjfnli",
              "ru": "ksdnfklhbl",
              "uzru": "lnhlidsfnlu"
            },
            "link": "http://olmatech.uz",
            "photo": "29274349-7799-4484-9d0d-d9fa5065d797.png",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T10:20:25.669571Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "4aa5402a-22a3-4431-b06d-17587bfe2471",
            "name": {
              "en": "Project1",
              "uz": "Project1",
              "ru": "project1",
              "uzru": "project1"
            },
            "description": {
              "en": "absdfbglb",
              "uz": "sndkjfnli",
              "ru": "ksdnfklhbl",
              "uzru": "lnhlidsfnlu"
            },
            "link": "http://olmatech.uz",
            "photo": "b0b1374d-e319-4ec0-b042-88fe06da4701.png",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T10:20:32.516223Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          }
        ],
        "teams": [
          {
            "id": "1edeb225-8bcb-49c5-a155-c1650f91e2b1",
            "firstname": {
              "en": "Sarvar",
              "uz": "Sarvar",
              "ru": "Сарвар",
              "uzru": "Сарвар"
            },
            "lastname": {
              "en": "Abduqodirov",
              "uz": "Abduqodirov",
              "ru": "Абдуқодиров",
              "uzru": "Абдуқодиров"
            },
            "position": {
              "en": "Software engineer",
              "uz": "Dasturchi muhandis",
              "ru": "Инженер-программист",
              "uzru": "Дастурчи муҳандис"
            },
            "photo": "0356e0c0-4fb7-4970-bd40-54fa04fb349d.jpg",
            "telegram": "https://t.me/Sarvarbek_Abduqodirov",
            "instagram": "https://www.instagram.com/sarvarbek_abduqodirov",
            "twitter": "https://x.com/AbduqodirovS_",
            "email": "abduqodirovsarvar.2002@gmail.com",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:13:39.3504Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "9fc76c45-0c98-425e-88f0-14dad97565ab",
            "firstname": {
              "en": "Abdurahmon",
              "uz": "Abdurahmon",
              "ru": "Абдураҳмон",
              "uzru": "Абдураҳмон"
            },
            "lastname": {
              "en": "Djuraev",
              "uz": "Djuraev",
              "ru": "Джураев",
              "uzru": "Джураев"
            },
            "position": {
              "en": "Manager",
              "uz": "Menejer",
              "ru": "Менеджер",
              "uzru": "Менежер"
            },
            "photo": "c745c343-7c36-4ced-aaaa-f31e8bc4524e.JPG",
            "telegram": "https://t.me/djuraev721",
            "instagram": null,
            "twitter": null,
            "email": null,
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:17:30.747312Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          }
        ],
        "clients": [
          {
            "id": "dc052a23-119e-4403-9f5a-2b9da83ae39f",
            "firstname": {
              "en": "Ali",
              "uz": "Ali",
              "ru": "Alii",
              "uzru": "Alii"
            },
            "lastname": {
              "en": "Valiev",
              "uz": "Valiev",
              "ru": "Valieva",
              "uzru": "Valieva"
            },
            "phone": "+998932340316",
            "photo": "38726d75-a934-4780-9c80-acc8cafd25eb.png",
            "position": {
              "en": "jhdghuehu",
              "uz": "asadd",
              "ru": "jasdbh",
              "uzru": "jhbaskjdbkh"
            },
            "comment": {
              "en": "kwnkjenln",
              "uz": "knailsdnli",
              "ru": "jkNASKJDHUH",
              "uzru": "kljldjisjijwjsjj"
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T10:10:19.44912Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "ffa49a25-62d7-47cf-a245-d252342e6e1b",
            "firstname": {
              "en": "ald",
              "uz": "ald",
              "ru": "asdbh",
              "uzru": "asdbh"
            },
            "lastname": {
              "en": "ajdsjdfkb",
              "uz": "ajdsjdfkb",
              "ru": "sajdbjbfh",
              "uzru": "sajdbjbfh"
            },
            "phone": "+998932340316",
            "photo": "e0db34c8-8545-4f1b-bb5b-f386e90e657d.png",
            "position": {
              "en": "jasabdukhfsb",
              "uz": "habsdkjbf",
              "ru": "ajhbdsuhf",
              "uzru": "easrdfg"
            },
            "comment": {
              "en": "asdfvgrd",
              "uz": "bsdakufsb",
              "ru": "aasdfg",
              "uzru": "weregrefr"
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T10:17:19.855672Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          }
        ],
        "blogs": [
          {
            "id": "da2eee93-b279-44af-b4eb-0d38a3afebcb",
            "title": {
              "en": "wrjenkblewjr",
              "uz": "jwbekjrbk",
              "ru": "efrgxchtttggwere",
              "uzru": "wrrgegrhtrryytju"
            },
            "description": {
              "en": "wq4iuouhrioehpiqerjopefwj",
              "uz": "erugrhogrhogr",
              "ru": "jqwoeijrepbtriuneripbnbr",
              "uzru": "wkebrwkubgtipjwipueqhrw"
            },
            "link": "http://sdkjfbgkjew.uz",
            "photo": "d84b513c-2d40-4227-825f-487171803d65.png",
            "date": {
              "year": 2024,
              "month": 7,
              "day": 23
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T10:22:05.561313Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "87aaa057-b48d-41e9-baa4-614f00a99d50",
            "title": {
              "en": "wrjenkblewjr",
              "uz": "jwbekjrbk",
              "ru": "efrgxchtttggwere",
              "uzru": "wrrgegrhtrryytju"
            },
            "description": {
              "en": "wq4iuouhrioehpiqerjopefwj",
              "uz": "erugrhogrhogr",
              "ru": "jqwoeijrepbtriuneripbnbr",
              "uzru": "wkebrwkubgtipjwipueqhrw"
            },
            "link": "http://sdkjfbgkjew.uz",
            "photo": "6619c560-089f-49e5-89b0-d328f6d716c0.png",
            "date": {
              "year": 2024,
              "month": 7,
              "day": 23
            },
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-23T10:22:08.962538Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          }
        ],
        "contacts": [
          {
            "id": "66293542-26a6-4e30-978e-180d8fd7977c",
            "name": {
              "id": 1,
              "name": "Phone"
            },
            "link": "+998 99 721 53 33",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:32:44.297767Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "b398bc7c-4221-4d6b-bf98-6512f2baa6d5",
            "name": {
              "id": 3,
              "name": "Telegram"
            },
            "link": "https://t.me/olmatech_uz",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:35:10.84409Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "9a147ba6-1041-4f8a-a4cd-240c9344a411",
            "name": {
              "id": 4,
              "name": "Instagram"
            },
            "link": "https://www.instagram.com/olmatech.uz",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:35:34.859097Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          },
          {
            "id": "b24890a1-c22a-4233-ab61-efb348a3f752",
            "name": {
              "id": 8,
              "name": "Website"
            },
            "link": "https://olmatech.uz",
            "createdBy": "a49b39a7-7093-4569-b7b4-c90c8e94e8e8",
            "createdAt": "2024-07-19T17:36:26.617006Z",
            "updatedBy": "00000000-0000-0000-0000-000000000000",
            "updatedAt": "0001-01-01T00:00:00"
          }
        ]
      }
    };