/**
 * Given an image represented by NxN matrix, where each pixel in the image is 4bytes
 * rotate image by 90deg. Do this in place?
 */

function rotate(matrix) {
    var edge = matrix[0].length;
    var temp;

    for (var i = 0; i < edge / 2; i++) {
        for (var j = i; j < edge - i - 1; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][edge - i - 1];
            matrix[j][edge - i - 1] = matrix[edge - i - 1][edge - j - 1];
            matrix[edge - i - 1][edge - j - 1] = matrix[edge - j - 1][i];
            matrix[edge - j - 1][i] = temp;
        }
    }

    return matrix
}