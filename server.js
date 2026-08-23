require('dotenv').config({ override: true });
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// DeepSeek proxy endpoint
app.post('/api/search', async (req, res) => {
  const { query, context } = req.body;
  
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          {
            role: 'system',
            content: `Eres un asistente educativo especializado en Necesidades Psicoeducativas Especiales (NPE) en México. Respondes en español, de forma concisa y clara. Máximo 3-4 oraciones por respuesta. Enfócate en información práctica, datos recientes y contexto mexicano cuando sea relevante. No uses formato markdown.`
          },
          {
            role: 'user',
            content: context ? `Contexto de la sección: ${context}\n\nPregunta del usuario: ${query}` : query
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Groq API error:', response.status, err);
      return res.status(502).json({ error: `Groq API error (${response.status}): ${err.slice(0, 200)}` });
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'No se pudo obtener una respuesta.';
    
    res.json({ answer });
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`\n  Psicolearning server running at http://localhost:${PORT}\n`);
});
