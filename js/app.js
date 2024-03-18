// CREA L'ARRAY DI OGGETTI PER RAPPRESENTARE I MEMBRI DEL TEAM
const membriTeam = [
    {
        nome: 'Wayne Barnett', 
        lavoro: 'Founder & CEO',
        foto: 'Wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll', 
        lavoro: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon', 
        lavoro: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez', 
        lavoro: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada', 
        lavoro: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos', 
        lavoro: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < membriTeam.length; i++){
    membroCorrente = membriTeam[i];
    console.log(membroCorrente.nome, membroCorrente.lavoro, membroCorrente.foto);

    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.className = 'col-4';
    container.append(div);
    div.innerHTML = `${membroCorrente.nome}, ${membroCorrente.lavoro}, ${membroCorrente.foto}`;
}

// Stampare le stesse informazioni su DOM semplicemente come stringhe

