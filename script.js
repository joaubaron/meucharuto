let startY = 0;

document.addEventListener("touchstart", function(event) {
    startY = event.touches[0].clientY;
});

document.addEventListener("touchmove", function(event) {
    let currentY = event.touches[0].clientY;
    
    // Se o usuário puxar para baixo mais de 50px no topo da página
    if (currentY - startY > 50 && window.scrollY === 0) {
        location.reload(); // Recarrega a página
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayCigars();
});

	let lastExportedFileName = ''; // Variável global para armazenar o nome do último arquivo exportado
	
// Função para abrir o modal e exibir o nome do último arquivo exportado
function openModal() {
    const savedFileNameElement = document.getElementById('savedFileName');

    // Recupera o nome do arquivo salvo no localStorage
    const lastExportedFileName = localStorage.getItem('lastExportedFileName');

    if (lastExportedFileName) {
        savedFileNameElement.innerHTML = `
            <span style="color: black; font-weight: normal;">Último arquivo exportado:</span><br>
            <span style="color: red; font-weight: bold;">${lastExportedFileName}</span><br>
            <p style="font-size: 0.8em; color: #666; margin-top: 5px;">
                Importe o arquivo na pasta Downloads para carregá-lo.
            </p>
        `;
    } else {
        savedFileNameElement.innerHTML = `
            <span style="color: red;">Nenhum arquivo exportado ainda.</span>
        `;
    }
    document.getElementById('modal').style.display = 'flex';
}

// Atualize o evento de clique no link "Nota importante!" para chamar a função openModal
document.getElementById('showModalLink').addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

// Função para exibir o modal personalizado
function showCustomAlert(fileName) {
    lastSavedFileName = fileName; // Armazena o nome do arquivo
    document.getElementById('fileNameText').textContent = fileName; // Atualiza o modal com o nome do arquivo
    document.getElementById('customAlert').style.display = 'flex'; // Exibe o modal
}

// Função para fechar o modal personalizado
function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none'; // Oculta o modal
}

// Exemplo de uso ao clicar no botão de exportar
function exportData() {
    const fileName = 'meuscharutos.json'; // Nome do arquivo salvo
    showCustomAlert(fileName); // Exibe o modal com o nome do arquivo
}

	function scrollToTop() {
    // Pega a posição do topo do elemento com id 'top'
    const topPosition = document.getElementById('top').offsetTop;

    // Ajusta a rolagem para um pouco abaixo do topo (subtraindo 50px ou o valor que você preferir)
    window.scrollTo({
        top: topPosition +20, // Ajuste os 50px conforme necessário
        behavior: 'smooth' // Rolagem suave
    });
}

// Função para mostrar todas as seções
function showAll() {
    document.getElementById('favoriteSection').classList.add('hidden');
    document.getElementById('cigarList').classList.remove('hidden');
    document.getElementById('deletedSection').classList.add('hidden');
    document.getElementById('favoriteList').classList.add('hidden');
    document.getElementById('deletedList').classList.add('hidden');

    // Garantir que o título "Charutos Degustados" seja exibido
    document.querySelector('h2.section:not(#favoriteSection):not(#deletedSection)').classList.remove('hidden');
}

// Função para mostrar apenas os favoritos
function showFavorites() {
    document.getElementById('favoriteSection').classList.remove('hidden');
    document.getElementById('cigarList').classList.add('hidden');
    document.getElementById('deletedSection').classList.add('hidden');
    document.getElementById('favoriteList').classList.remove('hidden');
    document.getElementById('deletedList').classList.add('hidden');

    // Ocultar o título "Charutos Degustados"
    document.querySelector('h2.section:not(#favoriteSection):not(#deletedSection)').classList.add('hidden');
}

// Função para mostrar apenas os degustados
function showTasted() {
    document.getElementById('favoriteSection').classList.add('hidden');
    document.getElementById('cigarList').classList.remove('hidden');
    document.getElementById('deletedSection').classList.add('hidden');
    document.getElementById('favoriteList').classList.add('hidden');
    document.getElementById('deletedList').classList.add('hidden');

    // Garantir que o título "Charutos Degustados" seja exibido
    document.querySelector('h2.section:not(#favoriteSection):not(#deletedSection)').classList.remove('hidden');
}

