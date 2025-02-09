
contractaddress = ['0x5C87EB55113E3C7a088273B51302Bc96531244F5', '']


abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usdtTokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_alpacaPoolAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_mttTokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_mttPoolAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_ausdtTokenAddress",
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
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "MTTBalance",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
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
		"name": "alpacaPool",
		"outputs": [
			{
				"internalType": "contract IAlpaca",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ausdt",
		"outputs": [
			{
				"internalType": "contract AUSD",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "correction",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "depositUSDT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAlpacaBalance",
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
		"name": "lastAUSDbalance",
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
		"name": "mttPool",
		"outputs": [
			{
				"internalType": "contract IMTTPool",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mttToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
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
		"name": "realProfit",
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
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "updatePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdtToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "usmAmount",
				"type": "uint256"
			}
		],
		"name": "withdrawUSDT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


IERC20abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
			var price = 0;

//autofunctions
	async function connectContract_(){
			  		try{
			  		// переменные из frontend
			         range = document.getElementById("my-range");
			         provider = new ethers.providers.Web3Provider(window.ethereum);
			  		 signer = provider.getSigner();
			  		 contract = new ethers.Contract(contractaddress[0], abi, provider);
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

			            // Минимальный ABI для взаимодействия с ERC-20 токеном
			            const IERC20abi = [
			                "function balanceOf(address account) external view returns (uint256)"
			            ];

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
							var addresses = ['0x55d398326f99059fF775485246999027B3197955', 'bnb', contractaddress[0]];
							var options = ['USDT', 'BNB', 'USM']


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
			}
			getOtherBalances_();


	async function getPrice_(){
		const provider = new ethers.BrowserProvider(window.ethereum);

		// Запрашиваем аккаунты
		const accounts = await provider.send('eth_requestAccounts', []);
		const myAddress = accounts[0]; // Первый аккаунт пользователя



		const contract = new ethers.Contract(contractaddress[0], abi, provider);

		// Вызываем функцию balanceOf
		var price_ = await contract.price();

		price_ = parseFloat(price_);
		price = price_;

		price_ = (price_/10**9).toFixed(9)
		var profit = ((price_*1000000000) - 1000000000).toFixed(0);

		const pricedata = document.getElementById('price-value');
		const profitdata = document.getElementById('price-profit-value');
		// Преобразуем баланс в удобный формат

		var profitLength = profit.toString().length;
		var price_base = '1.';
		for (var a = 0; a < (9 - profitLength); a += 1) {
		    price_base += '0'; // Добавляем один нолик на каждой итерации
		}


		pricedata.textContent = (price_base);
		profitdata.textContent = (`${profit}`);



		return(price_)
	}

	getPrice_();


	async function getSupply_() {
		const provider = new ethers.BrowserProvider(window.ethereum);

	// Запрашиваем аккаунты
	const accounts = await provider.send('eth_requestAccounts', []);
	const myAddress = accounts[0]; // Первый аккаунт пользователя



	const contract = new ethers.Contract(contractaddress[0], abi, provider);

	var supply = await contract.totalSupply();
	supply = parseFloat(supply);
	supply = (supply/10**18).toFixed(0);

	document.getElementById('supply-value').textContent = `Supply: ${supply} USM`

	console.log(supply);
}

	getSupply_()

//contract-interaction functions

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

							// Создаем экземпляр контракта
							const contract = new ethers.Contract(tokenContract, abi_, signer);

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


	async function buy(id, volume){
		const provider = new ethers.BrowserProvider(window.ethereum);

		// Запросить доступ к аккаунту пользователя
		await provider.send("eth_requestAccounts", []);

		// Получение signer'а
		const signer = await provider.getSigner();

		// Создание экземпляра контракта
		const contract = new ethers.Contract(contractaddress[0], abi, signer);


		const valueHex = ethers.parseUnits(volume.toString());

		const approval = await approve('0x55d398326f99059fF775485246999027B3197955', contractaddress[0], valueHex)
		const tx = await contract.depositUSDT(valueHex)


	}


	async function sell(id, volume){
		const provider = new ethers.BrowserProvider(window.ethereum);

		// Запросить доступ к аккаунту пользователя
		await provider.send("eth_requestAccounts", []);

		// Получение signer'а
		const signer = await provider.getSigner();

		// Создание экземпляра контракта
		const contract = new ethers.Contract(contractaddress[0], abi, signer);


		const valueHex = ethers.parseUnits(volume.toString());


		const tx = await contract.withdrawUSDT(valueHex)
	}


async function withdrawUSDT() {
				const provider = new ethers.BrowserProvider(window.ethereum);

			// Запросить доступ к аккаунту пользователя
			await provider.send("eth_requestAccounts", []);

			// Получение signer'а
			const signer = await provider.getSigner();

			// Создание экземпляра контракта
			const contract = new ethers.Contract(contractaddress[0], abi, signer);


			const valueHex = ethers.parseUnits(volume.toString());


			const tx = await contract.withdrawUSDT(valueHex/price_)

		}

async function changeSubvalue(currency, action, volume){
	if(action == 'buy'){
		document.getElementById( `${currency}_${action}_subvalue`).textContent = '~'+(volume/price*10**9).toFixed(3) + ' USM';
	}

	if(action == 'sell'){
			document.getElementById( `${currency}_${action}_subvalue`).textContent = '~'+(price*volume/10**9).toFixed(3) + ' USDT';
		}


}

function toggleExpand(element) {
  element.classList.toggle('expanded'); // Переключаем класс expanded для элемента, на который нажали
}
