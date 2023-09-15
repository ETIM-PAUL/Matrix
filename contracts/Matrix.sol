// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract RandomMatrix {
    uint8[7][5] public matrix; // 5x7 matrix

    address owner;

    enum Colors {
        white,
        black,
        red,
        blue
    }
    
    constructor() {
        owner = msg.sender;
    }

    // Generate a random number between 0 and 4
    function random(bytes memory _idan) public pure returns (uint8) {
        uint256 randomNumber = uint256(keccak256(_idan));
        return uint8(randomNumber % 5);
    }

    function getColor() public view returns ()

    // Fill the matrix with random numbers
    function fillMatrix() public {
        require(msg.sender == owner, "You no fit set am, na only idan fit do am");
        for (uint8 i = 0; i < 5; i++) {
            for (uint8 j = 0; j < 7; j++) {
                matrix[i][j] = random(abi.encodePacked(i,"idan",j));
            }
        }
    }

}
