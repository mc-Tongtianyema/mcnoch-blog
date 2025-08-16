<?php
/* =============== 配置 =============== */
$padLength   = 3;          // 文件名位数，例如 3 => 001.html
$articleDir  = __DIR__;    // 生成 html 的目录，默认当前目录
$tplPath     = __DIR__ . '/article_tpl.php';  // 单篇文章模板

/* 如果模板不存在就自动生成一个简单模板 */
if (!file_exists($tplPath)) {
    file_put_contents($tplPath, <<<TPL
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
        body{max-width:800px;margin:40px auto;padding:0 20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC",sans-serif;line-height:1.7;color:#222}
        h1{margin-bottom:.3em}
        .meta{font-size:.9em;color:#666;margin-bottom:2em}
    </style>
</head>
<body>
    <h1>{{title}}</h1>
    <div class="meta">
        作者：{{author}} &nbsp;·&nbsp;
        时间：{{date}}
    </div>
    <div>{{content}}</div>
</body>
</html>
TPL);
}

/* =============== 工具函数 =============== */
function nextSequence(string $dir, int $pad): string
{
    $max = 0;
    foreach (scandir($dir) ?: [] as $f) {
        if (preg_match('/^(\d+)\.html$/', $f, $m)) {
            $max = max($max, (int)$m[1]);
        }
    }
    return str_pad($max + 1, $pad, '0', STR_PAD_LEFT);
}

/* =============== 处理提交 =============== */
$msg = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title   = trim($_POST['title']   ?? '');
    $author  = trim($_POST['author']  ?? '匿名');
    $content = trim($_POST['content'] ?? '');

    if ($title === '' || $content === '') {
        $msg = '标题和正文不能为空！';
    } else {
        $seq  = nextSequence($articleDir, $padLength);
        $file = $articleDir . "/{$seq}.html";

        // 读取模板并替换变量
        $tpl = file_get_contents($tplPath);
        $html = str_replace(
            ['{{title}}', '{{author}}', '{{date}}', '{{content}}'],
            [
                htmlspecialchars($title,   ENT_QUOTES, 'UTF-8'),
                htmlspecialchars($author,  ENT_QUOTES, 'UTF-8'),
                date('Y-m-d H:i:s'),
                // 支持 Markdown：把换行转成 <br>，简单场景够用
                nl2br(htmlspecialchars($content, ENT_QUOTES, 'UTF-8'))
            ],
            $tpl
        );

        file_put_contents($file, $html);
        $msg = "发布成功！文件已生成：<a href=\"{$seq}.html\" target=\"_blank\">{$seq}.html</a>";
    }
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>发布文章</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
        body{margin:0;padding:2rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC",sans-serif;background:#f7f8fa;color:#222}
        h1{margin-top:0}
        form{max-width:700px;margin:auto;background:#fff;padding:2rem;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.05)}
        label{display:block;margin:.75rem 0 .25rem;font-weight:600;font-size:.9rem}
        input,textarea{width:100%;padding:.6rem;border:1px solid #ccd1d9;border-radius:4px;font-size:1rem}
        textarea{min-height:220px;resize:vertical}
        button{cursor:pointer;background:#0066ff;color:#fff;border:0;padding:.6rem 1.4rem;border-radius:4px;font-size:1rem}
        .msg{margin-top:1rem;font-size:.9rem}
        .msg a{color:#0066ff}
    </style>
</head>
<body>
<h1>发布新文章</h1>

<form method="post">
    <label>文章标题 *</label>
    <input type="text" name="title" required>

    <label>作者</label>
    <input type="text" name="author" placeholder="可选">

    <label>正文 *</label>
    <textarea name="content" required placeholder="支持纯文本或简单 Markdown"></textarea>

    <button type="submit">立即发布</button>

    <?php if ($msg): ?>
        <p class="msg"><?= $msg ?></p>
    <?php endif; ?>
</form>
</body>
</html>
