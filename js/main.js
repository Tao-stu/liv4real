// 字母数据
const letters = [];
for (let i = 1; i <= 24; i++) {
  letters.push({
    num: i,
    src: `img/${i}.png`
  });
}

// 渲染字母网格
function renderLetterGrid() {
  const grid = document.getElementById('letterGrid');
  if (!grid) return;

  grid.innerHTML = letters.map(letter => `
    <div class="letter-card" data-num="${letter.num}">
      <img src="${letter.src}" alt="字母 ${letter.num}" loading="lazy">
      <span class="letter-num">第 ${letter.num} 个字母</span>
    </div>
  `).join('');

  // 绑定点击事件
  document.querySelectorAll('.letter-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(parseInt(card.dataset.num));
    });
  });
}

// 打开弹窗
function openModal(num) {
  const modal = document.getElementById('letterModal');
  const content = modal.querySelector('.modal-content');

  const letter = letters.find(l => l.num === num);

  content.innerHTML = `
    <span class="modal-close">&times;</span>
    <img src="${letter.src}" alt="字母 ${num}">
    <h3>第 ${num} 个字母</h3>
    <p>点击字母学习更多内容</p>
  `;

  modal.classList.add('show');

  // 关闭弹窗事件
  content.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

// 关闭弹窗
function closeModal() {
  document.getElementById('letterModal').classList.remove('show');
}

// 键盘 ESC 关闭弹窗
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderLetterGrid();
});
