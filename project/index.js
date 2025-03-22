const express = require("express");
const app = express();

app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>https://www.psychometrie.com/</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
      </url>
      <url>
          <loc>https://www.psychometrie.com/services</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
      </url>
  </urlset>`);
});

app.listen(3000, () => console.log("Serveur démarré sur le port 3000"));

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Disallow: /admin/
Allow: /

Sitemap: https://www.psychometrie.com/sitemap.xml`);
});
