// ContactPage.js
import React from 'react';
import './ContactPage.css'; // Estilo opcional
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function ContactPage() {
  return (
      <div className='main'>
        <Header />
    <div className="contact-page-container">
      <div className="about-us-container box1">
        <h2>Sobre Nós</h2>
        <p>
        Bem-vindo ao nosso espaço dedicado no mundo digital! Somos um grupo de estudantes apaixonados do Senac, imersos no processo desafiador e enriquecedor de elaborar nosso Trabalho de Conclusão de Curso (TCC). Este projeto representa não apenas o fechamento de um ciclo acadêmico, mas também a celebração de conhecimentos adquiridos, experiências compartilhadas e a evolução conjunta ao longo do curso. Aqui, em nosso ambiente virtual, você encontrará não apenas postagens informativas, mas também a essência de nossa jornada acadêmica e as reflexões que moldaram nosso percurso. Ao explorar este espaço, convidamos você a se envolver, comentar e fazer parte das discussões, contribuindo para a construção colaborativa do conhecimento. Este site é mais do que uma plataforma online; é um reflexo do nosso compromisso com a aprendizagem contínua. Ressaltamos que este é o resultado de um TCC de encerramento de curso no Senac, marcando um capítulo significativo em nossas vidas acadêmicas. Apreciem a leitura e sintam-se parte deste momento conosco!
        </p>
        <img
          src="https://imgs.search.brave.com/r5VEKsUb7WabL5n9NBc9TIE3knRMzvIieAQOguSjq_0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTc2NDMw/OS84NjUzL2kvNjAw/L2RlcG9zaXRwaG90/b3NfODY1MzY3NjQt/c3RvY2stcGhvdG8t/bW9kZXJuLWJ1c2lu/ZXNzLWNvbXBhbnkt/ZGlzdHJpY3QuanBn" // Substitua com o URL da sua imagem
          alt="MaxServices"
        />
      </div>

      <div className="contact-info-container box1 ">
        <h3>Informações de Contato</h3>
        <p>
          <strong>WhatsApp:</strong> (11) 98765-4321
        </p>
        <p>
          <strong>Instagram:</strong> @maxservices_insta
        </p>
        <p>
          <strong>Telefone:</strong> (11) 1234-5678
        </p>
        <p>
          <strong>E-mail:</strong> contato@maxservices.com
        </p>
      </div>
    </div>
    <Footer />
      </div>
    
  );
}

export default ContactPage;