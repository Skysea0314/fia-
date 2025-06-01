document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 兼容顶部desc-more按钮跳转
const moreBtn = document.querySelector('.desc-more');
if (moreBtn) {
  moreBtn.addEventListener('click', function() {
    const target = document.getElementById('brief');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

// 代表作品横向滑动按钮（每次滑动4个）
let worksIndex = 0;
function scrollWorks(dir) {
  const list = document.getElementById('worksList');
  if (!list) return;
  const itemWidth = 80 + 18; // 图片宽+gap
  const visibleCount = 4;
  const total = list.children.length;
  const maxIndex = Math.max(0, total - visibleCount);
  worksIndex += dir * visibleCount;
  if (worksIndex < 0) worksIndex = 0;
  if (worksIndex > maxIndex) worksIndex = maxIndex;
  list.scrollTo({ left: worksIndex * itemWidth, behavior: 'smooth' });
}
