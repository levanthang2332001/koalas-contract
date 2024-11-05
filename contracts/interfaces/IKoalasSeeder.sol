// SPDX-License-Identifier: MIT

/// @ title  Interace for KoalasSeeder

pragma solidity ^0.8.26;

import { IKoalasDescriptor } from "./IKoalasDescriptor.sol";

interface IKoalasSeeder {
    struct Seed {
        uint48 background;
        uint48 fur;
        uint48 face;
        uint48 clothe;
        uint48 eye;
        uint48 mouth;
        uint48 erring;
        uint48 hand;
        uint48 head;
    }
    
    function generateSeed(uint256 koalasId, IKoalasDescriptor descriptor) external view returns (Seed memory);
}