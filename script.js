async function copiarAlPortapapeles() {
  try {
    const texto = document.getElementById("correo").innerText;
    await navigator.clipboard.writeText(texto);
    mostrarToast();
    console.log("Contenido copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
}

function mostrarToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("mostrar");

  setTimeout(() => {
    toast.classList.remove("mostrar");
  }, 2500); // 2.5 segundos visible
}


