// Builds a mailto link with a ready-to-fill message
const link = document.getElementById("mail-link");

const address = "damien.remot@outlook.fr";
const subject = "Demande de cours particuliers";
const body = `Bonjour,

Je vous contacte pour prendre des cours particuliers de mathématiques.

- Pour qui ? (moi-même, mon enfant, …) :
- Niveau / classe :
- Format souhaité (à domicile ou en visio) :
- Disponibilités (jours et horaires) :
- Objectifs (soutien, préparation d'un contrôle ou d'un concours, …) :

Voici mon numéro de téléphone, pour que vous puissiez me rappeler :

Cordialement,`;

link.href =
  "mailto:" + address +
  "?subject=" + encodeURIComponent(subject) +
  "&body=" + encodeURIComponent(body);