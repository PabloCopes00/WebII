-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 30, 2022 at 08:00 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tpeweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `beerNameDesc`
--

CREATE TABLE `beerNameDesc` (
  `id_name_fk` int(11) NOT NULL,
  `beer_name` varchar(45) NOT NULL,
  `abv` double NOT NULL,
  `ibu` double NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `beerNameDesc`
--

INSERT INTO `beerNameDesc` (`id_name_fk`, `beer_name`, `abv`, `ibu`, `description`) VALUES
(1, 'New England Ipa', 6, 45, 'Cerveza turbia, sedosa y con buen cuerpo. De amargor medio y abundante aroma a cítricos, frutos de carozo y frutas tropicales gracias a su alto contenido de lúpulos.'),
(2, 'Cream Ale', 4.5, 12, 'Surgida en Estados Unidos como la alternativa artesanal a las típicas cervezas lager industriales, es una cerveza rubia, refrescante y liviana, pero con un dejo a malta y amargor justo para redondear la mejor compañera para todas las ocasiones.'),
(3, 'Irish Red Ale', 5.5, 23, 'Cerveza roja, de maltosidad media, con notas leves a caramelo y un leve sabor tostado hacia el final, de muy alta tomabilidad, que forma una combinación perfecta con su amargor medio/bajo.'),
(4, 'Honey Ale', 6, 12, 'Cerveza rubia, suavemente amarga, y refrescante. La Honey Ale esta hecha con miel de pradera pura, la cual deja un leve gusto a miel luego de la fermentación principal.'),
(5, 'Ginger Ale', 5, 10, 'Cerveza rubia muy liviana y de altísima tomabilidad, con notas cítricas propias de los lúpulos utilizados para su fabricación del agregado de jengibre, lo que la hace una cerveza ideal para refrescar las tardes de calor.'),
(6, 'Stout', 4.5, 28, 'Una cerveza negra de pronunciado sabor tostado que a menudo resulta similar al café. Típicamente domina un aroma a café moderado y notas secundarias a chocolate oscuro, cacao y cereales tostados. De moderado amargor y un seco final en boca.');

-- --------------------------------------------------------

--
-- Table structure for table `beerSale`
--

CREATE TABLE `beerSale` (
  `id` int(11) NOT NULL,
  `fk_id_name` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `container` varchar(45) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `beerSale`
--

INSERT INTO `beerSale` (`id`, `fk_id_name`, `type`, `container`, `stock`, `price`) VALUES
(1, 1, 'Ipa', 'Lata', 100, 550),
(2, 2, 'Rubia', 'Lata', 200, 550),
(3, 3, 'Roja', 'Lata', 200, 550),
(4, 4, 'Rubia', 'Lata', 200, 550),
(5, 5, 'Rubia', 'Lata', 200, 550),
(6, 6, 'Negra', 'Lata', 200, 550),
(7, 1, 'Ipa', 'Barril - 30L', 40, 30000),
(8, 2, 'Rubia', 'Barril - 30L', 40, 30000),
(9, 3, 'Roja', 'Barril - 30L', 40, 30000),
(10, 4, 'Rubia', 'Barril - 30L', 40, 30000),
(11, 5, 'Rubia', 'Barril - 30L', 40, 30000),
(12, 6, 'Negra', 'Barril - 30L', 40, 30000),
(13, 1, 'Ipa', 'Botella - 1L', 100, 1000),
(14, 2, 'Rubia', 'Botella - 1L', 100, 1000),
(15, 3, 'Roja', 'Botella - 1L', 100, 1000),
(16, 4, 'Rubia', 'Botella - 1L', 100, 1000),
(17, 5, 'Rubia', 'Botella - 1L', 100, 1000),
(18, 6, 'Negra', 'Botella - 1L', 100, 1000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `beerNameDesc`
--
ALTER TABLE `beerNameDesc`
  ADD PRIMARY KEY (`id_name_fk`);

--
-- Indexes for table `beerSale`
--
ALTER TABLE `beerSale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_name` (`fk_id_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `beerNameDesc`
--
ALTER TABLE `beerNameDesc`
  MODIFY `id_name_fk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `beerSale`
--
ALTER TABLE `beerSale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `beerSale`
--
ALTER TABLE `beerSale`
  ADD CONSTRAINT `beersale_ibfk_1` FOREIGN KEY (`fk_id_name`) REFERENCES `beerNameDesc` (`id_name_fk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
