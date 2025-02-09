contractaddress = '0x576BE90c3ca85c87F01531eEecEb9aA82CA77E3a'

abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "changePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "usdtAmount",
				"type": "uint256"
			}
		],
		"name": "tradeToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenContractAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_usdtContractAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Withdrawal",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdrawMTT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawUSDT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdtContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]






var range = null;
        var provider = null;
  		var signer = null;
  		var contract = null;
  		//geting account information
  		var myAddress = null;
  		var myBalance = null;
  		//getting current date
  		var date = null;
  		var maxValue = 0;

//autofunctions
async function connectContract_(){
			  		try{
			  		// переменные из frontend
			         range = document.getElementById("my-range");
			         provider = new ethers.providers.Web3Provider(window.ethereum);
			  		 signer = provider.getSigner();
			  		 contract = new ethers.Contract(contractaddress, abi, provider);
			  		//geting account information
			  		 myAddress = provider.getSigner().getAddress();
			  		 myBalance =  provider.getBalance(myAddress);
			  		//getting current date
			  		 date = contract.n.call();
			  		}

	  		catch(error){}}
				connectContract_();

	async function connectMetaMask_(){
				if (window.ethereum) {
				const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
					console.log(accounts);
					const connectButton = document.getElementById('connectButton');
					connectButton.textContent = `${accounts[0].slice(0, 4)}...${accounts[0].slice(-3)}`;
					myAddress = accounts[0];



				} else {
					console.log('MetaMask is not installed');
				}
			}
			connectMetaMask_();

	async function getMTTbalance_() {
			    if (window.ethereum) {
			        try {
			            // Подключаемся к MetaMask
			            const provider = new ethers.BrowserProvider(window.ethereum);

			            // Запрашиваем аккаунты
			            const accounts = await provider.send('eth_requestAccounts', []);
			            const myAddress = accounts[0]; // Первый аккаунт пользователя

			            // Адрес контракта токена
			            const tokenAddress = '0xd3A9b3f20825431560a29698D57CC765540C70E5';

									contract = new ethers.Contract(contractaddress, abi, provider);
			            // Минимальный ABI для взаимодействия с ERC-20 токеном
			            const IERC20abi = [
			                "function balanceOf(address account) external view returns (uint256)"
			            ];
									contract = new ethers.Contract(contractaddress, abi, provider);
			            // Создаем экземпляр контракта с провайдером
			            const tokenContract = new ethers.Contract(tokenAddress, IERC20abi, provider);

			            // Вызываем функцию balanceOf
			            var mttBalance = await tokenContract.balanceOf(myAddress);


									const mtt_button = document.getElementById('mtt_h');
			            // Преобразуем баланс в удобный формат
									var formattedMTTbalance = ethers.formatUnits(mttBalance);
									formattedMTTbalance = parseFloat(formattedMTTbalance).toFixed(0);
			            mtt_button.textContent = (`${formattedMTTbalance} MTT`);
			        } catch (error) {
			            console.error('Error during getting balance:', error);
			        }
			    } else {
			        console.error('MetaMask is not installed.');
			    }
			}
			getMTTbalance_();


	async function getOtherBalances_() {
			if (window.ethereum) {
					try {
							// Подключаемся к MetaMask
							const provider = new ethers.BrowserProvider(window.ethereum);

							// Запрашиваем аккаунты
							const accounts = await provider.send('eth_requestAccounts', []);
							const myAddress = accounts[0]; // Первый аккаунт пользователя

							// Адрес контракта токена
							var addresses = ['0x55d398326f99059fF775485246999027B3197955', 'bnb', '0xf4B8D3469F237c86da0C2D94284E1ed22Cb91497'];
							var options = ['USDT', 'BNB', 'USM']
							var balances=['', '', '']

							// Минимальный ABI для взаимодействия с ERC-20 токеном
							const IERC20abi = [
									"function balanceOf(address account) external view returns (uint256)"
							];

							for(let a = 0; a < addresses.length; a++){
							// Создаем экземпляр контракта с провайдером
							var address_;
							var balance;

							if(addresses[a] == 'bnb'){balance = await provider.getBalance(myAddress);}

							else{
									const tokenContract = new ethers.Contract(addresses[a], IERC20abi, provider);

									// Вызываем функцию balanceOf
									balance = await tokenContract.balanceOf(myAddress);
							}
							balance = parseFloat(balance);
							balance = balance / 10**18
							balances[a] = balance;
							balance = balance.toFixed(2);
							const option = document.getElementById(`option${a}`);
							// Преобразуем баланс в удобный формат
							option.textContent = (`${balance} ${options[a]}`);
							if(a==0){
								const panel = document.getElementById(`usdt-bal`);
								// Преобразуем баланс в удобный формат
								panel.textContent = (`${balance} ${options[a]}`);
							}
						}

					} catch (error) {
							console.error('Error during getting balance:', error);
					}
			} else {
					console.error('MetaMask is not installed.');
			}

			return(balances);
			}
			getOtherBalances_();


//contract interaction



			async function approve(tokenContract, spenderAddress, amount) {
			    try {
			        // Убедитесь, что MetaMask установлен и доступен
			        if (!window.ethereum) {
			            throw new Error('MetaMask is not installed!');
			        }

			        // Создаем провайдер и подписанта
			        const provider = new ethers.BrowserProvider(window.ethereum);
			        const signer = await provider.getSigner();

			        // Запрашиваем аккаунты
			        const accounts = await provider.send('eth_requestAccounts', []);
			        const myAddress = accounts[0]; // Первый аккаунт пользователя

			        // ABI стандарта ERC20 (частичное)
			        const abi_ = [
			            "function approve(address spender, uint256 amount) public returns (bool)"
			        ];
							// const tokenAddress = '0xd3A9b3f20825431560a29698D57CC765540C70E5';
			        // Создаем экземпляр контракта
			        const contract = new ethers.Contract(tokenContract, abi_, signer);
							amount = BigInt(amount);
			        // Вызываем функцию approve
			        const tx = await contract.approve(spenderAddress, amount);
			        console.log('Transaction sent:', tx.hash);

			        // Ожидаем подтверждения транзакции
			        const receipt = await tx.wait();
			        console.log('Transaction confirmed:', receipt);

			        return receipt;
			    } catch (error) {
			        console.error('Error during approval:', error);
			        throw error;
			    }
			}



	async function buyMTT(volume) {
				const provider = new ethers.BrowserProvider(window.ethereum);
				const signer = await provider.getSigner();
				// Запрашиваем аккаунты
				const accounts = await provider.send('eth_requestAccounts', []);
				const myAddress = accounts[0]; // Первый аккаунт пользователя


				// Создаем экземпляр контракта с провайдером
				const contract = new ethers.Contract(contractaddress, abi, signer);
				const valueHex = ethers.parseUnits(volume.toString());

				const approval = await approve('0x55d398326f99059fF775485246999027B3197955','0x576BE90c3ca85c87F01531eEecEb9aA82CA77E3a',  volume*10**18);
				const tx = contract.tradeToken(valueHex)
	}





	//site interaction



	async function fastSetMTTvolume(percent){
			var balance = await getOtherBalances_();
			// console.log(balance)
			balance = Math.floor(balance[0] * 1000)/1000
			var totext = balance*percent/100;
			totext = totext.toFixed(3)

			document.getElementById('volume_mtt').value = (totext / 0.01).toFixed(1)


			const inp = document.getElementById('volume_usdt');
			inp.value = totext;
	}
