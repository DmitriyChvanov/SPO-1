## ЭФБО 03 22
## Создание програмного обеспечения 4 семестр 1 работа

**Тема:** Создание интернет магазина одежды

**Описание:** Целью проекта является создание веб приложения интернет-магазина одежды, которое предоставляет пользователю удобный способ закупиться одеждой онлайн.

**Команда:**

         Чванов - тим лид
         Быков - бэк 
         Ендолов - тестировщик
         Кудрявцев - фронт
         Липорт - аналитик 
         Стоянов - фронт
         Щёрс - бэк

**Дизайн макет:** https://clck.ru/393G5W

ЭФБО 03-22 Команда №5
Создание программного обеспечения
Интернет-магазин одежды
Введение
Основная идея проекта: Создание инновационного интернет-магазина одежды, предоставляющего пользователям уникальную возможность удобной и стильной покупки модной одежды. На нашей платформе клиенты смогут легко находить, выбирать и заказывать одежду, соответствующую их индивидуальным предпочтениям и требованиям.
Проблемы, которые решает проект:
⦁	Неудобство при выборе одежды: Обеспечение эффективного инструмента для поиска моделей, соответствующих стилю и предпочтениям пользователя.
⦁	Организация процесса покупки: Повышение удобства клиентов на этапах заказа, оплаты и получения одежды.
⦁	Недостаток информации: Предоставление подробных описаний каждого товара, включая размеры, материалы, цены и условия доставки.
Целевая аудитория:
⦁	Молодежь: Активные потребители моды, стремящиеся подчеркнуть свой стиль и индивидуальность через одежду.
⦁	Трендсеттеры: Люди, следящие за последними тенденциями моды и ищущие уникальные предметы гардероба.
⦁	Занятые люди: Те, кто ценит свое время и предпочитает удобный онлайн-шопинг.
Задачи, которые должны решаться в проекте:
Разработка и дизайн веб-сайта: Создание привлекательного и интуитивно понятного интерфейса для удовлетворения потребностей пользователей.
Управление каталогом товаров: Организация информации о наличии, размерах, цене предлагаемой одежды.
Система заказов: Реализация эффективной системы для оформления заказов с учетом различных параметров, включая опции доставки и оплаты.
Ключевой целью является создание современного и эффективного онлайн-магазина, способного удовлетворять потребности целевой аудитории и обеспечивать приятный опыт онлайн шопинга.
Литература
Интеграция современных технологий в дизайне интерфейсов и разработке макетов является ключевым аспектом успешного создания онлайн-магазина. В литературе, посвященной проектированию интерфейсов, можно выделить несколько важных тем:
⦁	"Основы дизайна пользовательских интерфейсов" (Алан Купер) - Эта книга предоставляет фундаментальные принципы дизайна интерфейсов, помогая создавать удобные и интуитивно понятные пользовательские интерфейсы.
⦁	"Интерфейс: Новый взгляд на дизайн" (Дженнифер Тидвелл) - Рассматривает современные тренды в дизайне интерфейсов, включая адаптивный и мобильный дизайн.

Методология

Для этого проекта мы выбрали методологию Scrum, она является самым подходящим решением для создания проекта в сжатые сроки. Scrum позволяет быстро реагировать на изменения и требования, которые могут возникнуть в процессе разработки. Мы можем легко вносить коррективы и адаптироваться к новой информации. спринты у нас длятся по 1 неделе (от пары до пары), благодаря этому мы можем получать фидбэк. 
Создание макета
При переходе на сайт нас встречает главная страница:
 
Страница входа в аккаунт:
 
Корзина:
 

Страница с выбранной категорией:
 
Компоненты для разных ситуаций в шапке:

Mansware
 


Womensware
 



