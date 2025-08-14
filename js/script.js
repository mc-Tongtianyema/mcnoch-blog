/* 平滑滚动：点击导航锚点时顺滑滚动 */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.hash);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* 可选：在页脚显示“最后更新时间” */
fetch('https://api.github.com/repos/mc-tongtianyema/mcnoch-blog/commits?per_page=1')
  .then(r => r.json())
  .then(data => {
    const last = data[0]?.commit?.committer?.date;
    if (last) {
      const span = document.createElement('span');
      span.textContent = ` · 最后更新 ${new Date(last).toLocaleDateString()}`;
      document.querySelector('footer p').appendChild(span);
    }
  })
  .catch(() => { /* 网络失败时静默 */ });
