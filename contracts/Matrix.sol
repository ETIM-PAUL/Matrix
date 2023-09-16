// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract RandomMatrix {
    uint8[7][5] private matrix; // 5x7 matrix

    address owner;

    constructor() {
        owner = msg.sender;
        fillMatrix();
    }

    function getColor(uint x, uint y) public view returns (string memory col) {
        require(x * y <= 35, "Out of Bounds");
        uint cellValue = matrix[x][y];
        if (cellValue == 1) {
            return "white";
        } else if (cellValue == 2) {
            return "black";
        } else if (cellValue == 3) {
            return "red";
        } else if (cellValue == 4) {
            return "black";
        }
    }

    // Generate a random number between 0 and 4
    function random(bytes memory _idan) internal pure returns (uint8) {
        uint256 randomNumber = uint256(keccak256(_idan));
        return (uint8(randomNumber % 4) + 1);
    }

    // Fill the matrix with random numbers
    function fillMatrix() public {
        require(
            msg.sender == owner,
            "You no fit set am, na only idan fit do am"
        );
        for (uint8 i = 0; i < 5; i++) {
            for (uint8 j = 0; j < 7; j++) {
                matrix[i][j] = random(abi.encodePacked(i * j, "idan", j + 1));
            }
        }
    }
}
