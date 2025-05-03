// ==============================================
// ================= 1-masala ==================
// ==============================================
// Ibrohimjon kosmosdagi robotiga maxfiy kod yubormoqchi! рџљЂ
// U eval() yordamida "5 + 3 * 2" kabi matematik ifodani hisoblamoqchi.
// Input: const secretCode = "5 + 3 * 2";
// Output: 11
export function calculateSecretCode(code) {
  return eval(code);
}

// ==============================================
// ================= 2-masala ==================
// ==============================================
// Zafarjon oвЂzining super kompyuteriga maвЂ™lumotlarni kiritdi! рџ’ѕ
// U Object.keys() yordamida faqat kalitlarni olishni xohlaydi.
// Input: const data = { name: "Zafarjon", age: 20, hobby: "coding" };
// Output: ["name", "age", "hobby"]
export function getComputerKeys(data) {
  return Object.keys(data)
}

// ==============================================
// ================= 3-masala ==================
// ==============================================
// NeвЂmatjon kafe menyusini tuzmoqchi! в•
// U Object.values() yordamida faqat narxlarni olishni xohlaydi.
// Input: const menu = { coffee: 15000, tea: 10000, cake: 25000 };
// Output: [15000, 10000, 25000]
export function getMenuPrices(menu) {
  return Object.values(menu)
}

// ==============================================
// ================= 4-masala ==================
// ==============================================
// Hamidulloh oвЂzining super qahramon jamoasini roвЂyxatdan oвЂtkazmoqchi! рџ¦ё
// U Object.entries() yordamida ismlar va rollarni juftlik sifatida olishni xohlaydi.
// Input: const team = { leader: "Hamidulloh", hacker: "Shohrux" };
// Output: [["leader", "Hamidulloh"], ["hacker", "Shohrux"]]
export function getTeamRoles(team) {
  return Object.entries(team)
}

// ==============================================
// ================= 5-masala ==================
// ==============================================
// Shohrux maxfiy xabar yubormoqchi, lekin uni boвЂlaklarga boвЂlmoqchi! вњ‚пёЏ
// U split("", 3) yordamida xabarni 3 ta belgigacha boвЂlib olmoqchi.
// Input: const message = "salomdunyo";
// Output: ["s", "a", "l"]
export function splitSecretMessage(message) {
  return message.split("", 3)
}

// ==============================================
// ================= 6-masala ==================
// ==============================================
// Abubakr kosmos kemasida vaqtni boshqarmoqchi! вЏІпёЏ
// U setTimeout() yordamida 2 soniyadan soвЂng "Launch!" deb xabar chiqarmoqchi.
// Input: const delay = 2000;
// Output: 2 soniyadan soвЂng "Launch!" konsolda chiqadi
export function launchSpaceship(delay) {
  setTimeout(() => {
    console.log("Launch!");
  }, delay);
}

// ==============================================
// ================= 7-masala ==================
// ==============================================
// Muhammadhasan robot soatini sinab koвЂrmoqchi! вЏ°
// U setInterval() yordamida har 1 soniyada "Tik-tak" chiqarmoqchi.
// Input: const interval = 1000;
// Output: Har 1 soniyada "Tik-tak" konsolda chiqadi
export function startRobotClock(interval) {
  // setInterval() dan foydalaning
}

// ==============================================
// ================= 8-masala ==================
// ==============================================
// Hayitali oвЂzining kosmik roвЂyxatini tekislamoqchi! рџ“њ
// U flat() yordamida [[1, 2], [3, [4, 5]]] roвЂyxatni tekislaydi.
// Input: const nestedList = [[1, 2], [3, [4, 5]]];
// Output: [1, 2, 3, 4, 5]
export function flattenList(nestedList) {
  // flat() dan foydalaning
}

// ==============================================
// ================= 9-masala ==================
// ==============================================
// AbdulmoвЂmin maxfiy maвЂ™lumotlar bazasini qayta tuzmoqchi! рџ—„пёЏ
// U Object.fromEntries() yordamida [["name", "AbdulmoвЂmin"], ["role", "hacker"]] dan obвЂ™ekt yaratadi.
// Input: const entries = [["name", "AbdulmoвЂmin"], ["role", "hacker"]];
// Output: { name: "AbdulmoвЂmin", role: "hacker" }
export function createDatabase(entries) {
  // Object.fromEntries() dan foydalaning
}

// ==============================================
// ================= 10-masala ==================
// ==============================================
// Asilbek oвЂzining super xabarlar roвЂyxatini tekislamoqchi! рџ“©
// U flatMap() yordamida ["hello", "world"] ni har bir soвЂz uchun alohida harflarga aylantiradi.
// Input: const words = ["hello", "world"];
// Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
export function flattenWords(words) {
  // flatMap() dan foydalaning
}

