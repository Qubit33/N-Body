N-Body — Simulação de corpos gravitacionais (HTML + WebGL)

Descrição
Simulação N-Body em HTML/JavaScript com renderização por GPU (WebGL/WebGL2). Este repositório contém uma versão interativa e configurável que modela a órbita e interação gravitacional entre partículas (estrelas, planetas, partículas) — ideal para demos, ensino ou base para experimentos computacionais.


---

Recursos principais

Simulação em tempo real executando direto no navegador (abra index.html).

Renderização acelerada por GPU (WebGL / WebGL2).

Ajuste de parâmetros: número de partículas, massa, velocidade inicial, fator de suavização, passo de tempo.

Múltiplos esquemas de integração suportados (ex.: Euler explícito, Leapfrog / Velocity Verlet).

Modo de visualização com brilho/escala para simular profundidade estelar.

Estatísticas em tempo real: tempo de simulação, FPS, energia total (aprox.), centro de massa.

Controles para pausar, reiniciar, adicionar/remover partículas e salvar estado.



---

Demonstração

Abra index.html no seu navegador (recomendado Chrome/Firefox/Edge com suporte WebGL2).
Se desejar, hospede no GitHub Pages: ative Pages no repositório e aponte para a branch main/gh-pages.


---

Conteúdo do repositório

/ (raiz)
├─ index.html           # página principal (entry)
├─ css/
│  └─ style.css
├─ js/
│  ├─ main.js           # lógica de UI e loop de simulação
│  ├─ sim.js            # integrador, passos de tempo, físicas
│  ├─ gpu_renderer.js   # shaders + upload/consulta de dados para GPU
│  └─ utils.js
├─ shaders/
│  ├─ render.vert
│  └─ render.frag
├─ examples/
│  └─ galaxy-config.json
├─ README.md            # este arquivo
└─ LICENSE


---

Requisitos

Navegador moderno com WebGL2 (recomendo Chrome/Edge/Firefox atualizados).

CPU/GPU razoáveis para simulações mais intensas (milhares de partículas podem exigir mais recursos).

(Opcional) Servidor local se necessário para evitar restrições de CORS (ex.: python -m http.server).