// Função para mostrar apenas os excluídos
function showDeleted() {
    document.getElementById('favoriteSection').classList.add('hidden');
    document.getElementById('cigarList').classList.add('hidden');
    document.getElementById('deletedSection').classList.remove('hidden');
    document.getElementById('favoriteList').classList.add('hidden');
    document.getElementById('deletedList').classList.remove('hidden');

    // Ocultar o título "Charutos Degustados"
    document.querySelector('h2.section:not(#favoriteSection):not(#deletedSection)').classList.add('hidden');
}

    // Abre o modal ao clicar no link
    document.getElementById('showModalLink').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('modal').style.display = 'flex';
    });

    // Fecha o modal ao clicar no botão "Entendi"
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    // Efeito de hover no link "Nota importante"
    document.getElementById('showModalLink').addEventListener('mouseenter', function() {
        this.style.color = '#0056b3'; // Muda a cor no hover
    });
    document.getElementById('showModalLink').addEventListener('mouseleave', function() {
        this.style.color = '#007bff'; // Restaura a cor original
    });

    // Efeito de hover na imagem
    document.querySelector('footer a img').addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)'; // Amplia a imagem ligeiramente
    });
    document.querySelector('footer a img').addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)'; // Restaura o tamanho original
    });
    
// Lista de mensagens
const messages = [
    "Rum e charutos acalmam a alma, reflexos de paz e harmonia eternos.",
    "Um bom charuto é um amigo que ensina algo valioso a cada momento.",
    "Fumar charuto é relaxar com estilo, deixando o tempo passar devagar.",
    "Charutos não precisam de razão, apenas de um momento perfeito.",
    "A vida é curta demais para gastar com charutos ruins e amargos.",
    "Um bom charuto é um prazer que se saboreia lentamente e cuidadosamente.",
    "Charutos trazem conversas e histórias guardadas no tempo distante.",
    "Fumar charuto é como fazer uma pausa merecida na rotina diária.",
    "Cada charuto carrega uma história fascinante esperando para ser contada.",
    "Nada se compara ao prazer inigualável de escolher o charuto ideal.",
    "Charuto é o parceiro perfeito para reflexões solitárias e profundas.",
    "A verdadeira riqueza é saborear charutos com bons e leais amigos.",
    "Um charuto é uma poesia envolta em folhas de tabaco envelhecido.",
    "Charutos têm o aroma tranquilo da calma e do momento perfeito.",
    "Fumar charuto é viver o momento com cada tragada lenta e pensativa.",
    "Os grandes momentos da vida são medidos em charutos únicos e especiais.",
    "Charutos são paz e prazer embrulhados na fumaça do instante fugaz.",
    "Fumar charuto é narrar histórias em silêncios contemplativos e profundos.",
    "O charme do charuto está nos detalhes da fumaça sutil e delicada.",
    "Charuto é o convite perfeito para desacelerar e viver mais plenamente.",
    "Charutos são aliados dos pensamentos em noites solitárias e silenciosas.",
    "Fumar charuto é uma pausa bem-vinda no turbilhão frenético do dia.",
    "Com charutos, o tempo desacelera, e a vida ganha leveza e clareza.",
    "Charutos e momentos bons são feitos para a calmaria lenta e duradoura.",
    "O prazer de um charuto vai além do que se pode provar fisicamente.",
    "Charuto e café são o duo perfeito para boas e profundas reflexões.",
    "Fumar charuto é uma conversa sem palavras com o vasto universo.",
    "Charuto é o abraço tranquilo para uma mente cansada e viva novamente.",
    "Charutos e amigos transformam qualquer instante em memória eterna."
];

