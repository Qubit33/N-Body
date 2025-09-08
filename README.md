![Demonstração da simulação](https://i.ibb.co/PsHNzNgq/Screenshot-20250906-110137-Treb-Edit.jpg)

# 🌌 N-Body — Simulação de corpos gravitacionais (HTML + WebGL)

**Descrição**  
Simulação N-Body em HTML/JavaScript com renderização por GPU (WebGL/WebGL2).  
Permite modelar a órbita e interação gravitacional entre partículas (estrelas, planetas, etc.).  

---

## 🚀 Recursos principais
- Simulação em tempo real direto no navegador (abra `index.html`).
- Renderização acelerada por GPU (WebGL2).
- Ajuste de parâmetros: número de partículas, massa, velocidade, passo de tempo.
- Suporte a integradores: **Euler** e **Leapfrog / Velocity Verlet**.
- Estatísticas em tempo real: FPS, energia total, centro de massa.
- Controles de interface para pausar, reiniciar e adicionar partículas.

---

## 📷 Demonstração
Abra `index.html` no navegador.  
Ou hospede no **GitHub Pages** e compartilhe o link.

---

---

## ⚙️ Requisitos
- Navegador moderno com **WebGL2** (Chrome, Edge, Firefox).
- CPU/GPU razoáveis para simulações com milhares de partículas.
- (Opcional) Servidor local para evitar restrições de CORS:  
  ```bash
  python -m http.server 8000

