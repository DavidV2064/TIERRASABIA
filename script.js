let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
let intervalId = setInterval(showNextImage, 3000);

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

function showPrevImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(sec => sec.style.display = 'none');
    document.getElementById(seccion).style.display = 'block';
}


let carrito = [];
const descripcionesProductos = {
    //jabon
    'Jabon_de_Avena_y_Miel': {
        descripcion: 'Jabón de avena y miel perfecto para hidratar y suavizar la piel.',
        precio: 5.99,
        imagen: 'Imagenes/jabon_avena_miel.webp'
    },
    'Jabon_de_Coco_y_Lavanda': {
        descripcion: 'Jabón de aceite de coco y lavanda ideal para una piel relajada y fresca.',
        precio: 6.49,
        imagen: 'Imagenes/jabon_coco_lavanda.webp'
    },
    'Jabon_de_Te_Verde_y_Menta': {
        descripcion: 'Jabón refrescante de té verde y menta, ideal para revitalizar la piel.',
        precio: 5.49,
        imagen: 'Imagenes/jabon_te_verde_menta.webp'
    },
    'Jabon_de_Carbon_Activado_y_Arbol_de_Te': {
        descripcion: 'Jabón de carbón activado y árbol de té, perfecto para limpiar profundamente la piel.',
        precio: 6.99,
        imagen: 'Imagenes/jabon_carbon_arbol_te.webp'
    },
    'Jabon_de_Leche_de_Cabra_y_Calendula': {
        descripcion: 'Jabón nutritivo de leche de cabra y caléndula, ideal para pieles sensibles.',
        precio: 7.49,
        imagen: 'Imagenes/jabon_leche_cabra_calendula.webp'
    },
    'Jabon_de_Aloe_Vera_y_Manzanilla': {
        descripcion: 'Jabón calmante de aloe vera y manzanilla, perfecto para piel irritada.',
        precio: 5.99,
        imagen: 'Imagenes/jabon_aloe_vera_manzanilla.webp'
    },
    //champu
    'Champu_Solido_de_Romero_y_Menta': {
        descripcion: 'Champú sólido de romero y menta, ideal para fortalecer el cabello y estimular el cuero cabelludo.',
        precio: 6.99,
        imagen: 'Imagenes/champu_romero_menta.webp'
    },
    'Champu_Solido_de_Manzanilla_y_Calendula': {
        descripcion: 'Champú sólido de manzanilla y caléndula, perfecto para cabellos rubios o claros, proporcionando brillo natural.',
        precio: 7.49,
        imagen: 'Imagenes/champu_manzanilla_calendula.webp'
    },
    'Champu_Solido_de_Carbon_Activado_y_Arbol_de_Te': {
        descripcion: 'Champú sólido de carbón activado y árbol de té, excelente para limpiar profundamente y purificar el cabello.',
        precio: 7.99,
        imagen: 'Imagenes/champu_carbon_arbol_te.webp'
    },
    'Champu_Solido_de_Coco_y_Karite': {
        descripcion: 'Champú sólido de coco y karité, diseñado para hidratar intensamente y reparar cabellos secos o dañados.',
        precio: 8.49,
        imagen: 'Imagenes/champu_coco_karite.webp'
    },
    'Champu_Solido_de_Ortiga_y_Aloe_Vera': {
        descripcion: 'Champú sólido de ortiga y aloe vera, ideal para fortalecer el cabello y prevenir la caída.',
        precio: 6.49,
        imagen: 'Imagenes/champu_ortiga_aloe.webp'
    },
    'Champu_Solido_de_Lavanda_y_Bergamota': {
        descripcion: 'Champú sólido de lavanda y bergamota, perfecto para un efecto relajante y equilibrante en el cabello y cuero cabelludo.',
        precio: 6.99,
        imagen: 'Imagenes/champu_lavanda_bergamota.webp'
    },
    //acondicionados solidos
    'Acondicionador_Solido_de_Karite_y_Coco': {
        descripcion: 'Acondicionador sólido de manteca de karité y aceite de coco, ideal para nutrir y suavizar profundamente el cabello.',
        precio: 7.99,
        imagen: 'Imagenes/acondicionador_karite_coco.webp'
    },
    'Acondicionador_Solido_de_Argan_y_Lavanda': {
        descripcion: 'Acondicionador sólido de argán y lavanda, perfecto para hidratar y fortalecer el cabello, dejando un aroma relajante.',
        precio: 8.49,
        imagen: 'Imagenes/acondicionador_argan_lavanda.webp'
    },
    'Acondicionador_Solido_de_Aloe_y_Calendula': {
        descripcion: 'Acondicionador sólido de aloe vera y caléndula, excelente para cabellos sensibles y cuero cabelludo delicado.',
        precio: 6.99,
        imagen: 'Imagenes/acondicionador_aloe_calendula.webp'
    },
    'Acondicionador_Solido_de_Jojoba_y_Menta': {
        descripcion: 'Acondicionador sólido de jojoba y menta, diseñado para revitalizar el cabello y proporcionar un efecto refrescante.',
        precio: 7.49,
        imagen: 'Imagenes/acondicionador_jojoba_menta.webp'
    },
    'Acondicionador_Solido_de_Mango_y_Papaya': {
        descripcion: 'Acondicionador sólido de mango y papaya, enriquecido con nutrientes para suavizar y desenredar el cabello.',
        precio: 8.99,
        imagen: 'Imagenes/acondicionador_mango_papaya.webp'
    },
    'Acondicionador_Solido_de_Romero_y_Te_Verde': {
        descripcion: 'Acondicionador sólido de romero y té verde, ideal para fortalecer el cabello y añadir brillo natural.',
        precio: 7.99,
        imagen: 'Imagenes/acondicionador_romero_te_verde.webp'
    },
    //desodorante

    'Desodorante_Bicarbonato_Coco': {
        descripcion: 'Desodorante natural con bicarbonato de sodio y aceite de coco, ideal para una protección eficaz y duradera.',
        precio: 5.99,
        imagen: 'Imagenes/desodorante_bicarbonato_coco.webp'
    },
    'Desodorante_Arcilla_Arbol_Te': {
        descripcion: 'Desodorante de arcilla bentonita y árbol de té, perfecto para pieles sensibles y una frescura natural.',
        precio: 6.49,
        imagen: 'Imagenes/desodorante_arcilla_arbol_te.webp'
    },
    'Desodorante_Lavanda_Manzanilla': {
        descripcion: 'Desodorante suave de lavanda y manzanilla, proporciona frescura y calma a la piel.',
        precio: 6.99,
        imagen: 'Imagenes/desodorante_lavanda_manzanilla.webp'
    },
    'Desodorante_Karite_Calendula': {
        descripcion: 'Desodorante de karité y caléndula, ideal para hidratar la piel mientras la protege contra el mal olor.',
        precio: 7.49,
        imagen: 'Imagenes/desodorante_karite_calendula.webp'
    },
    'Desodorante_Carbon_Menta': {
        descripcion: 'Desodorante de carbón activado y menta, excelente para mantener la piel seca y fresca todo el día.',
        precio: 6.99,
        imagen: 'Imagenes/desodorante_carbon_menta.webp'
    },
    'Desodorante_Sandalo_Romero': {
        descripcion: 'Desodorante de sándalo y romero, perfecto para una frescura duradera con un aroma amaderado y herbáceo.',
        precio: 7.99,
        imagen: 'Imagenes/desodorante_sandalo_romero.webp'
    },
    //brillo labial
    'Brillo_Labial_de_Karite_y_Miel': {
        descripcion: 'Brillo labial de manteca de karité y miel, ideal para hidratar y proteger los labios, dejándolos suaves y brillantes.',
        precio: 4.99,
        imagen: 'Imagenes/brillo_karite_miel.webp'
    },
    'Brillo_Labial_de_Coco_y_Menta': {
        descripcion: 'Brillo labial de aceite de coco y menta, proporciona una sensación refrescante mientras nutre los labios.',
        precio: 5.49,
        imagen: 'Imagenes/brillo_coco_menta.webp'
    },
    'Brillo_Labial_de_Cera_de_Abeja_y_Vainilla': {
        descripcion: 'Brillo labial de cera de abeja y vainilla, ideal para suavizar los labios y mantenerlos hidratados con un toque dulce.',
        precio: 5.99,
        imagen: 'Imagenes/brillo_cera_vainilla.webp'
    },
    'Brillo_Labial_de_Frambruesa_y_Granada': {
        descripcion: 'Brillo labial de frambuesa y granada, rico en antioxidantes para proteger los labios y darles un color natural.',
        precio: 6.49,
        imagen: 'Imagenes/brillo_frambuesa_granada.webp'
    },
    'Brillo_Labial_de_Lavanda_y_Miel_de_Manuka': {
        descripcion: 'Brillo labial de lavanda y miel de manuka, calma y repara los labios secos con propiedades antibacterianas.',
        precio: 5.99,
        imagen: 'Imagenes/brillo_lavanda_miel_manuka.webp'
    },
    'Brillo_Labial_de_Almendra_y_Rosa_Mosqueta': {
        descripcion: 'Brillo labial de almendra y rosa mosqueta, nutre profundamente los labios mientras aporta un suave brillo natural.',
        precio: 6.99,
        imagen: 'Imagenes/brillo_almendra_rosa_mosqueta.webp'
    },
};




