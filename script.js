document.addEventListener("DOMContentLoaded", () => {
  // Preencher o ano atual no footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Inicializar o catálogo
  initCatalogo()

  // Inicializar o carrossel de depoimentos
  initCarousel()

  // Inicializar os botões de WhatsApp
  initWhatsAppButtons()

  // Inicializar o modal
  initModal()

  // Inicializar o scroll suave
  initSmoothScroll()
})

const numeroWhatsApp = "5592994586467" // Substitua pelo número real

// Dados do catálogo
const catalogoData = [
  {
    id: 1,
    titulo: "Topo de Bolo Sereia",
    descricao: "Topo personalizado com tema de sereia",
    imagem: "./img/topo3.jpeg",
    
  },
  {
    id: 2,
    titulo: "Topo de Bolo Moana",
    descricao: "Topo personalizado com tema da Moana",
    imagem: "./img/topo1.jpeg",
  },
  {
    id: 3,
    titulo: "Tag Personalizada",
    descricao: "Tags para lembrancinhas com tema personalizado",
    imagem: "./img/tag.jpg",
  },
  {
    id: 4,
    titulo: "Caixinha Festa Junina",
    descricao: "Caixinha personalizada com tema de festa junina",
    imagem: "./img/junina.jfif",
  },
  {
    id: 5,
    titulo: "Copos personalizados",
    descricao: "Copos personalizados com vinil",
    imagem: "./img/copos.jpg",
  },
  {
    id: 6,
    titulo: "Kit Festa personalizado Mickey Mouse",
    descricao: "Kit completo para decoração",
        imagem: "./img/kit-festa-personalizado-do-Mickey-Mouse.jpg",

  },
];
c

// Inicializar o catálogo
function initCatalogo() {
  const catalogoGrid = document.getElementById("catalogo-grid");
  const isDevMode = true; // Altere para false em produção

  // Limpa o conteúdo anterior
  catalogoGrid.innerHTML = "";

  catalogoData.forEach((item) => {
    const catalogoItem = document.createElement("div");
    catalogoItem.className = "catalogo-item";
    catalogoItem.innerHTML = `
      <div class="catalogo-image" data-id="${item.id}">
        <img src="${item.imagem}" alt="${item.titulo}" style="width: 100%; border-radius: 8px;">
      </div>
      <div class="catalogo-content">
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
        <button class="btn-whatsapp-produto" data-titulo="${item.titulo}">Quero esse</button>
      </div>
    `;

    // Adiciona botão de WhatsApp
    catalogoItem.querySelector(".btn-whatsapp-produto").addEventListener("click", () => {
      numeroWhatsApp
      const mensagem = `Olá! Gostaria de saber mais sobre o produto: *${item.titulo}*`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    });

    // Evento para abrir modal com detalhes
    catalogoItem.querySelector(".catalogo-image").addEventListener("click", () => {
      openModal(item); // Certifique-se de ter essa função definida
    });

    // Adiciona ao DOM
    catalogoGrid.appendChild(catalogoItem);
  });
}


// Inicializar o carrossel de depoimentos
function initCarousel() {
  const carousel = document.getElementById("depoimentos-carousel")
  const items = carousel.querySelectorAll(".carousel-item")
  const prevBtn = document.querySelector(".carousel-prev")
  const nextBtn = document.querySelector(".carousel-next")
  let currentIndex = 0

  // Mostrar o primeiro item
  showItem(currentIndex)

  // Event listeners para os botões
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length
    showItem(currentIndex)
  })

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length
    showItem(currentIndex)
  })

  // Função para mostrar um item específico
  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index)
    })
  }

  // Auto-rotação do carrossel
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length
    showItem(currentIndex)
  }, 5000)
}

// Inicializar os botões de WhatsApp
function initWhatsAppButtons() {
  const whatsappButtons = document.querySelectorAll("#whatsapp-button, #whatsapp-button-footer")

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tipoArte = document.querySelector('input[name="tipo-arte"]:checked')?.value || ""
      const entrega = document.querySelector('input[name="entrega"]:checked')?.value || ""
      const observacoes = document.getElementById("observacoes")?.value || ""

      numeroWhatsApp 

      let mensagem = "Olá! Gostaria de fazer um pedido."

      const mensagemCodificada = encodeURIComponent(mensagem)
      const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`

      window.open(whatsappUrl, "_blank")
    })
  })
}





// Inicializar o scroll suave
function initSmoothScroll() {
  // Já implementado via CSS (scroll-behavior: smooth)
}

// Função para rolar até uma seção específica
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}
