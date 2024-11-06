// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IKoalasSeeder} from "./IKoalasSeeder.sol";

interface IKoalasDescriptor {
    event PartsLocked();

    event DataURIToggled(bool enabeled);

    event BaseURIUpdate(string baseURI);

    function arePartsLocked() external returns (bool);

    function isDataURIEnabled() external returns (bool);

    function baseURI() external returns (string memory);

    function palettes(
        uint8 paletteIndex,
        uint256 colorIndex
    ) external view returns (string memory);

    function backgrounds(uint8 index) external view returns (string memory);

    function furs(uint8 index) external view returns (string memory);

    function faces(uint8 index) external view returns (string memory);

    function clothes(uint8 index) external view returns (string memory);

    function eyes(uint8 index) external view returns (string memory);

    function mouths(uint8 index) external view returns (string memory);

    function earrings(uint8 index) external view returns (string memory);

    function hands(uint8 index) external view returns (string memory);

    function heads(uint8 index) external view returns (string memory);

    function backgroundCount() external view returns (uint256);

    function furCount() external view returns (uint256);

    function faceCount() external view returns (uint256);

    function clotheCount() external view returns (uint256);

    function eyeCount() external view returns (uint256);

    function mouthCount() external view returns (uint256);

    function earringCount() external view returns (uint256);

    function handCount() external view returns (uint256);

    function headCount() external view returns (uint256);

    function addManyColorsToPalette(
        uint8 paletteIndex,
        string[] calldata newColors
    ) external;

    function addManyBackground(string[] calldata backgrounds) external;

    function addManyFur(bytes[] calldata furs) external;

    function addManyFace(bytes[] calldata faces) external;

    function addManyClothe(bytes[] calldata clothes) external;

    function addManyEye(bytes[] calldata eyes) external;

    function addManyMouth(bytes[] calldata mouths) external;

    function addManyEarring(bytes[] calldata earrings) external;

    function addManyHand(bytes[] calldata hands) external;

    function addManyHead(bytes[] calldata head) external;

    function addColorsToPalette(
        uint8 paletteIndex,
        string calldata newColors
    ) external;

    function addBackground(string calldata backgrounds) external;

    function addFur(bytes calldata furs) external;

    function addFace(bytes calldata faces) external;

    function addClothe(bytes calldata clothes) external;

    function addEye(bytes calldata eyes) external;

    function addMouth(bytes calldata mouths) external;

    function addEarring(bytes calldata earrings) external;

    function addHand(bytes calldata hands) external;

    function addHead(bytes calldata head) external;

    function lockParts() external;

    function toggleDataURIEnabled() external;

    function setBaseURI(string calldata baseURI) external;

    function tokenURI(
        uint256 tokenId,
        IKoalasSeeder.Seed memory seed
    ) external view returns (string memory);

    function dataURI(
        uint256 tokenId,
        IKoalasSeeder.Seed memory seed
    ) external view returns (string memory);

    function genericDataURI(
        string calldata name,
        string calldata description,
        IKoalasSeeder.Seed memory seed
    ) external view returns (string memory);

    function generateSVGImage(
        IKoalasSeeder.Seed memory seed
    ) external view returns (string memory);
}