function mostrarDescripcion(producto) {
    const modal = document.getElementById('modal');
    const productoInfo = descripcionesProductos[producto];
    if (productoInfo) {
        document.getElementById('modalImagen').src = productoInfo.imagen;
        document.getElementById('modalTitulo').textContent = producto.replaceAll('_', ' ');
        document.getElementById('modalDescripcion').textContent = productoInfo.descripcion;
        document.getElementById('modalPrecio').textContent = 'Precio: $' + productoInfo.precio.toFixed(2);
        modal.style.display = 'block';
    }
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

function agregarAlCarrito(producto, precio) {
    const cantidad = event.target.previousElementSibling.value;
    carrito.push({ producto, precio, cantidad: parseInt(cantidad) });
    actualizarCarrito();
}

function mostrarCarrito() {
    const modalCarrito = document.getElementById('modalCarrito');
    const carritoLista = document.getElementById('carritoLista');
    carritoLista.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.cantidad} x ${item.producto} - $${(item.precio * item.cantidad).toFixed(2)}`;
        carritoLista.appendChild(li);
        total += item.precio * item.cantidad;
    });

    document.getElementById('totalCarrito').textContent = 'Total: $' + total.toFixed(2);
    modalCarrito.style.display = 'block';
}

function cerrarCarrito() {
    document.getElementById('modalCarrito').style.display = 'none';
}

function cancelarPedido() {
    carrito = [];
    actualizarCarrito();
    cerrarCarrito();
}

function actualizarCarrito() {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('verCarrito').textContent = `Ver Carrito (${totalItems})`;
}