// ==============================================
// ================= 11-masala ==================
// ==============================================
// Dostonbek kosmik kalkulyator yasamoqchi! рџ§®
// U eval() yordamida "10 - 4 * 2" kabi ifodani hisoblaydi.
// Input: const calc = "10 - 4 * 2";
// Output: 2
export function cosmicCalculator(calc) {
  // eval() dan foydalaning
}

// ==============================================
// ================= 12-masala ==================
// ==============================================
// Azizbek oвЂzining maxfiy jurnalini ochmoqchi! рџ““
// U Object.keys() yordamida jurnalning barcha yozuv kalitlarini oladi.
// Input: const journal = { day1: "Met a robot", day2: "Flew to Mars" };
// Output: ["day1", "day2"]
export function getJournalKeys(journal) {
  // Object.keys() dan foydalaning
}

// ==============================================
// ================= 13-masala ==================
// ==============================================
// Ibrohimjon oвЂzining kosmik xarajatlarini hisoblamoqchi! рџ’ё
// U Object.values() yordamida faqat xarajat summalarini oladi.
// Input: const expenses = { fuel: 5000, food: 3000 };
// Output: [5000, 3000]
export function getExpenses(expenses) {
  // Object.values() dan foydalaning
}

// ==============================================
// ================= 14-masala ==================
// ==============================================
// Zafarjon maxfiy jamoa roвЂyxatini tuzmoqchi! рџ•µпёЏ
// U Object.entries() yordamida ismlar va vazifalarni juftlik sifatida oladi.
// Input: const squad = { captain: "Zafarjon", navigator: "Asilbek" };
// Output: [["captain", "Zafarjon"], ["navigator", "Asilbek"]]
export function getSquadRoles(squad) {
  // Object.entries() dan foydalaning
}

// ==============================================
// ================= 15-masala ==================
// ==============================================
// NeвЂmatjon oвЂzining kosmik xabarini boвЂlaklarga boвЂlmoqchi! рџ“Ў
// U split("", 5) yordamida xabarni 5 ta belgigacha boвЂlib oladi.
// Input: const signal = "koinot123";
// Output: ["k", "o", "i", "n", "o"]
export function splitCosmicSignal(signal) {
  // split("", 5) dan foydalaning
}

// ==============================================
// ================= 16-masala ==================
// ==============================================
// Hamidulloh robotiga 3 soniyadan soвЂng salom yubormoqchi! рџ¤–
// U setTimeout() yordamida "Hello, Robot!" xabarini chiqaradi.
// Input: const delay = 3000;
// Output: 3 soniyadan soвЂng "Hello, Robot!" konsolda chiqadi
export function greetRobot(delay) {
  // setTimeout() dan foydalaning
}

// ==============================================
// ================= 17-masala ==================
// ==============================================
// Shohrux oвЂzining kosmik signalini har 2 soniyada yubormoqchi! рџ“¶
// U setInterval() yordamida "Signal sent!" xabarini chiqaradi.
// Input: const interval = 2000;
// Output: Har 2 soniyada "Signal sent!" konsolda chiqadi
export function sendCosmicSignal(interval) {
  // setInterval() dan foydalaning
}

// ==============================================
// ================= 18-masala ==================
// ==============================================
// Abubakr oвЂzining maxfiy roвЂyxatini tekislamoqchi! рџ—’пёЏ
// U flat() yordamida [[1, [2, 3]], [4]] roвЂyxatni tekislaydi.
// Input: const secretList = [[1, [2, 3]], [4]];
// Output: [1, 2, 3, 4]
export function flattenSecretList(secretList) {
  // flat() dan foydalaning
}

// ==============================================
// ================= 19-masala ==================
// ==============================================
// Muhammadhasan maxfiy obвЂ™ekt yaratmoqchi! рџ”’
// U Object.fromEntries() yordamida [["id", 1], ["name", "Muhammadhasan"]] dan obвЂ™ekt yasaydi.
// Input: const data = [["id", 1], ["name", "Muhammadhasan"]];
// Output: { id: 1, name: "Muhammadhasan" }
export function createSecretObject(data) {
  // Object.fromEntries() dan foydalaning
}

// ==============================================
// ================= 20-masala ==================
// ==============================================
// Hayitali oвЂzining kosmik soвЂzlar roвЂyxatini tekislamoqchi! рџЊЊ
// U flatMap() yordamida ["star", "moon"] ni har bir soвЂz uchun alohida harflarga aylantiradi.
// Input: const cosmicWords = ["star", "moon"];
// Output: ["s", "t", "a", "r", "m", "o", "o", "n"]
export function flattenCosmicWords(cosmicWords) {
  // flatMap() dan foydalaning
}