// Função para selecionar uma mensagem aleatória
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function showMessageBeforeContent() {
    const randomMessage = getRandomMessage(); // Seleciona uma mensagem aleatória

    if (randomMessage) {
        // Criar o elemento de mensagem no topo da página
        const messageElement = document.createElement('div');
        messageElement.id = 'topMessage';
        messageElement.style.position = 'fixed'; // Fixar no topo da tela
        messageElement.style.top = '0'; // Alinhar ao topo
        messageElement.style.left = '0'; // Alinhar à esquerda
        messageElement.style.width = '100%'; // Largura total da tela
        messageElement.style.boxSizing = 'border-box'; // Garantir que padding esteja dentro da largura total
        messageElement.style.backgroundColor = 'white'; // Fundo branco
        messageElement.style.color = 'black'; // Texto preto
        messageElement.style.textAlign = 'center'; // Centralizar o texto
        messageElement.style.padding = '8px 20px'; // Espaçamento interno (margens laterais inclusas)
        messageElement.style.fontSize = 'clamp(14px, 3vw, 18px)'; // Fonte responsiva (mínimo 14px, máximo 18px)
        messageElement.style.zIndex = '10000';  // Aumentar o z-index para garantir que fique acima de outros elementos
        messageElement.style.lineHeight = '1.5'; // Espaçamento entre linhas para garantir 2 linhas
        messageElement.style.whiteSpace = 'pre-line'; // Permite quebras de linha

        // Adicionando a mensagem ao elemento
        const messageText = document.createElement('p');
        messageText.style.margin = '0'; // Remove margens extras do texto
        messageText.style.color = 'black'; // Cor do texto
        messageText.innerText = randomMessage;

        // Adiciona o texto da mensagem
        messageElement.appendChild(messageText);

        // Adiciona o elemento no topo da página
        document.body.insertBefore(messageElement, document.body.firstChild);

        // Ajuste para empurrar a logo para baixo
        const logo = document.querySelector('.logo'); // Substitua pelo seletor correto da sua logo
        if (logo) {
            logo.style.transition = 'margin-top 0.3s'; // Adiciona uma transição suave para o movimento da logo
            logo.style.marginTop = '50px'; // Empurra a logo para baixo ao exibir a mensagem
        }

        // Configura o desaparecimento automático após 6 segundos
        setTimeout(() => {
            document.body.removeChild(messageElement); // Remove a mensagem após 6 segundos

            // Restaura a posição original da logo
            if (logo) {
                logo.style.transition = 'margin-top 0.3s'; // Adiciona transição para suavizar a volta
                logo.style.marginTop = '0'; // Restaura a posição original da logo
            }
        }, 6000); // A mensagem desaparecerá após 6 segundos
    }
}

// Chamar a função quando a página for carregada
window.onload = showMessageBeforeContent;

let db;
let editCigarId = null;
let editCigarFavorite = false;

function initDatabase() {
    const request = indexedDB.open("CigarDatabase", 1);

    request.onupgradeneeded = (event) => {
        db = event.target.result;
        const store = db.createObjectStore("cigars", { keyPath: "id", autoIncrement: true });
    };

    request.onsuccess = (event) => {
        db = event.target.result;
        displayCigars();
        showAll(); // Exibe todas as seções ao carregar a página
    };
}

function saveCigar(cigar) {
    const transaction = db.transaction("cigars", "readwrite");
    const store = transaction.objectStore("cigars");
    store.put(cigar);
    transaction.oncomplete = displayCigars;
}

function getAllCigars(callback) {
    const transaction = db.transaction("cigars", "readonly");
    const store = transaction.objectStore("cigars");
    const request = store.getAll();
    request.onsuccess = () => {
        const cigars = request.result.sort((a, b) => b.id - a.id);
        callback(cigars);
    };
}

function addCigar() {
    const name = document.getElementById('name').value.trim();
    const country = document.getElementById('country').value.trim();
    const description = document.getElementById('description').value.trim();
    const pairing = document.getElementById('pairing').value.trim();
    const appearance = parseInt(document.getElementById('appearance').value);
    const burn = parseInt(document.getElementById('burn').value);
    const aroma = parseInt(document.getElementById('aroma').value);
    const taste = parseInt(document.getElementById('taste').value);
    const average = ((appearance + burn + aroma + taste) / 4).toFixed(1);

    const cigar = {
    id: editCigarId || Date.now(),
    name,
    country,
    description,
    appearance,
    burn,
    aroma,
    taste,
    average: parseFloat(average),
    pairing, // Novo campo de harmonização
    favorite: editCigarId ? editCigarFavorite : false,
    deleted: false,
};

    saveCigar(cigar);
    editCigarId = null;
    editCigarFavorite = false;
    document.getElementById('cigarForm').reset();

    setTimeout(() => {
        const cigarList = document.getElementById('cigarList');
        const newItem = [...cigarList.children].find(
            (item) => item.textContent.includes(name) && item.textContent.includes(country)
        );
        if (newItem) {
            scrollToElement(newItem);}
    }, 100);
}

