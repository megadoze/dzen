const MainPage = () => {
  return (
    <main>
      <section className="mt-5">
        <div className=" grid grid-cols-1 md:grid-cols-3 mt-5 pl-4 ">
          <div className=" col-span-2 text-slate-800">
            <h1 className="col-span-2 text-left font-semibold text-2xl text-slate-600">
              Новости
            </h1>
            <ul className=" text-left flex flex-col gap-2 mt-5 text-lg pr-10">
              <li className="flex">
                <span className=" pr-3">11:24</span>В НАТО планують посилити
                присутність в Україні наступного року
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>
                Енергетична компанія закликає НКРЕКП скасувати граничні ціни на
                енергоринку для інтеграції з ЄС
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>Усик зустрівся з
                українськими ветеранами перед боєм
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>
                Бронь і частина послуг у "Дії" недоступні. Що відомо про
                масштабну кібератаку на Україну
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>
                Екс-акціонер "Привату" звернувся до Зеленського з проханням
                передати порт "Боріваж" до АРМА
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>Нардеп Дубінський програв
                апеляцію у справі про корупцію
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>НБУ пом’якшив низку валютних
                обмежень
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>
                Адміністрація Байдена готує пакет військової допомоги Україні на
                1,2 млрд доларів, - Reuters
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>В Україні з'явиться новий
                пам'ятний день: що пропонують у Верховній Раді
              </li>
              <li className="flex">
                <span className=" pr-3">11:24</span>
                Вдову Кузьми Скрябіна "кинули" на гроші: поліція оголосила
                підозру директору Moon Records
              </li>
            </ul>
          </div>
          <article className=" mt-10 md:mt-0">
            <h1 className="col-span-2 text-left font-semibold text-2xl text-slate-600">
              Темы
            </h1>
            <div className="flex flex-col border border-gray-300 rounded-3xl mt-5">
              <img
                src="/src/assets/articles/scale_1300.jpeg"
                alt=""
                className=" rounded-t-3xl object-cover h-48 w-full"
              />
              <div className=" p-4">
                <h3 className=" text-left font-semibold text-lg">
                  Джейсон Стетхем - последний киногерой, настоящая история
                  карьеры актёра
                </h3>
                <p className=" text-left text-lg text-zinc-600">
                  Джейсон Стэйтем не собирался связывать свою жизнь с
                  кинематографом
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="articles" className="mt-10">
        <h1 className=" text-left font-semibold text-2xl pl-4 text-slate-600">
          Статьи
        </h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 mt-5 pl-4 gap-4 ">
          <div className="flex flex-col border border-gray-300 rounded-3xl ">
            <img
              src="/src/assets/articles/scale_1200.jpeg"
              alt=""
              className=" rounded-t-3xl object-cover h-48 w-full"
            />
            <div className=" p-4">
              <h3 className=" text-left font-semibold text-lg">
                Джейсон Стетхем - последний киногерой, настоящая история карьеры
                актёра
              </h3>
              <p className=" text-left text-lg text-zinc-600">
                Джейсон Стэйтем не собирался связывать свою жизнь с
                кинематографом
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 rounded-3xl ">
            <img
              src="/src/assets/articles/scale_1200.jpeg"
              alt=""
              className=" rounded-t-3xl object-cover h-48 w-full"
            />
            <div className=" p-4">
              <h3 className=" text-left font-semibold text-lg">
                Джейсон Стетхем - последний киногерой, настоящая история карьеры
                актёра
              </h3>
              <p className=" text-left text-lg text-zinc-600">
                Джейсон Стэйтем не собирался связывать свою жизнь с
                кинематографом
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 rounded-3xl ">
            <img
              src="/src/assets/articles/scale_1200.jpeg"
              alt=""
              className=" rounded-t-3xl object-cover h-48 w-full"
            />
            <div className=" p-4">
              <h3 className=" text-left font-semibold text-lg">
                Джейсон Стетхем - последний киногерой, настоящая история карьеры
                актёра
              </h3>
              <p className=" text-left text-lg text-zinc-600">
                Джейсон Стэйтем не собирался связывать свою жизнь с
                кинематографом
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 rounded-3xl ">
            <img
              src="/src/assets/articles/scale_1200.jpeg"
              alt=""
              className=" rounded-t-3xl object-cover h-48 w-full"
            />
            <div className=" p-4">
              <h3 className=" text-left font-semibold text-lg">
                Джейсон Стетхем - последний киногерой, настоящая история карьеры
                актёра
              </h3>
              <p className=" text-left text-lg text-zinc-600">
                Джейсон Стэйтем не собирался связывать свою жизнь с
                кинематографом
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 rounded-3xl ">
            <img
              src="/src/assets/articles/scale_1200.jpeg"
              alt=""
              className=" rounded-t-3xl object-cover h-48 w-full"
            />
            <div className=" p-4">
              <h3 className=" text-left font-semibold text-lg">
                Джейсон Стетхем - последний киногерой, настоящая история карьеры
                актёра
              </h3>
              <p className=" text-left text-lg text-zinc-600">
                Джейсон Стэйтем не собирался связывать свою жизнь с
                кинематографом
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 rounded-3xl ">
            <img
              src="/src/assets/articles/scale_1200.jpeg"
              alt=""
              className=" rounded-t-3xl object-cover h-48 w-full"
            />
            <div className=" p-4">
              <h3 className=" text-left font-semibold text-lg">
                Джейсон Стетхем - последний киногерой, настоящая история карьеры
                актёра
              </h3>
              <p className=" text-left text-lg text-zinc-600">
                Джейсон Стэйтем не собирался связывать свою жизнь с
                кинематографом
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
