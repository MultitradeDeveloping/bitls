#include <iostream>
#include <iomanip>
#include <string>
#include <random>
#include <cryptopp/eccrypto.h>
#include <cryptopp/oids.h>
#include <cryptopp/hex.h>
#include <cryptopp/keccak.h>
#include <cryptopp/osrng.h>

std::string generateEthereumAddress(const CryptoPP::ECDSA<CryptoPP::ECP, CryptoPP::SHA256>::PrivateKey &privateKey) {
    // Generate the public key
    CryptoPP::ECDSA<CryptoPP::ECP, CryptoPP::SHA256>::PublicKey publicKey;
    privateKey.MakePublicKey(publicKey);

    CryptoPP::ECPPoint q = publicKey.GetPublicElement();

    // Serialize public key to byte array (uncompressed format)
    std::string publicKeyBytes;
    publicKeyBytes.push_back(0x04);
    publicKeyBytes.append(reinterpret_cast<const char *>(q.x.BytePtr()), q.x.ByteCount());
    publicKeyBytes.append(reinterpret_cast<const char *>(q.y.BytePtr()), q.y.ByteCount());

    // Hash the public key using Keccak-256
    CryptoPP::Keccak_256 hash;
    std::string hashResult(32, 0);
    hash.Update(reinterpret_cast<const CryptoPP::byte *>(publicKeyBytes.data()), publicKeyBytes.size());
    hash.TruncatedFinal(reinterpret_cast<CryptoPP::byte *>(&hashResult[0]), hashResult.size());

    // Take the last 20 bytes of the hash
    std::string address = hashResult.substr(12, 20);

    // Convert to hexadecimal
    std::ostringstream oss;
    oss << "0x";
    for (unsigned char c : address) {
        oss << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(c);
    }

    return oss.str();
}

int main() {
    const std::string targetPrefix = "0xBA742c";
    const std::string targetSuffix = "790D554";

    CryptoPP::AutoSeededRandomPool prng;

    while (true) {
        // Generate a new private key
        CryptoPP::ECDSA<CryptoPP::ECP, CryptoPP::SHA256>::PrivateKey privateKey;
        privateKey.Initialize(prng, CryptoPP::ASN1::secp256k1());

        // Generate the Ethereum address
        std::string address = generateEthereumAddress(privateKey);

        // Check if the address matches the target
        if (address.substr(0, targetPrefix.size()) == targetPrefix &&
            address.substr(address.size() - targetSuffix.size()) == targetSuffix) {
            std::cout << "Match found! Address: " << address << std::endl;
            break;
        }
    }

    return 0;
}
