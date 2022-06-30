-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 30, 2022 at 09:05 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `acheteur`
--

CREATE TABLE `acheteur` (
  `id` int(10) UNSIGNED NOT NULL,
  `personne_id` int(10) UNSIGNED NOT NULL,
  `meubles_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `meubles`
--

CREATE TABLE `meubles` (
  `id` int(10) UNSIGNED NOT NULL,
  `categorie` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `prix` int(10) UNSIGNED NOT NULL,
  `hauteur` int(10) UNSIGNED NOT NULL,
  `largeur` int(10) UNSIGNED NOT NULL,
  `profondeur` int(10) UNSIGNED NOT NULL,
  `matiere` varchar(255) NOT NULL,
  `couleur` varchar(255) NOT NULL,
  `photo1` varchar(255) NOT NULL,
  `photo2` varchar(255) NOT NULL,
  `photo3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meubles`
--

INSERT INTO `meubles` (`id`, `categorie`, `type`, `prix`, `hauteur`, `largeur`, `profondeur`, `matiere`, `couleur`, `photo1`, `photo2`, `photo3`) VALUES
(1, 'Salon ', 'Buffet', 270, 75, 170, 45, 'Bois\r\n', 'Noir', 'https://i.ibb.co/VqSFGmk/buffet.jpg', '', ''),
(2, 'Chambre', 'Armoire', 220, 190, 85, 41, 'Métal', 'Noir', 'https://i.ibb.co/K69q4WR/armoire-chambre.jpg', '', ''),
(3, 'Cuisine', 'Meuble de cuisine', 600, 86, 180, 55, 'Bois', 'Marron', 'https://i.ibb.co/3hCCzxY/meuble-Cuisine.jpg', '', ''),
(4, 'Décoration', 'Miroir', 150, 110, 93, 8, 'Bois', 'Marron', '\"https://i.ibb.co/vZKVNnS/miroir.jpg\"', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `personne`
--

CREATE TABLE `personne` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `mot de passe` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `vendeur`
--

CREATE TABLE `vendeur` (
  `id` int(10) UNSIGNED NOT NULL,
  `personne_id` int(10) UNSIGNED NOT NULL,
  `meubles_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acheteur`
--
ALTER TABLE `acheteur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personne_acheteur_id` (`personne_id`),
  ADD KEY `fk_meubles_acheteur_id` (`meubles_id`);

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

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acheteur`
--
ALTER TABLE `acheteur`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meubles`
--
ALTER TABLE `meubles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personne`
--
ALTER TABLE `personne`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendeur`
--
ALTER TABLE `vendeur`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `acheteur`
--
ALTER TABLE `acheteur`
  ADD CONSTRAINT `fk_meubles_acheteur_id` FOREIGN KEY (`meubles_id`) REFERENCES `meubles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personne_acheteur_id` FOREIGN KEY (`personne_id`) REFERENCES `personne` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vendeur`
--
ALTER TABLE `vendeur`
  ADD CONSTRAINT `fk_meubles_vendeur_id` FOREIGN KEY (`meubles_id`) REFERENCES `meubles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personne_vendeur_id` FOREIGN KEY (`personne_id`) REFERENCES `personne` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
