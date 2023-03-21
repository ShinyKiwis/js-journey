# How numbers are encoded in JavaScript ?
## JavaScript numbers
All numbers in JavaScript are floating point numbers, to be more accurate, they are represented internally in 64 bit binary (double-precision).
So how they divided 64 bits into 3 parts ?
- Sign bit (1 bit): bit 63 
- Exponent (11 bit): bit 62 - bit 52
- Fraction (52 bit): bit 51 - bit 0

The components work as follows: If the sign bit is 0, the number is positive, otherwise negative. Roughly, the fraction contains the digits of a number, while the exponent indicates where the point is.
## The fraction
One way of representing non-negative floating point numbers:
- The significand (mantissa) contains the digits, as a natural number
- The exponent specifies how many digits to the left (negative exponent) and to the right (positive exponent) the point should be shifted
> JavaScript numbers use a rational number as the significand: 1.f where f is the 52 bit fraction. Ignoring the sign, the number is the significand multiplied by $2^p$ where p is the exponent.

For examples:
<center>

| f and p     	| Converted                          	|
|-------------	|------------------------------------	|
| f=101, p=2  	| Number: 1.101 × $2^2$ = 110.1      	|
| f=101, p=-2 	| Number: 1.101 × $2^{-2}$ = 0.01101 	|
| f=0, p=0    	| Number: 1.0 × $2^0$= 1             	|

</center>

### Representing integers
> How many bits does the encoding give us for integers ? 

The significand has 53 digits, one before the point, 52 after the point. With p = 52, we have a 53 bit natural number. Interestingly, we have full 53 bits for the magnitude (absolute value) of the integer, since the sign of the number is stored separately.

## The exponent
The exponent is 11 bit long, meaning its lowest value is 0, its highest value is 2047 ($2^{11} -1$)
