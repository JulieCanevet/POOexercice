-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:8889
-- Généré le :  Lun 21 Août 2017 à 15:19
-- Version du serveur :  5.6.35
-- Version de PHP :  7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `exercicePOOS5`
--

-- --------------------------------------------------------

--
-- Structure de la table `ListeUtilisateurs`
--

CREATE TABLE `ListeUtilisateurs` (
  `id` int(11) NOT NULL,
  `Nom` varchar(100) NOT NULL,
  `Prenom` varchar(100) NOT NULL,
  `Taille` int(11) NOT NULL,
  `Age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `ListeUtilisateurs`
--

INSERT INTO `ListeUtilisateurs` (`id`, `Nom`, `Prenom`, `Taille`, `Age`) VALUES
(1, 'Lefebvre', 'Rémi', 190, 25),
(2, 'Richeux', 'Rebecca', 183, 24),
(3, 'Canevet', 'Julie', 164, 23);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `ListeUtilisateurs`
--
ALTER TABLE `ListeUtilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `ListeUtilisateurs`
--
ALTER TABLE `ListeUtilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