function scrollToElement(element) {
    if (element && 'scrollBehavior' in document.documentElement.style) {
        // Navegador suporta rolagem suave
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        // Fallback para navegadores que não suportam rolagem suave
        element.scrollIntoView({ block: 'center' });
    }
}

// Exemplo de uso:
const newItem = [...cigarList.children].find(
    (item) => item.textContent.includes(name) && item.textContent.includes(country)
);
if (newItem) {
    scrollToElement(newItem);
}

function displayCigars() {
    const bandeirasPaises = {
        "Angola": 'flags/ao.svg',
        "Argentina": 'flags/ar.svg',
        "Austrália": 'flags/au.svg',
        "Bélgica": 'flags/be.svg',
        "Bolívia": 'flags/bo.svg',
        "Brasil": 'flags/br.svg',
        "Bahamas": 'flags/bs.svg',
        "Canadá": 'flags/ca.svg',
        "Suíça": 'flags/ch.svg',
        "Camarões": 'flags/cm.svg',
        "China": 'flags/cn.svg',
        "Colômbia": 'flags/co.svg',
        "Costa Rica": 'flags/cr.svg',
        "Cuba": 'flags/cu.svg',
        "República Checa": 'flags/cz.svg',
		"Alemanha": 'flags/de.svg',
        "República Dominicana": 'flags/do.svg',
		"Equador": 'flags/ec.svg',
        "Espanha": 'flags/es.svg',
        "França": 'flags/fr.svg',
        "Reino Unido": 'flags/gb.svg',
        "Guatemala": 'flags/gt.svg',
        "Honduras": 'flags/hn.svg',
        "Indonésia": 'flags/id.svg',
        "Irlanda": 'flags/ie.svg',
        "Israel": 'flags/il.svg',
        "Itália": 'flags/it.svg',
        "Jamaica": 'flags/jm.svg',
        "Japão": 'flags/jp.svg',
        "Quênia": 'flags/ke.svg',
        "Sri Lanka": 'flags/lk.svg',
        "Malawi": 'flags/mw.svg',
        "México": 'flags/mx.svg',
        "Malásia": 'flags/my.svg',
        "Nicarágua": 'flags/ni.svg',
        "Panamá": 'flags/pa.svg',
        "Peru": 'flags/pe.svg',
        "Filipinas": 'flags/ph.svg',
        "Portugal": 'flags/pt.svg',
        "Paraguai": 'flags/py.svg',
        "Cingapura": 'flags/sg.svg',
        "El Salvador": 'flags/sv.svg',
        "Tailândia": 'flags/th.svg',
        "Trinidad e Tobago": 'flags/tt.svg',
        "Tanzânia": 'flags/tz.svg',
        "Uganda": 'flags/ug.svg',
		"Estados Unidos": 'flags/us.svg',
        "Uruguai": 'flags/uy.svg',
        "Venezuela": 'flags/ve.svg',
        "Vietnã": 'flags/vn.svg'
    };

    document.getElementById('loading').style.display = 'block';

    // Função para normalizar strings (remover acentos e transformar em minúsculas)
    function normalizeString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    getAllCigars((cigars) => {
        cigars.sort((a, b) => b.average - a.average);

        const cigarList = document.getElementById('cigarList');
        const favoriteList = document.getElementById('favoriteList');
        const deletedList = document.getElementById('deletedList');

        cigarList.innerHTML = '';
        favoriteList.innerHTML = '';
        deletedList.innerHTML = '';

        const cigarFragment = document.createDocumentFragment();
        const favoriteFragment = document.createDocumentFragment();
        const deletedFragment = document.createDocumentFragment();

        cigars.forEach((cigar) => {
            const li = document.createElement("li");
            const progressWidth = (cigar.average - 5) * 20;
            const progressColor = cigar.average >= 5 ? "#FF4500" : "#C0C0C0";

            // Normalizar o nome do país digitado
            const normalizedCountry = normalizeString(cigar.country);

            // Procurar o país com nome normalizado e verificar se existe
            const bandeiraSrc = Object.keys(bandeirasPaises).find(pais =>
                normalizeString(pais) === normalizedCountry
            );

            // Caso o país não seja encontrado, usar a bandeira padrão
            const flagSrc = bandeiraSrc ? bandeirasPaises[bandeiraSrc] : "flags/un.svg";

            li.innerHTML = `
                <div class="cigar-info">
                    <strong style="font-size: 1.2em;">${cigar.name}</strong><br>
                    <img src="${flagSrc}" alt="${cigar.country}" style="width: 25px; height: 25px; margin-right: 5px; vertical-align: middle;">
                    <span style="position: relative; top: 2px;">${cigar.country}</span><br>
                    ${cigar.description}<br>
                    ${cigar.pairing ? `<strong>Harmoniza com:</strong> ${cigar.pairing}<br>` : ""}
                    <div class="progress-bar">
                        <div class="progress" style="width: ${Math.min(Math.max(progressWidth, 0), 100)}%; background: ${progressColor};"></div>
                    </div>
                </div>

                <div class="rating-and-favorite">
                    <span>Média: ${cigar.average}</span>
                    ${!cigar.deleted ? `<i class="fas fa-star favorite ${cigar.favorite ? 'active' : ''}" onclick="toggleFavorite(${cigar.id})"></i>` : ""}
                </div>
                <div class="cigar-actions">
                    ${cigar.deleted
                        ? `<button type="button" onclick="restoreCigar(${cigar.id})" class="restaurar">
    <i class="fas fa-undo"></i> Restaurar
</button>
<button type="button" onclick="deletePermanently(${cigar.id})" class="excluir-permanente">
    <i class="fas fa-trash"></i> Eliminar
</button>
                           </button>`
                        : `<button type="button" onclick="editCigar(${cigar.id})" class="editar">
                                <i class="fas fa-edit"></i> Editar
                           </button>
                           <button type="button" onclick="deleteCigar(${cigar.id})" class="excluir">
                                <i class="fas fa-trash"></i> Excluir
                           </button>`}
                </div>
            `;

            if (cigar.deleted) {
                deletedFragment.appendChild(li);
            } else if (cigar.favorite) {
                favoriteFragment.appendChild(li);
            } else {
                cigarFragment.appendChild(li);
            }
        });

        cigarList.appendChild(cigarFragment);
        favoriteList.appendChild(favoriteFragment);
        deletedList.appendChild(deletedFragment);

        document.getElementById('loading').style.display = 'none';
    });
}

