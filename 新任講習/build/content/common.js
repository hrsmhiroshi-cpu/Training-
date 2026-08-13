'use strict';
// 全時限で共通に使う値
const META_JA = '2026年◯月◯日　施設警備 新任教育　コーポレートセキュリティ';
const META_EN = 'New-Hire Training, Facility Security / Corporate Security';

// 時程（8:00開始・7時限・16:20終了）。Day1・Day2 とも同一。
const SLOTS = ['08:00 – 09:00', '09:05 – 10:05', '10:15 – 11:15', '11:20 – 12:20',
               '13:05 – 14:05', '14:15 – 15:15', '15:20 – 16:20'];
const slot = (n) => SLOTS[(n - 1) % 7];

const SRC = {
  basic: '警備業法、警察庁「警備員教育」',
  law:   '警備業法、刑法、刑事訴訟法、警察官職務執行法',
  info:  '個人情報保護法、不正競争防止法、経済産業省「営業秘密管理指針」',
  hist:  '警備業法（昭和47年法律第117号）、全国警備業協会 業界沿革資料',
  emg:   '消防法、総務省消防庁、警察庁「警備員教育」',
  fac:   '警備業法、警察庁「警備員教育」、全国警備業協会 教育教材',
};

module.exports = { META_JA, META_EN, SRC, slot };
