// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IERC721} from "../../@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IKoalasSeeder} from "./IKoalasSeeder.sol";
import {IKoalasDescriptor} from "./IKoalasDescriptor.sol";

interface IKoalasToken is IERC721 {
    event KoalasCreated(uint256 indexed tokenId, IKoalasSeeder.Seed seed);
    event KoalasBurned(uint256 indexed tokenId);
    event KoalasdersDAOUpdated(address KoalasdersDAO);
    event MinterUpdated(address minter);
    event MinterLocked();
    event DescriptorUpdated(IKoalasDescriptor descriptor);
    event DescriptorLocked();
    event SeederUpdated(IKoalasSeeder seeder);
    event SeederLocked();

    function mint() external returns (uint256);

    function burn(uint256 tokenId) external;

    function dataURI(uint256 tokenId) external returns (string memory);

    function setKoalasDAO(address KoalasdersDAO) external;

    function setMinter(address minter) external;

    function lockMinter() external;

    function setDescriptor(IKoalasDescriptor descriptor) external;

    function lockDescriptor() external;

    function setSeeder(IKoalasSeeder seeder) external;

    function lockSeeder() external;
}
