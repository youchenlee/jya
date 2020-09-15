module Jya where

-- | Input: Int n
-- | Output: The count of a numbered set [1..n], removing multiple of (3, 5) keep cm(3, 5)
--
-- >>> count 14
-- 8
-- >>> count 15
-- 9
-- >>> count 16
-- 10
-- >>> count 0
-- 0
-- >>> count 1
-- 1
-- >>> count 2
-- 2
-- >>> count 3
-- 2


-- Version 1
count :: Int -> Int
count n = length [ x | x <- [1..n], x `mod` 3 /= 0, x `mod` 5 /= 0 ] + n `div` 15

-- Version 2 (faster)
count' :: Int -> Int
count' n = n - (n `div` 3) - (n `div` 5) + (n `div` 15) * 2

-- Test
test :: Int -> Bool
test n = count n == count' n

testList :: [Int] -> [Bool]
testList xs = map test xs

dotest = map test [1,2,3,4,5,6,7,14,15,16,29,30,31]
