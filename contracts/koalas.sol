// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IKoalasDescriptor} from "./interfaces/IKoalasDescriptor.sol";
import {IKoalasSeeder} from "./interfaces/IKoalasSeeder.sol";
import {IKoalasToken} from "./interfaces/IKoalasToken.sol";
import {IProxyRegistry} from "./external/IProxyRegistry.sol";
import {Ownable} from "../@openzeppelin/contracts/access/Ownable.sol";
import {ERC721} from "./base/ERC721.sol";
import {ERC721Checkpointable} from "./base/ERC721Checkpointable.sol";
import {IERC721} from "../@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract koalas is IKoalasToken, Ownable, ERC721Checkpointable {
    // The Koalaser DAO address
    address public koalasersDAO;

    // A address with permission to mint Koalas
    address public minter;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;

    IKoalasDescriptor public descriptor;

    IKoalasSeeder public seeder;

    IProxyRegistry public immutable proxyRegistry;

    bool public isMinterLocked;

    bool public isDescriptorLocked;

    bool public isSeedLocked;

    mapping(uint256 => IKoalasSeeder.Seed) public seeds;

    uint256 private _currentKoalasId;

    // IPFS hash of the contract URI (152)
    string private _contractURIHash =
        "QmRJRDXZF5c7Qgiguv1rKMAYSWCPAEjrudhbewd1Sr1yLC";

    /**
     * @notice Require that the minter has not been locked
     **/
    modifier whenMinterNotLocked() {
        require(!isMinterLocked, "Minter is locked");
        _;
    }

    modifier whenDescriptorNotLocked() {
        require(!isDescriptorLocked, "Descriptor is locked");
        _;
    }

    modifier whenSeederNotLocked() {
        require(!isSeedLocked, "Seeder is locked");
        _;
    }

    modifier onlyKoaslaserDAO() {
        require(msg.sender == koalasersDAO, "Sender is not the koalasers DAO");
        _;
    }

    modifier onlyMinter() {
        require(msg.sender == minter, "Sender is not the minter");
        _;
    }

    constructor(IProxyRegistry _proxyRegistry) ERC721("Koalas", "KOALAS") {
        proxyRegistry = _proxyRegistry;
    }

    function contractURI() public view returns (string memory) {
        return string(abi.encodePacked("ipfs://", _contractURIHash));
    }

    function setContractURIHash(
        string memory newContractURIHash
    ) external onlyOwner {
        _contractURIHash = newContractURIHash;
    }

    /**
     * @notice A distinct Uniform Resource Identifier (URI) for a given asset.
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(
            _exists(tokenId),
            "NounsToken: URI query for nonexistent token"
        );
        return descriptor.tokenURI(tokenId, seeds[tokenId]);
    }

    /**
     * @notice Similar to `tokenURI`, but always serves a base64 encoded data URI
     * with the JSON contents directly inlined.
     */
    function dataURI(
        uint256 tokenId
    ) external view override returns (string memory) {
        require(
            _exists(tokenId),
            "NounsToken: URI query for nonexistent token"
        );
        return descriptor.dataURI(tokenId, seeds[tokenId]);
    }

    /**
     * @notice Set the Koalasers DAO.
     * @dev Only callable by the Koalasers DAO when not locked.
     */
    function setKoalasDAO(
        address _KoalasersDAO
    ) external override onlyKoaslaserDAO {
        koalasersDAO = _KoalasersDAO;
        emit KoalasdersDAOUpdated(_KoalasersDAO);
    }

    /**
     * @notice Set the token minter.
     * @dev Only callable by the owner when not locked.
     */
    function setMinter(
        address _minter
    ) external override onlyOwner whenMinterNotLocked {
        minter = _minter;
        emit MinterUpdated(_minter);
    }

    /**
     * @notice Lock the minter.
     * @dev This cannot be reversed and is only callable by the owner when not locked.
     */
    function lockMinter() external override onlyOwner whenMinterNotLocked {
        isMinterLocked = true;
        emit MinterLocked();
    }

    /**
     * @notice Set the token URI descriptor.
     * @dev Only callable by the owner when not locked.
     */
    function setDescriptor(
        IKoalasDescriptor _descriptor
    ) external override onlyOwner whenDescriptorNotLocked {
        descriptor = _descriptor;
        emit DescriptorUpdated(_descriptor);
    }

    /**
     * @notice Lock the descriptor.
     * @dev This cannot be reversed and is only callable by the owner when not locked.
     */
    function lockDescriptor()
        external
        override
        onlyOwner
        whenDescriptorNotLocked
    {
        isDescriptorLocked = true;
        emit DescriptorLocked();
    }

    /**
     * @notice Set the token seeder.
     * @dev Only callable by the owner when not locked.
     */
    function setSeeder(
        IKoalasSeeder _seeder
    ) external override onlyOwner whenSeederNotLocked {
        seeder = _seeder;
        emit SeederUpdated(_seeder);
    }

    /**
     * @notice Lock the seeder.
     * @dev This cannot be reversed and is only callable by the owner when not locked.
     */
    function lockSeeder() external override onlyOwner whenSeederNotLocked {
        isSeedLocked = true;
        emit SeederLocked();
    }

    function isApprovedForAll(
        address owner,
        address operator
    ) public view override(IERC721, ERC721) returns (bool) {
        if (proxyRegistry.proxies(owner) == operator) {
            return true;
        }
        return super.isApprovedForAll(owner, operator);
    }

    function mint() public onlyMinter returns (uint256) {
        if (_currentKoalasId <= 500 && _currentKoalasId % 10 == 0) {
            _mintTo(koalasersDAO, _currentKoalasId++);
        }
        return _mintTo(minter, _currentKoalasId++);
    }

    function _mintTo(address to, uint256 koalasId) internal returns (uint256) {
        IKoalasSeeder.Seed memory seed = seeds[koalasId] = seeder.generateSeed(
            koalasId,
            descriptor
        );
        _mint(owner(), to, koalasId);
        emit KoalasCreated(koalasId, seed);
        return koalasId;
    }

    // Add this function to match the interface
    function burn(uint256 tokenId) external override {
        // Assuming we want to burn the caller's most recent token
        _burn(tokenId);
        emit KoalasBurned(tokenId);
    }

}
