-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 28, 2022 at 10:13 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furniture_platform`
--

CREATE DATABASE IF NOT EXISTS `furniture_platform` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `furniture_platform`;

-- --------------------------------------------------------

--
-- Table structure for table `meubles`
--

DROP TABLE IF EXISTS `meubles`;
CREATE TABLE `meubles` (
  `id` int(10) UNSIGNED NOT NULL,
  `categorie` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `prix` int(10) UNSIGNED NOT NULL,
  `etat` varchar(255) NOT NULL,
  `hauteur` int(10) UNSIGNED NOT NULL,
  `largeur` int(10) UNSIGNED NOT NULL,
  `profondeur` int(10) UNSIGNED NOT NULL,
  `matiere` varchar(255) NOT NULL,
  `couleur` varchar(255) NOT NULL,
  `photo1` varchar(255) NOT NULL,
  `photo2` varchar(255) NOT NULL,
  `photo3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Dumping data for table `meubles`
--

INSERT INTO `meubles` (`id`, `categorie`, `type`, `prix`, `etat`, `hauteur`, `largeur`, `profondeur`, `matiere`, `couleur`, `photo1`, `photo2`, `photo3`) VALUES
(1, 'Salon ', 'Buffet', 270, 'Comme neuf', 75, 170, 45, 'Bois', 'Noir', 'https://i.ibb.co/VqSFGmk/buffet.jpg', '', ''),
(2, 'Chambre', 'Armoire', 220, 'Bon état', 190, 85, 41, 'Métal', 'Noir', 'https://i.ibb.co/K69q4WR/armoire-chambre.jpg', '', ''),
(3, 'Cuisine', 'Meuble de cuisine', 600, 'Très bon état', 86, 180, 55, 'Bois', 'Marron', 'https://i.ibb.co/3hCCzxY/meuble-Cuisine.jpg', '', ''),
(4, 'Décoration', 'Miroir', 150, 'Passable', 110, 93, 8, 'Bois', 'Marron', 'https://i.ibb.co/vZKVNnS/miroir.jpg', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `personne`
--

DROP TABLE IF EXISTS `personne`;
CREATE TABLE `personne` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Dumping data for table `personne`
--

INSERT INTO `personne` (`id`, `nom`, `mail`, `password`, `adresse`) VALUES
(2, 'Dudu', 'dudu@ada.com', 'du', 'dodo');

-- --------------------------------------------------------

--
-- Table structure for table `vendeur`
--

DROP TABLE IF EXISTS `vendeur`;
CREATE TABLE `vendeur` (
  `id` int(10) UNSIGNED NOT NULL,
  `personne_id` int(10) UNSIGNED NOT NULL,
  `meubles_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `vendeur`
--

DROP TABLE IF EXISTS `acheteur`;
CREATE TABLE `acheteur` (
  `id` int(10) UNSIGNED NOT NULL,
  `personne_id` int(10) UNSIGNED NOT NULL,
  `meubles_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `panier`
--

CREATE TABLE `panier` (
  `id` int(10) UNSIGNED NOT NULL,
  `personne_id` int(10) UNSIGNED NOT NULL,
  `meubles_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `panier`
--

INSERT INTO `panier` (`id`, `personne_id`, `meubles_id`) VALUES
(2, 2, 1);

-- ---------------------------------------------------
--
-- Indexes for dumped tables
--

--
-- Indexes for table `meubles`
--
ALTER TABLE `meubles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personne`
--
ALTER TABLE `personne`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendeur`
--
ALTER TABLE `vendeur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personne_vendeur_id` (`personne_id`),
  ADD KEY `fk_meubles_vendeur_id` (`meubles_id`);

ALTER TABLE `acheteur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personne_acheteur_id` (`personne_id`),
  ADD KEY `fk_meubles_acheteur_id` (`meubles_id`);

--
-- Indexes for table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_persone_panier_id` (`personne_id`) USING BTREE,
  ADD KEY `fk_meubles_panier_id` (`meubles_id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meubles`
--
ALTER TABLE `meubles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personne`
--
ALTER TABLE `personne`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acheteur`
--
ALTER TABLE `acheteur`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendeur`
--
ALTER TABLE `vendeur`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

--
-- AUTO_INCREMENT for table `panier`
--
ALTER TABLE `panier`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


-- AJOUT FOREIGN KEYS POUR LIER LES TABLES  

ALTER TABLE `vendeur` 
  ADD CONSTRAINT `fk_personne_vendeur_id` FOREIGN KEY (`personne_id`) 
  REFERENCES `personne`(`id`) 
  ON DELETE NO ACTION 
  ON UPDATE NO ACTION;


ALTER TABLE `vendeur` 
  ADD CONSTRAINT `fk_meubles_vendeur_id` FOREIGN KEY (`meubles_id`) 
  REFERENCES `meubles`(`id`)  
  ON DELETE NO ACTION 
  ON UPDATE NO ACTION;


ALTER TABLE `acheteur` 
  ADD CONSTRAINT `fk_personne_acheteur_id` FOREIGN KEY (`personne_id`) 
  REFERENCES `personne`(`id`)
  ON DELETE NO ACTION 
  ON UPDATE NO ACTION;


ALTER TABLE `acheteur` 
  ADD CONSTRAINT `fk_meubles_acheteur_id` FOREIGN KEY (`meubles_id`) 
  REFERENCES `meubles`(`id`)  
  ON DELETE NO ACTION 
  ON UPDATE NO ACTION;

--
-- Constraints for table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `panier_ibfk_1` FOREIGN KEY (`personne_id`) REFERENCES `personne` (`id`),
  ADD CONSTRAINT `panier_ibfk_2` FOREIGN KEY (`meubles_id`) REFERENCES `meubles` (`id`);


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;