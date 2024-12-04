import logo from "../../assets/logo.png"
import busca from "../../assets/busca.png"
import { Link } from "react-router-dom"

import S from './header.module.scss'

export default function header() {
	return (
		<header>
			<section className={S.boxLogo}>
				<img src={logo} alt="imagem de um livro" />
				<h1>Livros Vai na Web</h1>
			</section>
			<nav className={S.boxMenu}>
				<ul>
					<li><Link to="/">Inicio</Link></li>
					<li><Link to="/doados">Livros Doados</Link></li>
					<li><Link to="/queroDoar">Quero Doar</Link></li>
				</ul>
			</nav>
			<div className={S.boxSearch}>
				<input className={S.boxInput} type="text"
					placeholder="O que você procura?" />
				<img src={busca} alt="" />
			</div>
		</header>
	)
}