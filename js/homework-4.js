/* Homework №4

* Частина №1
Створити скрипт яки повинен виконувати наступне:
запитати у користувача рік народження;
запитати в нього, в якому місті він живе;
запитати його улюблений вид спорту.
При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
його вік;
якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

Частина №2
Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
Все це має бути відображено в одному вікні (алерті).
Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
* */
const getChampionName = (sport) => {
  switch (sport) {
    case "футбол":
      return "Круто! Хочеш стати як Лео Мессі?";
    case "теніс":
      return "Круто! Хочеш стати як Новак Джокович?";
    case "баскетбол":
      return "Круто! Хочеш стати як Леброн Джеймс?";
    default:
      return "";
  }
}
const getCountryName = (capital) => {
  switch (capital) {
    case "Київ":
      return "Ти живеш у столиці України!\n";
    case "Вашингтон":
      return "Ти живеш у столиці США!\n";
    case "Лондон":
      return "Ти живеш у столиці Великобританії!\n";
    default:
      return `Ти живеш у місті ${capital}!\n`;
  }
}
const homeWork4 = () => {
  const birthYear = prompt("Введіть ваш рік народження:");
  if (!birthYear) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
  }
  const city = prompt("Введіть ваше місто проживання:");
  if (!city)
    alert("Шкода, що Ви не захотіли ввести своє місто.");
  const sport = prompt("Введіть ваш улюблений вид спорту (футбол, теніс, баскетбол):");
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(birthYear);

  let message = '';
  if (birthYear) {
    message += !isNaN(age) ? `Ваш вік: ${age} \n` : '';
  }else {
    message += 'Ви не захотіли ввести свій рік народження\n'
  }
  message += !city ? 'Ви не захотіли ввести своє місто\n' : getCountryName(city);

  message += getChampionName(sport);

  return alert(message);
}

homeWork4();
