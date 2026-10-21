function TarjetaPelicula({ titulo, director }) {
const handleMarcarVista = () => {
    console.log('¡Click en el botón!')
    console.log('Marcando como vista:', titulo, '-', director)
    alert(`Has marcado como vista: ${titulo}`)
  }
  const handleEntrar = () => console.log(`Ratón sobre: ${titulo}`)
  const handleSalir = () => console.log(`Ratón fuera de: ${titulo}`)
    return (
    <article className="tarjeta-pelicula " onMouseEnter={handleEntrar} onMouseLeave={handleSalir}>
      <h3>{titulo}</h3>
      <p>{director}</p>
      <div className="fila">
        <button onClick={handleMarcarVista}>Marcar como vista</button>
        <button onClick={() => alert(`Marcando ${titulo}`)}>Marcar vista</button>
      </div>
    </article>
  )
}

export default TarjetaPelicula