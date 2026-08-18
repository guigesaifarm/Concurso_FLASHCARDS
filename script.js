<script>
        const cardsData = [
            {
                category: "Gestão Democrática",
                front: "O que caracteriza a Gestão Democrática na educação pública segundo a legislação brasileira?",
                back: "É o princípio que garante a participação coletiva da comunidade escolar e local nas decisões políticas, pedagógicas e administrativas da escola, promovendo transparência, autonomia e controle social."
            },
            {
                category: "Amparo Legal (LDB)",
                front: "Quais são os dois mecanismos básicos de Gestão Democrática expressos no artigo 14 da LDB?",
                back: "1. Participação dos profissionais da educação na elaboração do Projeto Político-Pedagógico (PPP).<br><br>2. Participação das comunidades escolar e local em Conselhos Escolares ou equivalentes."
            },
            {
                category: "Instâncias Colegiadas",
                front: "O que é o Conselho Escolar e qual a sua função principal?",
                back: "É um órgão colegiado deliberativo, consultivo e fiscalizador, composto por representantes de todos os segmentos da comunidade escolar (direção, professores, funcionários, pais e alunos). É o principal espaço de tomada de decisões da escola."
            },
            {
                category: "Projeto Político-Pedagógico",
                front: "Qual é o significado das dimensões 'Político' e 'Pedagógico' no PPP?",
                back: "<b>Político:</b> Compromisso com a formação de cidadãos críticos para a sociedade.<br><br><b>Pedagógico:</b> Organização e planejamento das ações de ensino-aprendizagem.<br><br>Juntos, definem a identidade e os objetivos da escola."
            },
            {
                category: "Planejamento Educacional",
                front: "Quais são os 3 principais níveis do planejamento na educação (do macro ao micro)?",
                back: "1. <b>Educacional (ou de Sistema):</b> Nível macro (ex.: Plano Nacional de Educação - PNE).<br><br>2. <b>Escolar (PPP/Plano da Escola):</b> Nível meso (visão global da instituição).<br><br>3. <b>De Ensino / Plano de Aula:</b> Nível micro (prática direta em sala de aula)."
            },
            {
                category: "Autonomia Escolar",
                front: "Segundo o artigo 15 da LDB, em quais três dimensões as escolas públicas devem progressivamente alcançar autonomia?",
                back: "1. <b>Pedagógica</b> (elaboração das propostas de ensino).<br>2. <b>Administrativa</b> (organização interna).<br>3. <b>Gestão Financeira</b> (aplicação e prestação de contas dos recursos)."
            },
            {
                category: "Etapas do Planejamento",
                front: "Quais são os passos essenciais do ciclo de Planejamento Educacional?",
                back: "1. <b>Diagnóstico:</b> Análise da realidade atual.<br>2. <b>Proposição:</b> Definição de objetivos, metas e estratégias.<br>3. <b>Execução:</b> Ação prática.<br>4. <b>Avaliação Contínua:</b> Acompanhamento e reorientação contínua."
            },
            {
                category: "Modelos de Planejamento",
                front: "Qual a diferença entre o planejamento tradicional (tecnocrático) e o participativo?",
                back: "<b>Tradicional:</b> Centralizado, burocrático, rígido e imposto de cima para baixo.<br><br><b>Participativo:</b> Descentralizado, dinâmico, contínuo e construído coletivamente com a comunidade."
            },
            {
                category: "Diagnóstico Escolar",
                front: "Por que o Diagnóstico da realidade escolar é fundamental antes da elaboração do plano?",
                back: "Porque impede que o planejamento seja abstrato ou desconectado da realidade. O diagnóstico identifica as necessidades, desafios e potencialidades locais para traçar metas reais."
            },
            {
                category: "Prática Pedagógica",
                front: "O que significa dizer que o plano de ensino / plano de aula deve ser 'flexível'?",
                back: "Significa que o plano é uma hipótese de trabalho e não um documento estático. Ele pode e deve ser readequado no decorrer das aulas de acordo com as necessidades e ritmo dos estudantes."
            }
        ];

        let currentIndex = 0;
        const cardElement = document.getElementById('flashcard');
        const categoryElement = document.getElementById('card-category');
        const frontElement = document.getElementById('card-front');
        const backElement = document.getElementById('card-back');
        const trackerElement = document.getElementById('card-tracker');

        function updateCard() {
            cardElement.classList.remove('is-flipped');
            setTimeout(() => {
                const currentData = cardsData[currentIndex];
                categoryElement.innerText = currentData.category;
                frontElement.innerHTML = currentData.front;
                backElement.innerHTML = currentData.back;
                trackerElement.innerText = `Card ${currentIndex + 1} de ${cardsData.length}`;
            }, 150);
        }

        function flipCard() {
            cardElement.classList.toggle('is-flipped');
        }

        function nextCard() {
            currentIndex = (currentIndex + 1) % cardsData.length;
            updateCard();
        }

        function prevCard() {
            currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
            updateCard();
        }

        // Inicializar
        updateCard();

        // Suporte a teclas do teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextCard();
            if (e.key === 'ArrowLeft') prevCard();
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                flipCard();
            }
        });
    </script>
