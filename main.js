/* Créer une To Do List */


// Création variable "addToDoButton" qui stocke l'élément HTML avec l'ID "addToDo"
// C'est un bouton pour ajouter une nouvelle tâche à la liste.
let addToDoButton = document.getElementById('addToDo');

// Création variable "toDoContainer" qui stocke l'élément HTML avec l'ID "toDoContainer" 
// Cet élément est un conteneur dans lequel les tâches seront affichées.
let toDoContainer = document.getElementById('toDoContainer');

// Création d'une variable "inputField" qui stocke l'élément HTML avec l'ID "inputField"
// Cet élément est la zone de texte où l'utilisateur peut entrer une nouvelle tâche
let inputField = document.getElementById('inputField');

    var dateParagraph = document.createElement('p');  // Création d'un nouvel élément de paragraphe pour la date actuelle 
        var currentDate = new Date().toLocaleDateString(); // Formater la date
        dateParagraph.innerText = currentDate;          // Affichage de la date actuelle 

// Cette ligne ajoute un événement "click" sur le bouton "addToDoButton"
// Lorsqu'on clique sur le bouton, la fonction entre les accolades s'exécute
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');      // Création d'un nouvel élément HTML "p" qui sera utilisé pour afficher le texte de la nouvelle tâche
    var checkBox = document.createElement('input');   // Création d'un nouvel élément HTML "input" qui sera utilisé pour ajouter une case à cocher 
    checkBox.type = 'checkbox';     //Déclaration du type d'input 
    paragraph.classList.add('paragraph-styling');     // Ajoute une classe CSS "paragraph-styling" à l'élément "paragraph" pour appliquer un style particulier à l'élément
    checkBox.classList.add('checkbox-styling'); 
    paragraph.innerText = inputField.value;           // Définit le texte de l'élément "paragraph" en récupérant la valeur actuelle de l'élément "inputField"
    toDoContainer.appendChild(paragraph);             // Ajoute l'élément "paragraph" en tant qu'enfant de l'élément "toDoContainer", pour afficher la nouvelle tâche dans la liste
    paragraph.appendChild(checkBox);
    
    inputField.value = "";                            // Réinitialise la valeur de l'élément "inputField" à une chaîne vide, effaçant ainsi le texte qu'on a entré pour la nouvelle tâche
    checkBox.addEventListener('click', function(){   // Ajoute un "click" à l'élément "paragraph". Lorsqu'on clique dessus, la fonction entre les accolades est exécutée
        paragraph.style.textDecoration = "line-through";    // Définit le style CSS "text-decoration" de l'élément "paragraph" sur "line-through", pour barrer le texte de la tâche pour indiquer qu'elle est terminée.
        
        checkBox.addEventListener('click', function(){       //Fonction click sur l'input checkbox avec conditions
            if (checkBox.checked) {                             
                paragraph.style.textDecoration = "line-through";    //Si le case est cochée, le texte est barré. 
            } else {
                paragraph.style.textDecoration = "none";       //Sinon, le texte n'est pas barré 
            }
        });
    })

        // Ajouter les paragraphes de tâche et de date au conteneur
        toDoContainer.appendChild(paragraph); 
        toDoContainer.appendChild(dateParagraph);

    // paragraph.addEventListener('dblclick', function(){      // Ajoute un effet "double-click" à l'élément "paragraph". Lorsqu'on double-clique sur l'élément, la fonction entre les accolades est exécutée.
    //     toDoContainer.removeChild(paragraph);           // Supprime l'élément "paragraph" de la liste des choses à faire
    // })
})
