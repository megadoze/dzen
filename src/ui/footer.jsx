import { Link } from "react-router";
import pattern from "../assets/patternpad.svg";

const Footer = () => {
  return (
    <footer className=" relative mt-20">
      <img src={pattern} alt="tachki" className=" absolute bottom-0 left-0 right-0" />
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-10 text-gray-600 z-[50] relative mb-5">
        <div className="text-sm text-gray-800">
          <h5 className="font-bold mb-3">АРЕНДОВАТЬ АВТО</h5>
          <ul className="space-y-2">
            <li>
              <Link to="/howtorent">Как арендовать авто</Link>
            </li>
            <li>
              <Link to="/rentforuser">Условия аренды</Link>
            </li>
            <li>
              <Link to="/payforuser">Оплата и возврат средств</Link>
            </li>
            <li>
              <Link to="/inssuranceforuser">Условия страхования</Link>
            </li>
            <li>
              <Link to="/faquser">Частые вопросы</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-800">
          <h5 className="font-bold mb-3">СДАТЬ АВТО</h5>
          <ul className=" space-y-2">
            <li>
              <Link to="/howtooffer">Как сдать авто</Link>
            </li>
            <li>
              <Link to="/rentforhost">Условия сдачи авто</Link>
            </li>
            <li>
              <Link to="/inssuranceforhost">Условия страхования</Link>
            </li>
            <li>
              <Link to="/faqhost">Частые вопросы</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-800">
          <h5 className="font-bold mb-3">КАТЕГОРИИ АВТО</h5>
          <ul className=" space-y-2">
            <li>
              <Link to="/car">Легковые</Link>
            </li>
            <li>
              <Link to="/suv">Внедорожники</Link>
            </li>
            <li>
              <Link to="/sport">Спортивные</Link>
            </li>
            <li>
              <Link to="/electro">Электромобили</Link>
            </li>
            <li>
              <Link to="/pickup">Пикапы</Link>
            </li>
            <li>
              <Link to="/vip">VIP</Link>
            </li>
            <li>
              <Link to="/bus">Микроавтобусы</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-800">
          <h5 className="font-bold mb-3">ТАЧКИ</h5>
          <ul className=" space-y-2">
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/politics">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link to="/rules">Условия сервиса</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
