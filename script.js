document.getElementById("year").textContent=new Date().getFullYear();

function sendContact(event){
  event.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  const subject=encodeURIComponent("Nouveau projet - Agence Freelance IA");
  const body=encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nProjet:\n${message}`);
  window.location.href=`mailto:contact@votre-domaine.com?subject=${subject}&body=${body}`;
}
