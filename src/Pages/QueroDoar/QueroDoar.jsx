import S from './queroDoar.module.scss'
import livro from '../../assets/Vector.png'

export default function QueroDoar() {
  return (
    <section className={S.principal}>
      <section className={S.container}>
        <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
        <form action="">
          <div>
            <img src={livro} alt="icone de um livro" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder='Titulo' required/>
          <input type="text" placeholder='Categoria' required/>
          <input type="text" placeholder='Autor' required/>
          <input type="text" placeholder='Link da Imagem' required/>
          <button type="submit">Doar</button>
        </form>
      </section>
    </section>
  )
}