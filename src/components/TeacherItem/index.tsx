import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/8277449?s=460&u=963a019617690fb89b3d9588b01c970c1f77d2d1&v=4" alt="Foto de perfil"/>
                <div>
                    <strong>Mateus Luiz</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>Apaixonando por Física durante toda a infância. Formou-se em Física e está lecionando há 10 anos e tendo vários prêmios na área.
                <br/><br/>
                Brinks. Tudo que foi dito é mentira.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button className="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;