// Executar de forma assíncrona sem travar a UI
requestIdleCallback(displayCigars);
 
// Executar de forma assíncrona sem travar a UI
requestIdleCallback(displayCigars);

function toggleFavorite(id) {
    getAllCigars((cigars) => {
        const cigar = cigars.find((c) => c.id === id);
        cigar.favorite = !cigar.favorite;
        saveCigar(cigar);

        // Rolar suavemente até o item favoritado na lista de favoritos
        setTimeout(() => {
            const favoriteList = document.getElementById('favoriteList');
            const favoriteItem = [...favoriteList.children].find(
                (item) => item.textContent.includes(cigar.name) && item.textContent.includes(cigar.country)
            );
            if (favoriteItem) {
                favoriteItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100); // Pequeno atraso para garantir que o DOM seja atualizado
    });
}

function editCigar(id) {
    getAllCigars((cigars) => {
        const cigar = cigars.find((c) => c.id === id);
        if (cigar) {
            document.getElementById('name').value = cigar.name;
            document.getElementById('country').value = cigar.country;
            document.getElementById('description').value = cigar.description;
            document.getElementById('appearance').value = cigar.appearance;
            document.getElementById('burn').value = cigar.burn;
            document.getElementById('aroma').value = cigar.aroma;
            document.getElementById('taste').value = cigar.taste;
            document.getElementById('pairing').value = cigar.pairing || ''; // Agora preenche Harmonização
            editCigarId = cigar.id;
            editCigarFavorite = cigar.favorite;
            window.scrollTo({ top: document.getElementById('cigarForm').offsetTop - 370, behavior: 'smooth' });
        }
    });
}

function deleteCigar(id) {
    getAllCigars((cigars) => {
        const cigar = cigars.find((c) => c.id === id);
        if (cigar) {
            cigar.deleted = true;
            saveCigar(cigar);
            document.getElementById('deletedSection').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function restoreCigar(id) {
    getAllCigars((cigars) => {
        const cigar = cigars.find((c) => c.id === id);
        if (cigar) {
            cigar.deleted = false;
            saveCigar(cigar);
        }
    });
}

let deleteCigarId = null;

function deletePermanently(id) {
    deleteCigarId = id;
    document.getElementById('deleteConfirmationModal').style.display = 'flex';
}

document.getElementById('confirmDeleteButton').addEventListener('click', () => {
    if (deleteCigarId) {
        const transaction = db.transaction("cigars", "readwrite");
        const store = transaction.objectStore("cigars");
        store.delete(deleteCigarId);
        transaction.oncomplete = displayCigars;
    }
    closeDeleteConfirmationModal();
});

document.getElementById('cancelDeleteButton').addEventListener('click', () => {
    closeDeleteConfirmationModal();
});

function closeDeleteConfirmationModal() {
    document.getElementById('deleteConfirmationModal').style.display = 'none';
    deleteCigarId = null;
}

let fileUrl = null; // Variável global para armazenar a URL do arquivo
let fileName = null; // Variável global para armazenar o nome do arquivo

function exportData() {
    getAllCigars((cigars) => {
        // Remove o campo 'flag' de cada charuto antes de exportar
        const cigarsWithoutFlag = cigars.map(cigar => {
            const { flag, ...rest } = cigar;
            return rest;
        });

        // Criação do JSON e Blob
        const jsonData = JSON.stringify(cigarsWithoutFlag, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });

        // Gera a URL do arquivo
        fileUrl = URL.createObjectURL(blob);

        // Obtém data e hora formatadas
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const monthNames = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        const month = monthNames[now.getMonth()];
        const year = now.getFullYear().toString().slice(-2);
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timestamp = `${day}${month}${year}-${hours}${minutes}`;

        // Define o nome do arquivo
        fileName = `meucharuto-${timestamp}.json`;

        // Salva o nome no localStorage para referência futura
        localStorage.setItem('lastExportedFileName', fileName);

        // Exibe a modal antes de salvar
        document.getElementById('fileNameText').textContent = `${fileName}`;
        document.getElementById('customAlert').style.display = 'flex';
    });
}

// Função para iniciar o download do arquivo
function saveFile() {
    if (fileUrl && fileName) {
        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.download = fileName; // Define o nome do arquivo
        document.body.appendChild(downloadLink);
        downloadLink.click(); // Simula o clique para iniciar o download
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(fileUrl); // Libera a URL do objeto

        // Fecha a modal após o download
        closeCustomAlert();
    } else {
        alert("Erro: Arquivo não gerado corretamente.");
    }
}

// Função para fechar a modal
function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

function importData(event) {
    const file = event.target.files[0]; // Obtém o arquivo selecionado
    const reader = new FileReader(); // Cria um leitor de arquivos

    reader.onload = () => {
        try {
            const cigars = JSON.parse(reader.result); // Converte o conteúdo do arquivo para JSON

            if (Array.isArray(cigars)) {
                // Verifica se todos os itens têm a estrutura esperada
                const isValid = cigars.every(cigar => {
                    return (
                        cigar.id !== undefined &&
                        cigar.name !== undefined &&
                        cigar.country !== undefined &&
                        cigar.description !== undefined &&
                        cigar.appearance !== undefined &&
                        cigar.burn !== undefined &&
                        cigar.aroma !== undefined &&
                        cigar.taste !== undefined &&
                        cigar.average !== undefined &&
                        cigar.favorite !== undefined &&
                        cigar.deleted !== undefined
                    );
                });

                if (isValid) {
                    const transaction = db.transaction("cigars", "readwrite");
                    const store = transaction.objectStore("cigars");

                    // Adiciona cada charuto ao banco de dados
                    cigars.forEach((cigar) => {
                        store.put(cigar);
                    });

                    transaction.oncomplete = () => {
                        alert("Dados importados com sucesso!");
                        displayCigars(); // Atualiza a exibição dos charutos
                    };
                } else {
                    throw new Error("Dados inválidos: um ou mais charutos não têm a estrutura esperada.");
                }
            } else {
                throw new Error("Formato inválido: os dados importados devem ser um array.");
            }
        } catch (error) {
            alert("Erro ao importar os dados: " + error.message);
        }
    };

    reader.readAsText(file); // Lê o conteúdo do arquivo como texto
}

// Evento de clique no botão "Importar"
document.getElementById('fileInput').addEventListener('change', importData);

document.addEventListener('DOMContentLoaded', initDatabase);
