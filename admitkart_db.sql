-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2021 at 02:01 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admitkart_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(10) NOT NULL,
  `ques` varchar(255) NOT NULL,
  `topic` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `ques`, `topic`, `tags`) VALUES
(1, 'What is the qualifying criteria to get admission in Stanford University ?', 'qualifying-criteria', 'stanford-university, usa, admission'),
(2, 'What are the top engineering colleges in the USA ?', 'top-colleges', 'usa,engineering,top'),
(24, 'Which Indian state has partnered with SIDBI to provide support to MSMEs in the state?\r\n', 'MSMEs ', 'Indian, state,SIDBI,'),
(25, 'Ram Vilas Paswan entered the Guinness Record for winning a parliamentary election with the highest margin, from which constituency?\n\n', 'MSMEs ', 'Ram Vilas Paswan, Guiness, Record, constituency'),
(26, 'Which technology company has partnered with AICTE to train students in new-age technologies?\n\n', ' AICTE to train students in new-age technologies', 'AICTE ,new-age,technologies'),
(27, 'GKToday’s General Knowledge (GK) Questions is a repository of thousands of Multiple Choice GK Questions on various static general?', 'alok', 'dark, admit'),
(29, 'dkvnkdngsdkbn vdlbdgnkdgn', 's,vnsvnkdnkdsnkdsngk', 'alok,dhiru,bhai'),
(30, 'ckbvkBZVkxzv', 'vxvx vxvkvz', 'alok'),
(31, 'ckbvkBZVkxzv', 'vxvx vxvkvz', 'dhiru');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
