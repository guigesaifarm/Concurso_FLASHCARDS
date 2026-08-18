 <script>
        const cardsData = [
            {
                category: "Conceito de Currículo",
                front: "O que é o Currículo Escolar em sua concepção contemporânea?",
                back: "Não é apenas a lista de matérias ou livros, mas o <b>conjunto de experiências de aprendizagem</b>, saberes, valores e práticas sociais vivenciadas pelos alunos dentro do ambiente escolar e organizadas com intencionalidade pedagógica."
            },
            {
                category: "Níveis do Currículo",
                front: "O que diferencia o Currículo Formal, Real e Oculto?",
                back: "<b>Formal (Prescrito):</b> O documento oficial e normativo (ex.: BNCC).<br><br><b>Real (Em Ação):</b> O que acontece de fato no dia a dia da sala de aula.<br><br><b>Oculto:</b> As aprendizagens implícitas (atitudes, valores e regras sociais) assimiladas na convivência."
            },
            {
                category: "Tipos de Avaliação",
                front: "Quais são as 3 funções clássicas da Avaliação da Aprendizagem?",
                back: "1. <b>Diagnóstica:</b> Mapeia conhecimentos prévios e necessidades iniciais.<br>2. <b>Formativa:</b> Acompanha continuamente o aprendizado para regular o ensino.<br>3. <b>Somativa:</b> Balanço e síntese final das aprendizagens para fins de classificação ou certificação."
            },
            {
                category: "LDB e Avaliação",
                front: "O que a LDB (Art. 24, V) determina sobre a avaliação do rendimento escolar?",
                back: "Determina que a avaliação deve ser <b>contínua e cumulativa</b>, com prevalência dos aspectos <b>qualitativos sobre os quantitativos</b> e dos resultados ao longo do período sobre os de eventuais exames finais."
            },
            {
                category: "Recuperação Contínua",
                front: "O que é a Recuperação da Aprendizagem na perspectiva democrática e inclusiva?",
                back: "É um <b>direito do estudante</b> que deve ocorrer de forma <b>contínua e paralela</b> ao processo de ensino, visando sanar lacunas e reorientar a aprendizagem imediatamente, e não apenas uma prova final ao fim do ano."
            },
            {
                category: "Recuperação vs. Recomposição",
                front: "Qual a diferença entre 'Reforço/Recuperação' e 'Recomposição de Aprendizagens'?",
                back: "<b>Recuperação/Reforço:</b> Retoma conteúdos pontuais não consolidados do ano em curso.<br><br><b>Recomposição:</b> Estratégia de equidade acelerada para recuperar saberes essenciais de anos anteriores que impedem o avanço do aluno no currículo atual."
            },
            {
                category: "Avaliação Mediadora",
                front: "O que defende a concepção de Avaliação Mediadora (Jussara Hoffmann)?",
                back: "Defende que a avaliação não deve ser um instrumento de punição ou rotulação, mas sim de <b>diálogo, intervenção e provocação pedagógica</b> entre professor e estudante para promover a superação dos desafios."
            },
            {
                category: "BNCC e Direitos de Aprendizagem",
                front: "Qual o papel da BNCC no currículo das escolas brasileiras?",
                back: "A BNCC funciona como um <b>documento normativo de referência nacional</b> que fixa as competências e aprendizagens essenciais para a Educação Básica, devendo ser adaptada e complementada pela parte diversificada de cada região."
            },
            {
                category: "Equidade na Avaliação",
                front: "O que significa ter 'Equidade' no processo de Avaliação e Recuperação?",
                back: "Significa reconhecer que os alunos têm pontos de partida e ritmos diferentes, fornecendo <b>apoios e estratégias diferenciadas</b> para que todos consigam atingir os mesmos direitos de aprendizagem."
            },
            {
                category: "Interdisciplinaridade",
                front: "Como o currículo deve abordar a organização dos conhecimentos segundo as diretrizes atuais?",
                back: "De forma <b>integrada, contextualizada e interdisciplinar</b>, superando a fragmentação rígida por disciplinas e relacionando os conteúdos aos problemas e desafios da vida real dos estudantes."
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