Сравнительный анализ инструментов
Мы выбирали технологический стек для нашего передового интернет-магазина, изучив множество баз данных и фреймворков. При выборе мы руководствовались потребностями проекта. В результате подробного сравнения мы остановились на PostgreSQL, Express, Node.js и React.
PostgreSQL: 
⦁	Надежность и производительность: PostgreSQL отличается надежностью и производительностью, что необходимо для эффективной системы каталогов и быстрой обработки запросов.
⦁	Работа со сложными запросами: PostgreSQL обеспечивает надежную работу со сложными запросами, гарантируя бесперебойное управление данными о 
наличии, размерах и ценах на вашу линию одежды.
Express: 
⦁	Легкость и гибкость: Express предлагает простое и гибкое решение. Он позволяет легко настроить серверную часть нашего приложения. Это особенно удобно для эффективной работы с системами заказов и базами данных.
⦁	Поддержка: Express может похвастаться широким сообществом разработчиков. Они всегда готовы прийти на помощь и так же предоставляют несколько модулей и плагинов.
Node.js:
⦁	Использование одного языка: С помощью Node.js мы можем использовать всего один язык программирования (JavaScript) для работы с клиентом и сервером. Это упрощает взаимодействие фронт- и бэкенда. Это снижает количество ошибок и ускоряет прогресс.
⦁	Асинхронная работа: Node.js позволяет нам обрабатывать запросы асинхронно. Это очень важно для бесперебойного взаимодействия с клиентами, особенно при оформлении заказа или оплате.
React:
⦁	Компонентный подход: React обеспечивает компонентный подход к разработке интерфейса, что позволяет нам создавать модульные и легко поддерживаемые пользовательские интерфейсы.
⦁	Виртуальный DOM: Использование виртуального DOM улучшает производительность интерфейса, что особенно важно для создания ресурсоэффективного и отзывчивого онлайн-магазина.
Выбор этого технологического стека обеспечивает нам не только эффективное управление данными и серверной логикой, но также обеспечивает высокую производительность и отзывчивость пользовательского интерфейса – все важные аспекты успешного создания и поддержки онлайн-магазина.


Пользовательское тестирование

Выводы
В ходе выполнения данной практической работы по созданию инновационного интернет-магазина, мы сосредоточились на разработке уникальной платформы, способной предоставить пользователям удобный и стильный опыт покупок модной одежды. Цели и задачи, определенные в начале проекта, были успешно достигнуты, а результаты работы могут быть обобщены следующим образом:
Проектирование и дизайн веб-сайта:
⦁	Был разработан привлекательный и интуитивно понятный интерфейс, соответствующий потребностям целевой аудитории.
⦁	Осуществлено эффективное управление каталогом товаров, обеспечивающее удобство выбора и заказа моделей.
База данных и серверная часть:
⦁	Выбранный технологический стек (PostgreSQL, Express, Node.js) обеспечил высокую производительность, гибкость и единообразность разработки.
Пользовательское тестирование:
⦁	Описание и проведение тестирования макетов среди пользователей позволило получить ценные обратные связи и внести соответствующие улучшения.
Сравнительный анализ инструментов:
⦁	Проведен анализ различных инструментов для создания макетов и проектирования интерфейсов, что обеспечило основательное основание для выбора оптимального инструментария.
Обобщая вышеизложенное, ключевой целью было создание современного и эффективного онлайн-магазина, удовлетворяющего потребности целевой аудитории. Выбранный технологический стек и подходы к проектированию интерфейсов, вместе с результатами пользовательского тестирования, подтверждают успешное достижение этой цели. Полученный опыт и знания могут служить основой для дальнейшего развития и улучшения платформы в соответствии с изменяющимися требованиями рынка и ожиданиями пользователей.


Список использованных источников
⦁	Купер А., Рейман Р., Кронин Д.
Алан Купер об интерфейсе. Основы проектирования взаимодействия. – Пер.
с англ. – СПб.: Символ ‘Плюс, 2009. – 688 с.
⦁	Тидвелл, Дженифер. Разработка интерфейсов: паттерны проектирования : пер. с англ. / Дженифер Тидвелл, Чарли Брюэр, Эйнн Валенсия ; [перевел с английского С. Черников]. – [3-е изд.]. – Санкт-Петербург [и др.] : Питер, 2022. – 555, [2] с.
⦁	PostgreSQL vs MySQL — что выбрать? // GetInSky URL: https://gitinsky.com/porstgree-vs-mysql
⦁	Express.js, Koa.js и Fastify / Хабр //  Habr URL: https://habr.com/ru/companies/otus/articles/737228/

