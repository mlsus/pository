const IMAGE_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBDo9ha0csXUfi7KWpBXEdJvoRQkc8lOeIWwtPpdMl-NTc0yYli6Fz4ueOyFs9ji-_FWKY_xUwuYxOkskIzY3X9RG-gy0Hw6mUxReGKph5N2Pguqt6je0P_Qd9YXsMo786Wb2KQ2Hr6NJtCGDHfHxFLHaOkttK6sbAdw_uLiirmMXmPmBtfOkpE2-XIx65/s320/maxresdefault.jpg";
const ARTICLE_URL = "https://blogverse.flazora.com/blog/how-to-improve-your-business-credit-score-and-qualify-for-better-financing";

module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=300");
  res.statusCode = 200;
  res.end(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Open the full article.">
  <meta name="theme-color" content="#f4f6fb">
  <title>Read the Full Article</title>
  <style>
    *{box-sizing:border-box}
    body{margin:0;min-height:100vh;display:grid;place-items:center;padding:22px;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;color:#172033}
    main{width:100%;max-width:650px;padding:22px;background:#fff;border-radius:16px;text-align:center;box-shadow:0 8px 32px rgba(20,35,60,.09)}
    h1{font-size:clamp(22px,5vw,30px);margin:4px 0 10px}
    p{font-size:16px;line-height:1.6;color:#5d6677;margin:0 0 20px}
    .image-link{display:block;overflow:hidden;border-radius:12px;line-height:0}
    img{display:block;width:100%;height:auto;transition:transform .2s ease}
    .image-link:hover img{transform:scale(1.015)}
    .button{display:inline-block;margin-top:18px;padding:14px 24px;background:#1769e0;color:#fff;text-decoration:none;font-weight:700;border-radius:9px}
    .button:focus-visible,.image-link:focus-visible{outline:3px solid #f0b429;outline-offset:4px}
    @media(max-width:480px){main{padding:15px;border-radius:12px}.button{display:block;width:100%}}
  </style>
</head>
<body>
  <main>
    <h1>Discover More</h1>
    <p>Click the image below to read the full article.</p>
    <a class="image-link" href="${ARTICLE_URL}" aria-label="Read the full article">
      <img src="${IMAGE_URL}" alt="Read the full article" fetchpriority="high">
    </a>
    <a class="button" href="${ARTICLE_URL}">Read Full Article</a>
  </main>
</body>
</html>`);
};
