// 自动生成索引地址（GitHub Actions 输出）
const INDEX_URL = 'release.json';

fetch(INDEX_URL)
  .then(r => r.json())
  .then(files => {
    const ul = document.getElementById('file-list');
    ul.innerHTML = '';
    files.forEach(f => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="filename">${f.name}</span>
        <span class="size">${prettyBytes(f.size)}</span>
        <a class="download" href="${f.url}" download>下载</a>
      `;
      ul.appendChild(li);
    });
  })
  .catch(() => {
    document.getElementById('file-list').innerHTML =
      '<li>暂无文件或索引未生成，请稍后再试。</li>';
  });

function prettyBytes(num) {
  if (num < 1024) return num + ' B';
  const units = ['KB', 'MB', 'GB'];
  let u = -1;
  do { num /= 1024; u++; } while (num >= 1024 && u < units.length - 1);
  return num.toFixed(1) + ' ' + units[u];
}
