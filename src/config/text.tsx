export const texts = new Map<string, Map<string, string>>([
	["greeting",
		new Map<string, string>([
			["EN", "Hi! My name is Igor and I'm a fullstack software developer."],
			["RO", "Bine ai venit!"],
			["RU", "Добро пожаловать!"],
		]),
	],
	["fullstackBody",
		new Map<string, string>([
			["EN", "Development and maintenance of sales platform for Orange's partners built on Spring MVC and " +
			"Oracle database, what includes integrating new functionalities, APIs, printing templates and UI features. " +
			"Development and maintenance of CRM, Ticketing and reporting platforms build on React.js (frontend), Spring boot " +
			"microservices (Backend), Keycloak for authentication and Oracle database. My tasks include: defining and " +
			"creating new business flows, elaboration of applications architecture, integration with internal and " +
			"external APIs, import and export of data, defining DTO structure,event triggered notifications sent by email, " +
			"development of new automated generated reports sent by email. Development and maintenance of new REST APIs " +
			"on Spring Boot and Node.js frameworks, Oracle, PostgreSQL and NoSQL DBs, for integration with internal " +
			"and external platforms. Also using technologies Docker, git, GitLab, Hibernate,JPA, Thymeleaf, jQuery, " +
			"Android SDK, Google cloud: hosting, DB, functions, storage."],
			["RO", "Dezvoltarea și întreținerea platformei de vânzări pentru partenerii Orange, construită pe baza de " +
			"date Spring MVC și Oracle, ceea ce include integrarea de noi funcționalități, API-uri, șabloane de imprimare " +
			"și caracteristici UI. Dezvoltarea și întreținerea platformelor CRM, Ticketing și raportare pe " +
			"React.js (frontend), microservicii de boot Spring (Backend), Keycloak pentru autentificare și baza " +
			"de date Oracle. Sarcinile mele includ: definirea și crearea de noi fluxuri de afaceri, elaborarea " +
			"arhitecturii aplicațiilor, integrarea cu API-urile interne și externe, importul și exportul de date, " +
			"definirea structurii DTO, notificările declanșate de evenimente trimise prin e-mail, dezvoltarea de noi " +
			"rapoarte generate automat trimise prin e-mail. Dezvoltarea și întreținerea noilor API-uri REST pe cadrele " +
			"Spring Boot și Node.js, Oracle, PostgreSQL și NoSQL DB-uri, pentru integrare cu platforme interne și " +
			"externe. Folosind și tehnologii Docker, git, GitLab, Hibernate, JPA, Thymeleaf, jQuery, Android SDK, " +
			"cloud Google: găzduire, DB, funcții, stocare."],
			["RU", "Разработка и обслуживание платформы продаж для партнеров Orange, построенной на базе Spring MVC и " +
			"Oracle, что включает интеграцию новых функций, API, шаблонов печати и функций пользовательского интерфейса. " +
			"Разработка и сопровождение CRM, платформ для продажи билетов и отчетов на основе React.js (интерфейс), " +
			"загрузочных микросервисов Spring (бэкэнд), Keycloak для аутентификации и базы данных Oracle. В мои задачи " +
			"входят: определение и создание новых бизнес-потоков, разработка архитектуры приложений, интеграция с " +
			"внутренними и внешними API, импорт и экспорт данных, определение структуры DTO, отправка уведомлений по " +
			"событиям, отправляемых по электронной почте, разработка новых автоматически генерируемых отчетов, " +
			"отправляемых по электронной почте. Разработка и сопровождение новых REST API на платформах Spring Boot " +
			"и Node.js, Oracle, PostgreSQL и NoSQL DB для интеграции с внутренними и внешними платформами. Также с " +
			"использованием технологий Docker, git, GitLab, Hibernate, JPA, Thymeleaf, jQuery, Android SDK, " +
			"Google Cloud: хостинг, БД, функции, хранилище."],
		]),
	],
	["fullstackLabel",
		new Map<string, string>([
			["EN", "Full-stack developer"],
			["RO", "Dezvoltator full-stack"],
			["RU", "Full-stack разработчик"],
		]),
	],
	["supplyChainAnalystLabel",
		new Map<string, string>([
			["EN", "Supply Chain Analyst"],
			["RO", "Analist lanț aprovizionare"],
			["RU", "Аналитик цепочки поставок"],
		]),
	],
	["supplyChainAnalystBody",
		new Map<string, string>([
			["EN", "Product life status management in retail network.Make replenishment of products stocks in " +
			"retail network using VBA script developed by meMeet with suppliers to discuss performance metrics, " +
			"to provide performance feedback, or to discuss production forecasts or changeNegotiate prices and terms " +
			"with suppliers, vendors, or freight forwarders.Collaborate with other departments, such as procurement, " +
			"engineering, and quality assurance, to identify or qualify new suppliersAnalise products stock in " +
			"warehouse and shops and make new orders to supplier based on sales forecastDefine list of products " +
			"which should be packed by packaging teamReport obsolete products and inform other departmentsTrace " +
			"slow moving products in shops and make redistribution to top shops using automated report build on " +
			"VBA script.Update distribution rules for new products and products in offers Answer to tickets from " +
			"sellers related to devices and accessories stocks,entries or shortagesPrepare NDR and SOR KPIs report " +
			"of products stocks in shopsAnalise shipments and make improvements in distribution systemMonitor payment " +
			"to suppliers processTo take advantage of new technologies in fast changing market, I have been involved " +
			"in project with purpose of testing and implementation of machine learning in our job's tasks. The main " +
			"purpose is to improve results of our teams with help of data science and make our work more efficient. " +
			"Using theTensorFlow libraries I made a regression model that makes forecast of sales for future periods. " +
			"At the moment I got the result of 98% accuracy for total sales of handsets."],
			["RO", "Gestionarea stării de viață a produsului în rețeaua de vânzare cu amănuntul. Realizați stocurile " +
			"de produse în rețeaua de vânzare cu amănuntul utilizând scriptul VBA dezvoltat de mine Întâlniți-vă cu " +
			"furnizorii pentru a discuta măsurători de performanță, pentru a oferi feedback de performanță sau pentru " +
			"a discuta prognozele sau modificările producției Negociați prețurile și condițiile cu furnizorii, furnizorii " +
			"sau expeditorii de mărfuri .Colaborați cu alte departamente, cum ar fi achiziții, inginerie și asigurarea " +
			"calității, pentru a identifica sau califica furnizori noi. Analizați stocul de produse din depozite și " +
			"magazine și faceți comenzi noi pentru furnizor pe baza previziunilor de vânzări. Definiți lista produselor " +
			"care ar trebui să fie ambalate de echipa de ambalare. alte departamente Urmăriți produsele cu mișcare " +
			"lentă în magazine și faceți redistribuirea către magazinele de top folosind raportul automat bazat pe " +
			"scriptul VBA Actualizați regulile de distribuție pentru produsele și produsele noi în oferte Răspundeți " +
			"la biletele de la vânzători legate de stocuri, intrări sau lipsuri de dispozitive și accesorii Pregătiți " +
			"raportul NDR și SOR KPIs de produse stocuri în magazine Analizați livrările și faceți îmbunătățiri în " +
			"sistemul de distribuție Monitorizați procesul către plata furnizorilor Pentru a profita de noile tehnologii " +
			"pe piața în schimbare rapidă, am fost implicat în proiect cu scopul testării și implementării învățării " +
			"mașinilor în sarcinile jobului nostru. Scopul principal este de a îmbunătăți rezultatele echipelor noastre " +
			"cu ajutorul științei datelor și de a ne face munca mai eficientă. Folosind bibliotecile TensorFlow am " +
			"realizat un model de regresie care face prognoza vânzărilor pentru perioadele viitoare. În acest moment " +
			"am obținut rezultatul unei precizii de 98% pentru vânzările totale de telefoane."],
			["RU", "Управление статусом жизненного цикла продукта в розничной сети. Пополнение запасов продуктов в " +
			"розничной сети с помощью сценария VBA, разработанного мной. Встреча с поставщиками для обсуждения " +
			"показателей производительности, предоставления обратной связи по производительности, обсуждения " +
			"производственных прогнозов или изменений. Согласование цен и условий с поставщиками, продавцами или " +
			"экспедиторами. .Сотрудничать с другими отделами, такими как отдел закупок, инжиниринга и обеспечения " +
			"качества, для выявления или квалификации новых поставщиков Анализировать товарные запасы на складе и в " +
			"магазинах и делать новые заказы поставщику на основе прогноза продаж Определить список продуктов, которые " +
			"должны быть упакованы командой по упаковке Отчет об устаревших товарах и информирование другие отделы " +
			"Отслеживайте медленно движущиеся товары в магазинах и распространяйте их в лучшие магазины, используя " +
			"автоматизированный отчет, построенный на скрипте VBA. Обновляйте правила распространения для новых продуктов " +
			"и продуктов в предложениях. продуктов складские запасы в магазинах Анализируйте поставки и улучшайте " +
			"систему распределения Мониторинг процесса оплаты поставщикам Чтобы воспользоваться преимуществами новых " +
			"технологий на быстро меняющемся рынке, я был вовлечен в проект с целью тестирования и внедрения машинного " +
			"обучения в наши рабочие задачи. Основная цель - улучшить результаты наших команд с помощью науки о данных и " +
			"сделать нашу работу более эффективной. Используя библиотекиTensorFlow, я создал регрессионную модель, " +
			"которая делает прогноз продаж на будущие периоды. На данный момент я получил результат 98% точности по " +
			"общему объему продаж телефонов."],
		]),
	],
	["androidDeveloperLabel",
		new Map<string, string>([
			["EN", "Android developer"],
			["RO", "Android developer"],
			["RU", "Android developer"],
		]),
	],
	["androidDeveloperBody",
		new Map<string, string>([
			["EN", "Started as a hobby, it became my passion. I like a lot mobile phones and all " +
			"they can offer to people as everyday assistant. That's why I want to develop " +
			"apps and games that will make people's life easier and interesting. " +
			"So far I published two games on Play Market: " +
			"https://play.google.com/store/apps/details?id=com.solonari.igor.mapshooter " +
			"https://play.google.com/store/apps/details?id=com.solonari.igor.foodscore " +
			"The source code can be found here: " +
			"https://github.com/igorriok/map-shooter " +
			"https://github.com/igorriok/Foodscore " +
			"And for the Map-Shooter game I developed a server on Java that connects " +
			"all the players in real time from all around the globe on real map. It's " +
			"also integrates a SQLite database to store all the users and their points. " +
			"Authentication is made with Google OAuth 2.0. All the details you can find " +
			"here: " +
			"https://github.com/igorriok/JavaServer"],
			["RO", "Început ca un hobby, a devenit pasiunea mea. Îmi plac mult telefoanele mobile și tot ce pot " +
			"oferi oamenilor ca asistent de zi cu zi. De aceea vreau să dezvolt aplicații și jocuri care să facă " +
			"viața oamenilor mai ușoară și mai interesantă. Până acum am publicat două jocuri pe Play Market: " +
			"https://play.google.com/store/apps/detailsid=com.solonari.igor.mapshooter " +
			"https://play.google.com/store/apps/details?id = com.solonari.igor.foodscore " +
			"Codul sursă poate fi găsit aici: " +
			"https://github.com/igorriok/map-shooter https://github.com/igorriok/Foodscore " +
			"Și pentru jocul Map-Shooter am dezvoltat un server pe Java care conectează toți jucătorii în timp real " +
			"de pe tot globul pe o hartă reală. De asemenea, integrează o bază de date SQLite pentru a stoca toți " +
			"utilizatorii și punctele lor. Autentificarea se face cu Google OAuth 2.0. Toate detaliile le puteți găsi aici: " +
			"https://github.com/igorriok/JavaServer"],
			["RU", "Начав как хобби, это стало моей страстью. Мне нравятся многие мобильные телефоны и все, " +
			"что они могут предложить людям в качестве повседневных помощников. Вот почему я хочу разрабатывать " +
			"приложения и игры, которые сделают жизнь людей проще и интереснее. Пока что я опубликовал две игры в " +
			"Play Market: " +
			"https://play.google.com/store/apps/detailsid=com.solonari.igor.mapshooter " +
			"https://play.google.com/store/apps/details?id = com.solonari.igor.foodscore " +
			"Исходный код можно найти здесь: " +
			"https://github.com/igorriok/map-shooter https://github.com/igorriok/Foodscore " +
			"А для игры Map-Shooter я разработал сервер на Java, который соединяет всех игроков в реальном времени " +
			"со всего мира на реальной карте. Он также интегрирует базу данных SQLite для хранения всех пользователей " +
			"и их баллов. Аутентификация производится с помощью Google OAuth 2.0. Все подробности вы можете найти здесь: " +
			"https://github.com/igorriok/JavaServer"],
		]),
	],
]);
