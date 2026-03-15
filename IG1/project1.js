/*// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
	// Convert rotation from degrees to radians
	var rad = rotation * Math.PI / 180;
	var cos = Math.cos(rad);
	var sin = Math.sin(rad);

	// Create the transformation matrix
	return Array(
		scale * cos, scale * sin, 0,
		-scale * sin, scale * cos, 0,
		positionX, positionY, 1
	);
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
	// Implement matrix multiplication for 3x3 matrices in column-major order
	var a11 = trans1[0], a12 = trans1[3], a13 = trans1[6];
	var a21 = trans1[1], a22 = trans1[4], a23 = trans1[7];
	var a31 = trans1[2], a32 = trans1[5], a33 = trans1[8];

	var b11 = trans2[0], b12 = trans2[3], b13 = trans2[6];
	var b21 = trans2[1], b22 = trans2[4], b23 = trans2[7];
	var b31 = trans2[2], b32 = trans2[5], b33 = trans2[8];

	return Array(
		a11 * b11 + a12 * b21 + a13 * b31,
		a21 * b11 + a22 * b21 + a23 * b31,
		a31 * b11 + a32 * b21 + a33 * b31,
		a11 * b12 + a12 * b22 + a13 * b32,
		a21 * b12 + a22 * b22 + a23 * b32,
		a31 * b１２ + a３２ * b２２ + a３３ * b３２,
		a１１ * b１３ + a１２ * b２３ + a１３ * b３３,
		a２１ * b１３ + a２２ * b２３ + a２３ * b３３,
		a３１ * b１３ + a３２ * b２３ + a３３ * b３３
	);
}
*/





// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
	//angoli di rotazione da gradi a radianti
	var radians = rotation * Math.PI / 180;
	var out = [
		scale*Math.cos(radians), scale*Math.sin(radians), 0,
		-scale*Math.sin(radians), scale*Math.cos(radians), 0,
		positionX, positionY, 1
	];
	return out;
}


// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
	//funzione che implementa il prodotto di due matrici 3*3s
		var result = [
		trans1[0] * trans2[0] + trans1[1] * trans2[3] + trans1[2] * trans2[6],
		trans1[0] * trans2[1] + trans1[1] * trans2[4] + trans1[2] * trans2[7],
		0,
		trans1[3] * trans2[0] + trans1[4] * trans2[3] + trans1[5] * trans2[6],
		trans1[3] * trans2[1] + trans1[4] * trans2[4] + trans1[5] * trans2[7],
		0,
		trans1[6] * trans2[0] + trans1[7] * trans2[3] + trans1[8] * trans2[6],
		trans1[6] * trans2[1] + trans1[7] * trans2[4] + trans1[8] * trans2[7],
		1,
		];
	
		//(trans1 * trans2)
		return result;
}
