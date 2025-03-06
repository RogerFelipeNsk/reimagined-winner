
const markdownText = $json.data[0].text;

// Converte quebras de linha duplas em `</p><p>` para parágrafos
let htmlContent = markdownText
    .replace(/\n{2,}/g, '</p><p>') // Divide em parágrafos
    .replace(/\n/g, '<br>'); // Mantém quebras de linha

// Converte títulos Markdown para HTML
htmlContent = htmlContent
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>') // H1
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>') // H2
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>'); // H3

// Converte listas com `- ` para `<ul><li>...</li></ul>`
htmlContent = htmlContent.replace(/- (.*?)<br>/g, '<li>$1</li>'); // Formata os itens da lista

// Envolve listas em `<ul>`
htmlContent = htmlContent.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');

// Envolve os parágrafos formatados corretamente
htmlContent = `<p>${htmlContent}</p>`;

// Template HTML estilizado para e-mails
const emailTemplate = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Atualização de Produto</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 600px;
                  background: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                  margin: auto;
              }
              h1 {
                  color: #007bff;
                  text-align: center;
              }
              h2 {
                  color: #333;
                  border-bottom: 2px solid #007bff;
                  padding-bottom: 5px;
              }
              h3 {
                  color: #555;
                  font-style: italic;
              }
              p, li {
                  font-size: 16px;
                  line-height: 1.5;
                  color: #444;
              }
              ul {
                  padding-left: 20px;
              }
              .footer {
                  margin-top: 20px;
                  padding-top: 10px;
                  border-top: 1px solid #ddd;
                  font-size: 14px;
                  color: #777;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div class="container">
              ${htmlContent}
              <div class="footer">
                  <p>📢 Fique por dentro das novidades! Se tiver dúvidas, entre em contato com nosso suporte.</p>
              </div>
          </div>
      </body>
      </html>
    `;

return emailTemplate;
